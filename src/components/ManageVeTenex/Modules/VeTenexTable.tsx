import React, { Suspense, useCallback, useEffect, useState } from 'react';
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
import {
  showErrorToast,
  showSuccessToast,
} from '../../../utils/common/toastUtils';
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
  const [isPoking, setIsPoking] = useState<bigint | null>(null);
  const [iSuccessLock, setSuccessLock] = useState<boolean>(false);
  const [epochStartTime, setEpochStartTime] = useState<number | null>(null);
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
  const { reset, poke, epochStart } = useVoterContract();
  const lockTokenInfo = locktokeninfo();
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const fetchEpochStartTime = async () => {
      try {
        const timestamp = Math.floor(Date.now() / 1000); // Get current time in seconds
        const epochStartTime = await epochStart(timestamp); // Fetch epoch start time
        setEpochStartTime(Number(epochStartTime)); // Set state with fetched epoch start time
      } catch (error) {
        console.error('Error fetching epoch start time:', error);
      }
    };

    void fetchEpochStartTime();
  }, [epochStart]);

  const handleLockButton = (
    option: string,
    tokenId: bigint,
    votingStatus: boolean | undefined
  ) => {
    if (option) {
      const encryptedTokenId = tokenId.toString();
      const voteStatus = votingStatus ? votingStatus : false;
      const encryptedVotingStatus = voteStatus.toString();
      navigate(
        `/governance/managevetenex/${option}/${encryptedTokenId}/${encryptedVotingStatus}`
      );
    } else {
      console.warn('Undefined route');
    }
  };

  const handleWithdraw = useCallback(
    async (tokenId: bigint) => {
      try {
        if (!tokenId) return;
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setIsWithdrawing(tokenId);

        await withdraw(tokenId);
        setTransactionStatus(TransactionStatus.DONE);
        setTimeout(() => {
          setTransactionStatus(TransactionStatus.IDEAL);
          setSuccessLock(true);
          setIsWithdrawing(0n);
        }, TRANSACTION_DELAY);
      } catch (error) {
        setTransactionStatus(TransactionStatus.FAILED);
        await showErrorToast('Failed to withdraw lock. Please try again.');
      } finally {
        setIsWithdrawing(0n);
      }
    },
    [withdraw, setTransactionStatus]
  );

  const handleReset = async (tokenId: bigint) => {
    try {
      if (!tokenId) return;

      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      setResetTknId(tokenId);
      /*  if (address) {
        const resultapp = await isApprovedOrOwner(address, tokenId);
        console.log('resultapp:', resultapp);
      } */
      await reset(tokenId);
      setTransactionStatus(TransactionStatus.DONE);
      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
        setResetTknId(0n);
        void showSuccessToast('Successfully reset lock #' + tokenId);
      }, TRANSACTION_DELAY);
    } catch (error) {
      setTransactionStatus(TransactionStatus.FAILED);
      console.error('Error during reset action:', error);
      void showErrorToast('Failed to reset lock. Please try again.');
    } finally {
      setResetTknId(0n);
    }
  };

  const handlePoke = async (tokenId: bigint) => {
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      setIsPoking(tokenId);
      await poke(tokenId);
      setTransactionStatus(TransactionStatus.DONE);
      setTimeout(() => {
        setIsPoking(0n);
        setTransactionStatus(TransactionStatus.IDEAL);
      }, TRANSACTION_DELAY);
    } catch (error) {
      setIsPoking(0n);
      setTransactionStatus(TransactionStatus.FAILED);
      console.error('Error during poke action:', error);
      void showErrorToast('Failed to poke the voting weight.');
    } finally {
      setIsPoking(0n);
    }
  };

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
                <LockDetails width="200px">
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
                          {lock.votingStatus &&
                            (isPoking === lock.tokenId ? (
                              <LockInfoAction disabled>
                                <span
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  <LoadingSpinner width="10px" height="10px" />
                                  <span style={{ marginLeft: '5px' }}>
                                    Poke ...
                                  </span>
                                </span>
                              </LockInfoAction>
                            ) : (
                              <LockInfoAction
                                onClick={() => handlePoke(lock.tokenId)}
                              >
                                Poke
                              </LockInfoAction>
                            ))}
                        </>
                      ) : (
                        <>
                          <LockInfoAction
                            onClick={
                              isWithdrawing === lock.tokenId
                                ? undefined
                                : () => handleWithdraw(lock.tokenId)
                            }
                            disabled={isWithdrawing === lock.tokenId}
                          >
                            {isWithdrawing === lock.tokenId ? (
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
                            ) : (
                              'Withdraw'
                            )}
                          </LockInfoAction>
                        </>
                      )}
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
                                  Resetting {lock.votingStatus}
                                </span>
                              </span>
                            </LockInfoAction>
                          ) : (
                            <LockInfoAction
                              disabled={
                                (epochStartTime ?? 0) <= (lock?.lastVoted ?? 0)
                              }
                              onClick={() => handleReset(lock?.tokenId ?? 0n)}
                            >
                              Reset
                            </LockInfoAction>
                          ))}
                      </>
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
          <p>Loading.....</p>
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
