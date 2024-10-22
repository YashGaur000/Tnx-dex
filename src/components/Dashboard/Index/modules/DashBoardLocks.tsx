import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tenxLogo from '../../../../assets/Tenex.png';
import { DashboardNavigation } from '../styles/DashBoard.styled';

import {
  DashBoardLockMainContainer,
  LockContainer,
  LockData,
  LockHeading,
  LockStyleText,
  Paragraph,
} from '../styles/DashBoardLocks.styled';
import {
  CardLogo,
  DepositeStakedData,
  DepositeStakedHeading,
  StakedContainer,
} from '../styles/DepositAndStake.styled';
import useNftData from '../../../../hooks/useUserNFTs';
import { Nft } from '../../../../types/VotingEscrow';
import Pagination from '../../../common/Pagination';
import { getTimeDifference } from '../../../../utils/common/voteTenex';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../../types/Transaction';
import { useRootStore } from '../../../../store/root';
import { useVotingEscrowContract } from '../../../../hooks/useVotingEscrowContract';
import { useVoterContract } from '../../../../hooks/useVoterContract';
import contractAddress from '../../../../constants/contract-address/address';
import {
  showErrorToast,
  showSuccessToast,
} from '../../../../utils/common/toastUtils';
import { LoadingSpinner } from '../../../common/Loader';
import { ToastContainer } from 'react-toastify';

const DashBoardLocks = () => {
  const Navigate = useNavigate();
  const [lockData, setLockData] = useState<Nft[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resetTknId, setResetTknId] = useState<bigint>(0n);
  const escrowAddress = contractAddress.VotingEscrow;
  const { withdraw } = useVotingEscrowContract(escrowAddress);
  const [isWithdrawing, setIsWithdrawing] = useState<bigint | null>(null);
  const { reset, poke, epochStart } = useVoterContract();
  const itemsPerPage = 4;
  const nftData = useNftData();
  const { setTransactionStatus } = useRootStore();
  const [isPoking, setIsPoking] = useState<bigint | null>(null);
  const [epochStartTime, setEpochStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (nftData.length > 0) {
      setLockData(nftData);
    } else {
      setLockData([]);
    }
  }, [nftData]);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = lockData.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(lockData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    const fetchEpochStartTime = async () => {
      try {
        const timestamp = Math.floor(Date.now() / 1000);
        const epochStartTime = await epochStart(timestamp);
        setEpochStartTime(Number(epochStartTime));
      } catch (error) {
        console.error('Error fetching epoch start time:', error);
      }
    };

    void fetchEpochStartTime();
  }, [epochStart]);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  /*  const handleLockButton = (option: string, tokenId: bigint) => {
    if (option) {
      Navigate(`/governance/managevetenex/${option}/${tokenId}`);
    } else {
      console.log('Route is undefined');
    }
  }; */

  const handleLockButton = (
    option: string,
    tokenId: bigint,
    votingStatus: boolean | undefined
  ) => {
    if (option) {
      const encryptedTokenId = tokenId;
      const voteStatus = votingStatus ? votingStatus : false;
      const encryptedVotingStatus = voteStatus;
      Navigate(
        `/governance/managevetenex/${option}/${encryptedTokenId}/${encryptedVotingStatus}`
      );
    } else {
      console.warn('Undefined route');
    }
  };

  const handleReset = useCallback(
    async (tokenId: bigint) => {
      try {
        if (!tokenId) return;
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setResetTknId(tokenId);

        await reset(tokenId);

        setTransactionStatus(TransactionStatus.DONE);
        setTimeout(() => {
          setResetTknId(0n);
          void showSuccessToast('Successfully reset lock #' + tokenId);
          setTransactionStatus(TransactionStatus.IDEAL);
        }, TRANSACTION_DELAY);
      } catch (error) {
        setResetTknId(0n);
        setTransactionStatus(TransactionStatus.FAILED);
        void showErrorToast('Failed to reset lock. Please try again.');
      }
    },
    [reset, setTransactionStatus]
  );
  const handleWithdraw = useCallback(
    async (tokenId: bigint) => {
      try {
        if (!tokenId) return;
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setIsWithdrawing(tokenId);
        await withdraw(tokenId);
        setTimeout(() => {
          void showSuccessToast('Withdraw lock successfully.');
        }, TRANSACTION_DELAY);
        setTransactionStatus(TransactionStatus.IDEAL);
      } catch (error) {
        setTransactionStatus(TransactionStatus.FAILED);
        void showErrorToast('Failed to withdraw lock. Please try again.');
      } finally {
        setIsWithdrawing(null);
      }
    },
    [withdraw, setTransactionStatus]
  );
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

  return (
    <>
      <ToastContainer />
      {currentItems.length > 0 ? (
        currentItems.map((lock, index) => {
          if (!lock.metadata) {
            console.warn(
              `No metadata found for lock with tokenId: ${lock.tokenId}`
            );
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
          const formatUnlockData = getTimeDifference(unlockDate);
          return (
            <DashBoardLockMainContainer key={index}>
              <LockContainer>
                <CardLogo>
                  <img src={tenxLogo} alt="TENEX Logo" />
                </CardLogo>
                <LockData>
                  <LockHeading>Lock #{lock.tokenId.toString()}</LockHeading>
                  <Paragraph>
                    {
                      lock.metadata.attributes.find(
                        (attr) => attr.trait_type === 'Locked VELO'
                      )?.value
                    }{' '}
                    TENEX locked for {formatUnlockData}
                  </Paragraph>
                  <LockStyleText>
                    {formatUnlockData !== 'Expired' && (
                      <>
                        <DashboardNavigation
                          onClick={() =>
                            handleLockButton(
                              'increase',
                              lock.tokenId,
                              lock.votingStatus
                            )
                          }
                        >
                          Increase
                        </DashboardNavigation>
                        <DashboardNavigation
                          onClick={() =>
                            handleLockButton(
                              'extend',
                              lock.tokenId,
                              lock.votingStatus
                            )
                          }
                        >
                          Extend
                        </DashboardNavigation>
                        <DashboardNavigation
                          onClick={() =>
                            handleLockButton(
                              'merge',
                              lock.tokenId,
                              lock.votingStatus
                            )
                          }
                        >
                          Merge
                        </DashboardNavigation>
                        <DashboardNavigation
                          onClick={() =>
                            handleLockButton(
                              'transfer',
                              lock.tokenId,
                              lock.votingStatus
                            )
                          }
                        >
                          Transfer
                        </DashboardNavigation>
                        {lock.votingStatus &&
                          (resetTknId === lock.tokenId ? (
                            <DashboardNavigation disabled>
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
                            </DashboardNavigation>
                          ) : (
                            <DashboardNavigation
                              disabled={
                                (epochStartTime ?? 0) <= (lock?.lastVoted ?? 0)
                              }
                              onClick={() => handleReset(lock?.tokenId ?? 0n)}
                            >
                              Reset
                            </DashboardNavigation>
                          ))}

                        {lock.votingStatus &&
                          (isPoking === lock.tokenId ? (
                            <DashboardNavigation disabled>
                              <span
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <LoadingSpinner width="10px" height="10px" />
                                <span style={{ marginLeft: '5px' }}>
                                  Poke...
                                </span>
                              </span>
                            </DashboardNavigation>
                          ) : (
                            <DashboardNavigation
                              onClick={() => handlePoke(lock.tokenId)}
                            >
                              Poke
                            </DashboardNavigation>
                          ))}
                      </>
                    )}
                    <>
                      {formatUnlockData === 'Expired' &&
                        (isWithdrawing === lock.tokenId ? (
                          <DashboardNavigation disabled>
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
                          </DashboardNavigation>
                        ) : (
                          <DashboardNavigation
                            onClick={() => handleWithdraw(lock.tokenId)}
                          >
                            Withdraw
                          </DashboardNavigation>
                        ))}
                    </>
                  </LockStyleText>
                </LockData>
              </LockContainer>

              <StakedContainer>
                <DepositeStakedHeading>Rebases APR</DepositeStakedHeading>
                <DepositeStakedData>40.43%</DepositeStakedData>
              </StakedContainer>

              <StakedContainer>
                <DepositeStakedHeading>Rebases</DepositeStakedHeading>
                <DepositeStakedData>0.00 USDT</DepositeStakedData>
              </StakedContainer>
            </DashBoardLockMainContainer>
          );
        })
      ) : (
        <Paragraph>No locks found.</Paragraph>
      )}
      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevpage={handlePrevPage}
      />
    </>
  );
};

export default DashBoardLocks;
