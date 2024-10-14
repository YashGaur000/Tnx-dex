import React, { useCallback, useState } from 'react';
import {
  LockItemContainer,
  LockListContainer,
  Column,
  LockDetails,
  LockIcon,
  LockImg,
  LockInfo,
  LockInfoDes,
  LockInfoAction,
  LockInfoCheck,
  LockInfoText,
  LockInfoTextValue,
} from '../Styles/VeTenexTable.style';
import { Nft } from '../../../types/VotingEscrow';
import Pagination from '../../common/Pagination';
import { useNavigate } from 'react-router-dom';
import {
  getTimeDifference,
  locktokeninfo,
} from '../../../utils/common/voteTenex';
import { useVotingEscrowContract } from '../../../hooks/useVotingEscrowContract';
import contractAddress from '../../../constants/contract-address/address';
import SuccessPopup from '../../common/SucessPopup';
import { LoadingSpinner } from '../../common/Loader';
import { useVoterContract } from '../../../hooks/useVoterContract';
import { showErrorToast } from '../../../utils/common/toastUtils';
import { ToastContainer } from 'react-toastify';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';
import { useRootStore } from '../../../store/root';

//import LoaderIcon from '../../../assets/'; // Assuming you have a loader icon

const VeTenexTable: React.FC<{ nftData: Nft[] }> = ({ nftData }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [withdrawTknId, setWithdrawTknId] = useState<bigint>(0n);
  const [resetTknId, setResetTknId] = useState<bigint>(0n);
  const [iSuccessLock, setSuccessLock] = useState<boolean>(false);
  const [isWithdrawing, setIsWithdrawing] = useState<bigint | null>(null);
  const { setTransactionStatus } = useRootStore();
  const itemsPerPage = 5;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = nftData.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(nftData.length / itemsPerPage);
  const escrowAddress = contractAddress.VotingEscrow;
  const { withdraw } = useVotingEscrowContract(escrowAddress);
  const lockTokenInfo = locktokeninfo();
  const Navigate = useNavigate();
  const { reset } = useVoterContract();
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleLockButton = (option: string, pageID: bigint) => {
    if (option) {
      Navigate(`/governance/managevetenex/${option}/${pageID}`);
    } else {
      console.log('Route is undefined');
    }
  };

  const handleWithdraw = useCallback(
    async (tokenId: bigint): Promise<void> => {
      try {
        if (!tokenId) return;
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setIsWithdrawing(tokenId);
        await withdraw(BigInt(tokenId));
        setTimeout(() => {
          setWithdrawTknId(tokenId);
          setSuccessLock(true);
        }, TRANSACTION_DELAY);
        setTransactionStatus(TransactionStatus.IDEAL);
      } catch (error) {
        setSuccessLock(false);
        setTransactionStatus(TransactionStatus.FAILED);
        await showErrorToast('Failed to withdraw lock. Please try again.');
        console.error('Error during token withdrawal:', error);
      } finally {
        setIsWithdrawing(null);
      }
    },
    [withdraw]
  );

  const handleReset = useCallback(
    async (tokenId: bigint): Promise<void> => {
      try {
        if (!tokenId) return;
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setResetTknId(tokenId);
        await reset(BigInt(tokenId));
        setTransactionStatus(TransactionStatus.DONE);
        setResetTknId(0n);
        setSuccessLock(true);
      } catch (error) {
        setSuccessLock(false);
        await showErrorToast('Failed to reset lock. Please try again.');
        console.error('Error during token withdrawal:', error);
      } finally {
        setIsWithdrawing(null);
      }
    },
    [reset]
  );

  return (
    <LockListContainer>
      <ToastContainer />
      {currentItems.length > 0 ? (
        currentItems.map((lock, index) => {
          if (!lock.metadata) {
            console.warn(
              `No metadata found for lock with tokenId: ${lock.tokenId}`
            );
            return null;
          }
          if (lock.tokenId === withdrawTknId) {
            return null;
          }
          const metadata = lock.metadata;
          if (!metadata.attributes) {
            console.warn(
              `No attributes found in metadata for lock with tokenId: ${lock.tokenId}`
            );
            return null;
          }

          const attributes = metadata.attributes;

          const unlockDate =
            attributes.find((attr) => attr.trait_type === 'Unlock Date')
              ?.value ?? '';
          const formatUnloackData = getTimeDifference(unlockDate);
          const votingPower =
            attributes.find((attr) => attr.trait_type === 'Voting Power')
              ?.value ?? 'N/A';
          const lockedVELO =
            attributes.find((attr) => attr.trait_type === 'Locked VELO')
              ?.value ?? 'N/A';

          return (
            <LockItemContainer key={index}>
              <LockDetails width="279px">
                <LockIcon>
                  <LockImg src={lockTokenInfo.logoURI} alt="Lock Icon" />
                </LockIcon>
                <LockInfo>
                  <LockInfoDes fontSize={16} lineheight={23.92}>
                    {metadata.name}
                  </LockInfoDes>
                  <LockInfoDes fontSize={12} lineheight={17.94}>
                    {lockedVELO} {lockTokenInfo.symbol} locked for{' '}
                    {formatUnloackData}
                  </LockInfoDes>
                  <LockInfoCheck>
                    {formatUnloackData !== 'Expired' ? (
                      <>
                        <LockInfoAction
                          onClick={() =>
                            handleLockButton('increase', lock.tokenId)
                          }
                        >
                          Increase
                        </LockInfoAction>

                        <LockInfoAction
                          onClick={() =>
                            handleLockButton('extend', lock.tokenId)
                          }
                        >
                          Extend
                        </LockInfoAction>

                        <LockInfoAction
                          onClick={() =>
                            handleLockButton('merge', lock.tokenId)
                          }
                        >
                          Merge
                        </LockInfoAction>

                        <LockInfoAction
                          onClick={() =>
                            handleLockButton('transfer', lock.tokenId)
                          }
                        >
                          Transfer
                        </LockInfoAction>
                      </>
                    ) : (
                      <>
                        <LockInfoCheck>
                          {lock.votingStatus &&
                            (resetTknId === lock.tokenId ? (
                              <LockInfoAction
                                disabled={resetTknId === lock.tokenId}
                              >
                                <span
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  <LoadingSpinner width="10px" height="10px" />
                                  <span style={{ marginLeft: '5px' }}>
                                    Resetting
                                  </span>
                                </span>
                              </LockInfoAction>
                            ) : (
                              <LockInfoAction
                                onClick={() => handleReset(lock.tokenId)}
                                disabled={resetTknId === lock.tokenId}
                              >
                                Reset
                              </LockInfoAction>
                            ))}

                          {isWithdrawing === lock.tokenId ? (
                            <LockInfoAction
                              disabled={isWithdrawing === lock.tokenId}
                            >
                              <span
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <LoadingSpinner width="10px" height="10px" />
                                <span style={{ marginLeft: '5px' }}>
                                  withdrawing
                                </span>
                              </span>
                            </LockInfoAction>
                          ) : (
                            <LockInfoAction
                              onClick={() => handleWithdraw(lock.tokenId)}
                              disabled={isWithdrawing === lock.tokenId}
                            >
                              Withdraw
                            </LockInfoAction>
                          )}
                        </LockInfoCheck>
                      </>
                    )}
                  </LockInfoCheck>
                </LockInfo>
              </LockDetails>
              <Column>
                <LockInfoText>Voting Power</LockInfoText>
                <LockInfoTextValue>{votingPower}</LockInfoTextValue>
              </Column>
              <Column>
                <LockInfoText>Rebases</LockInfoText>
                <LockInfoTextValue>0 USDT</LockInfoTextValue>
              </Column>
            </LockItemContainer>
          );
        })
      ) : (
        <p>No locks found.</p>
      )}

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevpage={handlePrevPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      {iSuccessLock && <SuccessPopup message="Withdrawal successful!" />}
    </LockListContainer>
  );
};

export default VeTenexTable;
