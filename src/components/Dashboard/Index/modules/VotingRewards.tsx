import {
  DashBoardParagraph,
  DepositeStakedData,
  DepositeStakedHeading,
  PoolContainer,
  PoolContainerData,
  Stable,
  StakedContainer,
  USDTData,
  USDTHeading,
} from '../styles/DepositAndStake.styled';
import {
  DashboardButton,
  VotingRewardsdata,
  VotingRewardsMainContainer,
} from '../styles/VotingRewards.styled';
import {
  DashBoardCard,
  DashBoardCardData,
  DashboardNavigation,
} from '../styles/DashBoard.styled';
import Image from '../../../../assets/Tips.svg';

import { Address } from 'viem';
import { useUserVotingPosition } from '../../../../hooks/useUserVotingPosition';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../../../common/Loader';
import React from 'react';
import { getTokenLogo } from '../../../../utils/getTokenLogo';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import { getTokenInfo } from '../../../../utils/transaction/getTokenInfo';
import { formatAmounts } from '../../../../utils/transaction/parseAmounts';
import { ethers } from 'ethers';
import { useRootStore } from '../../../../store/root';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../../types/Transaction';
import { useVoterContract } from '../../../../hooks/useVoterContract';
import { Metadata } from '../../../../types/VotingEscrow';
import { VotedPools } from '../../../../types/Voter';
import Pagination from '../../../common/Pagination';
import { ImageContainer } from '../../../ManageVeTenex/Styles/ManageVetenex.style';

const ITEMS_PER_PAGE = 5;

const VotingRewards = ({ account }: { account: Address }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [rewardToClaim, setRewardToClaim] = useState('');

  const { userVotedPools, isVoteError } = useUserVotingPosition(account);

  const { setTransactionStatus } = useRootStore();

  const { claimBribes, claimFees } = useVoterContract();

  useEffect(() => {
    if (isLoading && userVotedPools && userVotedPools.length === 0) {
      setTimeout(() => setIsLoading(false), 30000);
    } else {
      setIsLoading(false);
    }
  }, [isLoading, userVotedPools]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = userVotedPools
    ? Math.ceil(userVotedPools.length / ITEMS_PER_PAGE)
    : 0;

  const handlePrevpage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedData = userVotedPools
    ? userVotedPools.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    : [];

  const handleClaimFees = async (
    fees: Address[],
    rewardTokens: Address[],
    tokenId: bigint,
    id: string
  ) => {
    if (fees.length === 0 || rewardTokens.length === 0) {
      return;
    }
    if (id != rewardToClaim) {
      try {
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setRewardToClaim(id);

        const feeResult = await claimFees(fees, [rewardTokens], tokenId);

        if (feeResult) {
          setTransactionStatus(TransactionStatus.DONE);
          setRewardToClaim('');
          setTimeout(() => {
            setTransactionStatus(TransactionStatus.IDEAL);
          }, TRANSACTION_DELAY);
        } else {
          throw new Error('One of the transactions failed.');
        }
      } catch (error) {
        console.error('Error during bribe and fee claim transaction:', error);
        setTransactionStatus(TransactionStatus.FAILED);
        setRewardToClaim('');
      }
    }
  };

  const handleClaimBribes = async (
    bribes: Address[],
    rewardTokens: Address[],
    tokenId: bigint,
    id: string
  ) => {
    if (bribes.length === 0 || rewardTokens.length === 0) {
      return;
    }
    if (id != rewardToClaim) {
      try {
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setRewardToClaim(id);

        // Execute both transactions (bribes and fees) together in parallel
        const bribeResult = await claimBribes(bribes, [rewardTokens], tokenId);

        if (bribeResult) {
          setTransactionStatus(TransactionStatus.DONE);
          setRewardToClaim('');

          setTimeout(() => {
            setTransactionStatus(TransactionStatus.IDEAL);
          }, TRANSACTION_DELAY);
        } else {
          throw new Error('One of the transactions failed.');
        }
      } catch (error) {
        console.error('Error during bribe and fee claim transaction:', error);
        setTransactionStatus(TransactionStatus.FAILED);
        setRewardToClaim('');
      }
    }
  };

  const handleClaimBribesAndFees = async (
    fees: Address[],
    bribes: Address[],
    rewardTokens: Address[],
    tokenId: bigint,
    id: string
  ) => {
    if (fees.length === 0 || bribes.length === 0 || rewardTokens.length === 0) {
      return;
    }

    if (id != rewardToClaim) {
      try {
        setTransactionStatus(TransactionStatus.IN_PROGRESS);
        setRewardToClaim(id);

        // Execute both transactions (bribes and fees) together in parallel
        const [bribeResult, feeResult] = await Promise.all([
          claimBribes(bribes, [rewardTokens], tokenId),
          claimFees(fees, [rewardTokens], tokenId),
        ]);

        if (bribeResult && feeResult) {
          setTransactionStatus(TransactionStatus.DONE);
          setRewardToClaim('');
          setTimeout(() => {
            setTransactionStatus(TransactionStatus.IDEAL);
          }, TRANSACTION_DELAY);
        } else {
          throw new Error('One of the transactions failed.');
        }
      } catch (error) {
        console.error('Error during bribe and fee claim transaction:', error);
        setTransactionStatus(TransactionStatus.FAILED);
        setRewardToClaim('');
      }
    }
  };

  const getLockedValue = (metadata: Metadata) => {
    const lockedValue = metadata?.attributes.find(
      (attr) => attr.trait_type === 'Locked VELO'
    )?.value;
    return lockedValue;
  };

  const formatRewardAmount = (amount: ethers.Numeric, decimals: number) => {
    // Convert the reward amount using the provided decimals
    const formattedAmount = Number(formatAmounts(amount, decimals));

    // Check if the number is an integer and format accordingly
    return Number.isInteger(formattedAmount)
      ? formattedAmount.toFixed(2)
      : formattedAmount.toFixed(5);
  };

  if (userVotedPools?.length === 0 && !isLoading) {
    return (
      <DashBoardCard>
        <DashBoardCardData>No rewards found.</DashBoardCardData>
      </DashBoardCard>
    );
  }

  return (
    <>
      {isVoteError && <p>Error in Fetching....</p>}
      {isLoading && <LoadingSpinner />}
      {paginatedData?.map(({ votedPools, tokenId, metadata }, index) => {
        return (
          <React.Fragment key={index}>
            {votedPools.map((pool: VotedPools) => {
              const poolHasReward =
                pool.rewardAmounts.some(
                  (rewardAmount) => Number(rewardAmount) > 0
                ) ||
                Number(pool.fee0) > 0 ||
                Number(pool.fee1) > 0;

              return poolHasReward ? (
                <VotingRewardsMainContainer height="auto" key={pool.id}>
                  <PoolContainer>
                    <PoolContainerData>
                      <GroupImgContains>
                        <IMG1Contains top={5} left={0}>
                          <Imgstyle src={getTokenLogo(pool.token0.symbol)} />
                        </IMG1Contains>
                        <IMG2Contains top={5} left={26}>
                          <Imgstyle src={getTokenLogo(pool.token1.symbol)} />
                        </IMG2Contains>
                      </GroupImgContains>
                    </PoolContainerData>
                    <PoolContainerData>
                      <USDTHeading>
                        {pool.token0.symbol}-{pool.token1.symbol}
                      </USDTHeading>
                      <USDTData>
                        <Stable>{pool.isStable ? 'Stable' : 'Volatile'}</Stable>
                        <DashBoardParagraph>
                          {pool.isStable ? '0.05' : '0.3'} %
                        </DashBoardParagraph>
                        <DashBoardParagraph>
                          <img src={Image} alt="" />
                        </DashBoardParagraph>
                      </USDTData>
                    </PoolContainerData>
                  </PoolContainer>

                  <StakedContainer>
                    <DepositeStakedHeading>
                      Lock #{Number(tokenId)}
                    </DepositeStakedHeading>
                    <DepositeStakedData>
                      {getLockedValue(metadata)} TENEX Locked
                    </DepositeStakedData>
                  </StakedContainer>

                  <StakedContainer>
                    <DepositeStakedHeading>Rewards</DepositeStakedHeading>
                    <DepositeStakedData>
                      {Number(pool.fee0) > 0 && (
                        <VotingRewardsdata>
                          <DashBoardParagraph>
                            <ImageContainer
                              width="16px"
                              height="16px"
                              src={getTokenLogo(pool.token0.symbol)}
                            />
                          </DashBoardParagraph>
                          <DashBoardParagraph>
                            {Number.isInteger(Number(pool.fee0))
                              ? Number(pool.fee0).toFixed(2)
                              : Number(pool.fee0).toFixed(5)}{' '}
                            {pool.token0.symbol}
                          </DashBoardParagraph>
                          <DashboardButton width="27px" height="18px">
                            Fee
                          </DashboardButton>
                        </VotingRewardsdata>
                      )}

                      {Number(pool.fee1) > 0 && (
                        <VotingRewardsdata>
                          <DashBoardParagraph>
                            <ImageContainer
                              width="16px"
                              height="16px"
                              src={getTokenLogo(pool.token1.symbol)}
                            />
                          </DashBoardParagraph>
                          <DashBoardParagraph>
                            {Number.isInteger(Number(pool.fee0))
                              ? Number(pool.fee0).toFixed(2)
                              : Number(pool.fee0).toFixed(5)}{' '}
                            {pool.token1.symbol}
                          </DashBoardParagraph>
                          <DashboardButton width="27px" height="18px">
                            Fee
                          </DashboardButton>
                        </VotingRewardsdata>
                      )}

                      {pool.rewardTokens.map(
                        (reward: Address, i: number) =>
                          Number(pool.rewardAmounts[i]) > 0 && (
                            <VotingRewardsdata key={i}>
                              <DashBoardParagraph>
                                <ImageContainer
                                  width="16px"
                                  height="16px"
                                  src={getTokenInfo(reward)?.logoURI}
                                />
                              </DashBoardParagraph>
                              <DashBoardParagraph>
                                {formatRewardAmount(
                                  pool.rewardAmounts[i] as ethers.Numeric,
                                  Number(getTokenInfo(reward)?.decimals)
                                )}
                                {getTokenInfo(reward)?.symbol}
                              </DashBoardParagraph>
                              <DashboardButton width="56px" height="18px">
                                Incentive
                              </DashboardButton>
                            </VotingRewardsdata>
                          )
                      )}

                      <DashboardNavigation
                        fontSize={16}
                        onClick={async () => {
                          const hasFees =
                            Number(pool.fee0) > 0 || Number(pool.fee1) > 0;
                          const hasRewards = pool.rewardAmounts.some(
                            (rewardAmount) => Number(rewardAmount) > 0
                          );

                          if (hasFees && !hasRewards) {
                            await handleClaimFees(
                              pool.fees,
                              pool.rewardTokens,
                              tokenId,
                              pool.id
                            );
                            return;
                          }

                          if (!hasFees && hasRewards) {
                            await handleClaimBribes(
                              pool.bribes,
                              pool.rewardTokens,
                              tokenId,
                              pool.id
                            );
                            return;
                          }

                          await handleClaimBribesAndFees(
                            pool.fees,
                            pool.bribes,
                            pool.rewardTokens,
                            tokenId,
                            pool.id
                          );
                        }}
                      >
                        {rewardToClaim === pool.id ? (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: '15px',
                            }}
                          >
                            <LoadingSpinner width="10px" height="10px" />
                            <p>Claiming</p>
                          </div>
                        ) : (
                          <p>Claim</p>
                        )}
                      </DashboardNavigation>
                    </DepositeStakedData>
                  </StakedContainer>
                </VotingRewardsMainContainer>
              ) : null;
            })}
          </React.Fragment>
        );
      })}

      {userVotedPools && userVotedPools.length > ITEMS_PER_PAGE && (
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevpage={handlePrevpage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default VotingRewards;
