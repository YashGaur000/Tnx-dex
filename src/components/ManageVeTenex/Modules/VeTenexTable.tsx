import React, { Suspense, useCallback, useState } from 'react';
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
  encryptData,
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
import PageLoader from '../../common/PageLoader';

const VeTenexTable: React.FC<{ nftData: Nft[] | null | undefined }> = ({
  nftData,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resetTknId, setResetTknId] = useState<bigint>(0n);
  const [isWithdrawing, setIsWithdrawing] = useState<bigint | null>(null);
  const [iSuccessLock, setSuccessLock] = useState<boolean>(false);
  const { setTransactionStatus } = useRootStore();
  const itemsPerPage = 5;

  const sortedNftData = nftData
    ? nftData.slice().sort((a, b) => Number(b.tokenId) - Number(a.tokenId))
    : [];
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = sortedNftData.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(sortedNftData.length / itemsPerPage);
  const escrowAddress = contractAddress.VotingEscrow;
  const { withdraw } = useVotingEscrowContract(escrowAddress);
  const { reset } = useVoterContract();
  const lockTokenInfo = locktokeninfo();
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleLockButton = (
    option: string,
    tokenId: bigint,
    votingStatus: boolean | undefined
  ) => {
    if (option) {
      const encryptedTokenId = encryptData(tokenId.toString());
      const voteStatus = votingStatus ? votingStatus : false;
      const encryptedVotingStatus = encryptData(voteStatus.toString());
      navigate(
        `/governance/managevetenex/${option}/${encryptedTokenId}/${encryptedVotingStatus}`
      );
    } else {
      console.warn('Undefined route');
    }
  };
  /*  const handleLockButton = (option: string, tokenId: bigint) => {
    if (option) navigate(`/governance/managevetenex/${option}/${tokenId}`);
    else console.warn('Undefined route');
  }; */

  const handleWithdraw = useCallback(
    async (tokenId: bigint) => {
      try {
        if (!tokenId) return;
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setIsWithdrawing(tokenId);

        await withdraw(tokenId);
        setTimeout(() => {
          setSuccessLock(true);
        }, TRANSACTION_DELAY);
        setTransactionStatus(TransactionStatus.IDEAL);
      } catch (error) {
        setTransactionStatus(TransactionStatus.FAILED);
        await showErrorToast('Failed to withdraw lock. Please try again.');
      } finally {
        setIsWithdrawing(null);
      }
    },
    [withdraw, setTransactionStatus]
  );

  const handleReset = useCallback(
    async (tokenId: bigint) => {
      try {
        if (!tokenId) return;
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setResetTknId(tokenId);

        await reset(tokenId);
        setResetTknId(0n);
        setSuccessLock(true);
        setTransactionStatus(TransactionStatus.DONE);
      } catch (error) {
        setTransactionStatus(TransactionStatus.FAILED);
        await showErrorToast('Failed to reset lock. Please try again.');
      } finally {
        setIsWithdrawing(null);
      }
    },
    [reset, setTransactionStatus]
  );

  if (!nftData) {
    return <PageLoader />;
  }

  return (
    <LockListContainer>
      <ToastContainer />
      <Suspense fallback={<PageLoader />}>
        {currentItems.length > 0 ? (
          currentItems.map((lock, index) => {
            const metadata = lock.metadata;
            const attributes = metadata?.attributes;

            if (!metadata || !attributes) {
              console.warn(
                `No metadata or attributes found for lock with tokenId: ${lock.tokenId}`
              );
              return null;
            }

            const unlockDate =
              attributes.find((attr) => attr.trait_type === 'Unlock Date')
                ?.value ?? '';
            const votingPower =
              attributes.find((attr) => attr.trait_type === 'Voting Power')
                ?.value ?? 'N/A';
            const lockedVELO =
              attributes.find((attr) => attr.trait_type === 'Locked VELO')
                ?.value ?? 'N/A';
            const formatUnlockData = getTimeDifference(unlockDate);

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
                    <LockInfoDes lineheight={17.94} fontSize={12}>
                      {lockedVELO} {lockTokenInfo.symbol} locked for{' '}
                      {formatUnlockData}
                    </LockInfoDes>
                    <LockInfoCheck>
                      {formatUnlockData !== 'Expired' ? (
                        <>
                          <LockInfoAction
                            onClick={() =>
                              handleLockButton(
                                'increase',
                                lock.tokenId,
                                lock.votingStatus
                              )
                            }
                          >
                            Increase
                          </LockInfoAction>
                          <LockInfoAction
                            onClick={() =>
                              handleLockButton(
                                'extend',
                                lock.tokenId,
                                lock.votingStatus
                              )
                            }
                          >
                            Extend
                          </LockInfoAction>
                          <LockInfoAction
                            onClick={() =>
                              handleLockButton(
                                'merge',
                                lock.tokenId,
                                lock.votingStatus
                              )
                            }
                          >
                            Merge
                          </LockInfoAction>
                          <LockInfoAction
                            onClick={() =>
                              handleLockButton(
                                'transfer',
                                lock.tokenId,
                                lock.votingStatus
                              )
                            }
                          >
                            Transfer
                          </LockInfoAction>
                        </>
                      ) : (
                        <>
                          {lock.votingStatus &&
                            (resetTknId === lock.tokenId ? (
                              <LockInfoAction disabled>
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
                              >
                                Reset
                              </LockInfoAction>
                            ))}
                          {isWithdrawing === lock.tokenId ? (
                            <LockInfoAction disabled>
                              <span
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <LoadingSpinner width="10px" height="10px" />
                                <span style={{ marginLeft: '5px' }}>
                                  Withdrawing
                                </span>
                              </span>
                            </LockInfoAction>
                          ) : (
                            <LockInfoAction
                              onClick={() => handleWithdraw(lock.tokenId)}
                            >
                              Withdraw
                            </LockInfoAction>
                          )}
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
      </Suspense>
    </LockListContainer>
  );
};

export default VeTenexTable;
