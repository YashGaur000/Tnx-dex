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

  const { userVotedPools, isVoteError } = useUserVotingPosition(account);

  const { setTransactionStatus } = useRootStore();

  const { claimBribes, claimFees } = useVoterContract();

  useEffect(() => {
    if (isLoading && userVotedPools && userVotedPools.length === 0) {
      setTimeout(() => setIsLoading(false), 60000);
    } else {
      setIsLoading(false);
    }
  }, []);

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

  const handleClaimBribesAndFees = async (
    fees: Address[],
    bribes: Address[],
    rewardTokens: Address[],
    tokenId: bigint
  ) => {
    if (fees.length === 0 || bribes.length === 0 || rewardTokens.length === 0) {
      return;
    }
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);

      // Execute both transactions (bribes and fees) together in parallel
      const [bribeResult, feeResult] = await Promise.all([
        claimBribes(bribes, [rewardTokens], tokenId),
        claimFees(fees, [rewardTokens], tokenId),
      ]);

      if (bribeResult && feeResult) {
        setTransactionStatus(TransactionStatus.DONE);
      } else {
        throw new Error('One of the transactions failed.');
      }

      setTimeout(
        () => setTransactionStatus(TransactionStatus.IDEAL),
        TRANSACTION_DELAY
      );
    } catch (error) {
      console.error('Error during bribe and fee claim transaction:', error);
      setTransactionStatus(TransactionStatus.FAILED);
    }
  };

  const getLockedValue = (metadata: Metadata) => {
    const lockedValue = metadata?.attributes.find(
      (attr) => attr.trait_type === 'Locked VELO'
    )?.value;
    return lockedValue;
  };

  if (userVotedPools && userVotedPools.length === 0 && !isLoading) {
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
      {paginatedData?.map(({ votedPools, tokenId, metadata }, index) => (
        <React.Fragment key={index}>
          {votedPools.map((pool: VotedPools, i: number) => (
            <React.Fragment key={i}>
              <VotingRewardsMainContainer height="auto">
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
                        {' '}
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
                    <VotingRewardsdata>
                      <DashBoardParagraph>
                        <ImageContainer
                          width="16px"
                          height="16px"
                          src={getTokenLogo(pool.token0.symbol)}
                        />
                      </DashBoardParagraph>
                      <DashBoardParagraph>
                        {Number(pool.fee0) > 0
                          ? Number(pool.fee0).toFixed(5)
                          : pool.fee0}{' '}
                        {pool.token0.symbol}
                      </DashBoardParagraph>
                      <DashboardButton width="27px" height="18px">
                        Fee
                      </DashboardButton>
                    </VotingRewardsdata>
                    <VotingRewardsdata>
                      <DashBoardParagraph>
                        <ImageContainer
                          width="16px"
                          height="16px"
                          src={getTokenLogo(pool.token1.symbol)}
                        />
                      </DashBoardParagraph>
                      <DashBoardParagraph>
                        {Number(pool.fee1) > 0
                          ? Number(pool.fee1).toFixed(5)
                          : pool.fee1}{' '}
                        {pool.token1.symbol}
                      </DashBoardParagraph>
                      <DashboardButton width="27px" height="18px">
                        Fee
                      </DashboardButton>
                    </VotingRewardsdata>

                    {pool.rewardTokens.map((reward: Address, i: number) => (
                      <>
                        <VotingRewardsdata>
                          <DashBoardParagraph>
                            <ImageContainer
                              width="16px"
                              height="16px"
                              src={getTokenInfo(reward)?.logoURI}
                            />
                          </DashBoardParagraph>
                          <DashBoardParagraph>
                            {Number(pool.rewardAmounts[i]) > 0
                              ? Number(
                                  formatAmounts(
                                    pool.rewardAmounts[i] as ethers.Numeric,
                                    Number(getTokenInfo(reward)?.decimals)
                                  )
                                ).toFixed(5)
                              : '0.00'}{' '}
                            {getTokenInfo(reward)?.symbol}{' '}
                          </DashBoardParagraph>
                          <DashboardButton width="56px" height="18px">
                            Incentive
                          </DashboardButton>
                        </VotingRewardsdata>
                      </>
                    ))}

                    <DashboardNavigation
                      fontSize={16}
                      onClick={() =>
                        handleClaimBribesAndFees(
                          pool.fees,
                          pool.bribes,
                          pool.rewardTokens,
                          tokenId
                        )
                      }
                    >
                      Claim
                    </DashboardNavigation>
                  </DepositeStakedData>
                </StakedContainer>
              </VotingRewardsMainContainer>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
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
