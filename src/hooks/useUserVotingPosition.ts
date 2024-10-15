import { useLiquidityPoolData } from './useLiquidityPoolData';
import { useMultiCall } from './useMultiCall';
import { Abi, Address, PublicClient } from 'viem';
import { LiquidityPoolNewType } from '../graphql/types/LiquidityPoolNew';
import voterAbi from '../constants/artifacts/contracts/Voter.json';
import feeVotingRewardAbi from '../constants/artifacts/contracts/FeeVotingReward.json';
import bribeVotingRewardAbi from '../constants/artifacts/contracts/BribeVotingReward.json';

import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../web3Provider/wagmi';

import contractAddresses from '../constants/contract-address/address';
import { useVotingEscrowContract } from './useVotingEscrowContract';
import { decodeBase64 } from '../utils/common/voteTenex';
import { useCallback } from 'react';
import { AddressZero } from '@ethersproject/constants';
import { UserVotingPosition, VotedPools } from '../types/Voter';
import { formatAmounts } from '../utils/transaction/parseAmounts';
import { ethers } from 'ethers';

const fetchUserVotingPools = async (
  multicallClient: PublicClient,
  pools: LiquidityPoolNewType[],
  account: Address,
  fetchUserNFTs: (owner: Address) => Promise<
    {
      tokenId: bigint;
      metadata: string;
    }[]
  >
) => {
  if (pools.length === 0) return [];

  const fetchedNftVal = await fetchUserNFTs(account);

  // Early return if no NFTs found
  if (fetchedNftVal.length === 0) return [];

  // Decode NFT metadata
  const formattedNftData = fetchedNftVal.map((nft) => ({
    tokenId: nft.tokenId,
    metadata: decodeBase64(nft.metadata),
  }));

  //const test = [31, 32, 33, 51, 59];

  const indexCount = 30;

  // Create batch calls for all NFTs
  const poolVoteCalls = formattedNftData.flatMap((nft) =>
    Array.from({ length: indexCount }, (_, i) => ({
      abi: voterAbi.abi as Abi,
      functionName: 'poolVote',
      args: [nft.tokenId, i],
      address: contractAddresses.Voter,
    }))
  );

  try {
    // Execute all multicall requests in one go
    const poolVoteResults = await multicallClient.multicall({
      contracts: poolVoteCalls,
    });

    // Process results to collect voted pools
    const poolToVoteResult = formattedNftData.map((nft, nftIndex) => {
      const votedPools = [];

      for (let i = 0; i < indexCount; i++) {
        const poolVoteResult = poolVoteResults[nftIndex * indexCount + i];

        if (poolVoteResult?.result) {
          const poolData = pools.find(({ id }) => id === poolVoteResult.result);
          if (poolData) {
            votedPools.push({
              ...poolData,
              gauge: AddressZero as Address,
              fee0: '0',
              fee1: '0',
              fees: [] as Address[],
              bribes: [] as Address[],
              rewardTokens: [] as Address[],
              rewardAmounts: [] as bigint[],
            });
          }
        } else {
          // Stop processing further indices for this NFT if no result
          break;
        }
      }

      return {
        tokenId: nft.tokenId,
        metadata: nft.metadata,
        votedPools: votedPools,
      };
    });

    // Filter out NFTs with no voted pools
    const userVotedPools = poolToVoteResult.filter(
      ({ votedPools }) => votedPools.length > 0
    );

    if (userVotedPools.length === 0) return [];

    const gaugesCalls = userVotedPools.flatMap(({ votedPools }) =>
      votedPools.map((pool) => ({
        abi: voterAbi.abi as Abi,
        functionName: 'gauges',
        args: [pool.id], // Each voted pool passed individually
        address: contractAddresses.Voter,
      }))
    );

    const gaugesResults = await multicallClient.multicall({
      contracts: gaugesCalls,
    });

    const feeCalls = gaugesResults.map(({ result }) => ({
      abi: voterAbi.abi as Abi,
      functionName: 'gaugeToFees',
      args: [result],
      address: contractAddresses.Voter,
    }));

    const feeResults = await multicallClient.multicall({
      contracts: feeCalls,
    });

    const bribeCalls = gaugesResults.map(({ result }) => ({
      abi: voterAbi.abi as Abi,
      functionName: 'gaugeToBribe',
      args: [result],
      address: contractAddresses.Voter,
    }));

    const bribeResults = await multicallClient.multicall({
      contracts: bribeCalls,
    });

    let earnedCalls: {
      abi: Abi;
      functionName: string;
      args: [string | undefined, bigint];
      address: Address;
    }[] = [];

    userVotedPools.forEach(({ votedPools, tokenId }, index) => {
      votedPools.forEach((pool) => {
        earnedCalls.push({
          abi: feeVotingRewardAbi.abi as Abi,
          functionName: 'earned',
          args: [pool?.token0.id.split('-')[0], tokenId],
          address: feeResults[index].result as Address,
        });
        earnedCalls.push({
          abi: feeVotingRewardAbi.abi as Abi,
          functionName: 'earned',
          args: [pool?.token1.id.split('-')[0], tokenId],
          address: feeResults[index].result as Address,
        });
      });
    });

    const feeEarnedResults = await multicallClient.multicall({
      contracts: earnedCalls,
    });

    const bribeRewardsLengthCalls = bribeResults.map(({ result }) => ({
      abi: bribeVotingRewardAbi.abi as Abi,
      functionName: 'rewardsListLength',
      args: [],
      address: result as Address,
    }));

    const bribeRewardsLengthResults = await multicallClient.multicall({
      contracts: bribeRewardsLengthCalls,
    });

    const bribeRewardCalls = bribeRewardsLengthResults.flatMap(
      (rewardsLength, index) =>
        Array.from({ length: Number(rewardsLength.result) }, (_, i) => ({
          abi: bribeVotingRewardAbi.abi as Abi,
          functionName: 'rewards',
          args: [i],
          address: bribeResults[index].result as Address,
        }))
    );

    const bribeRewardResults = await multicallClient.multicall({
      contracts: bribeRewardCalls,
    });

    earnedCalls = [];
    let startPool = 0;
    let startReward = 0;

    for (const userVotedPool of userVotedPools) {
      const { votedPools } = userVotedPool;
      const votedPoolsLength = votedPools.length;

      // Loop through the voted pools of the current userVotedPool
      for (let j = 0; j < votedPoolsLength; j++) {
        const currentPoolIndex = startPool + j;
        const bribeRewardsLength = Number(
          bribeRewardsLengthResults[currentPoolIndex].result
        );
        const bribeResultAddress = bribeResults[currentPoolIndex]
          .result as Address;

        // Prepare earned calls only once per reward in the pool
        for (let k = 0; k < bribeRewardsLength; k++) {
          const rewardToken = bribeRewardResults[startReward + k]
            .result as string;
          earnedCalls.push({
            abi: bribeVotingRewardAbi.abi as Abi,
            functionName: 'earned',
            args: [rewardToken, userVotedPool.tokenId],
            address: bribeResultAddress,
          });
        }

        startReward += bribeRewardsLength; // Increment reward index after processing the pool
      }

      startPool += votedPoolsLength; // Increment pool index after processing all pools
    }

    // Execute earned calls using multicall
    const bribeEarnedResults = await multicallClient.multicall({
      contracts: earnedCalls,
    });

    // Reset indices for assigning results back to pools
    startPool = 0;
    startReward = 0;

    for (const userVotedPool of userVotedPools) {
      const { votedPools } = userVotedPool;
      const votedPoolsLength = votedPools.length;

      // Loop through the voted pools of the current userVotedPool
      for (let j = 0; j < votedPoolsLength; j++) {
        const currentPoolIndex = startPool + j;
        const bribeRewardsLength = Number(
          bribeRewardsLengthResults[currentPoolIndex].result
        );

        const votedPool = votedPools[j];

        // Directly assign fetched values instead of recalculating
        votedPool.gauge = gaugesResults[currentPoolIndex].result as Address;
        votedPool.fee0 =
          formatAmounts(
            feeEarnedResults[2 * currentPoolIndex].result as ethers.Numeric,
            Number(votedPool.token0.decimals)
          ) ?? '0.00';

        votedPool.fee1 =
          formatAmounts(
            feeEarnedResults[2 * currentPoolIndex + 1].result as ethers.Numeric,
            Number(votedPool.token1.decimals)
          ) ?? '0.00';

        votedPool.fees.push(feeResults[currentPoolIndex].result as Address);

        votedPool.bribes.push(bribeResults[currentPoolIndex].result as Address);

        // Efficiently populate rewards for the current pool
        for (let k = 0; k < bribeRewardsLength; k++) {
          const rewardToken = bribeRewardResults[startReward + k]
            .result as Address;
          const rewardAmount = bribeEarnedResults[startReward + k]
            .result as bigint;

          votedPool.rewardTokens.push(rewardToken);
          votedPool.rewardAmounts.push(rewardAmount);
        }

        startReward += bribeRewardsLength; // Increment reward index after processing the pool
      }

      startPool += votedPoolsLength; // Increment pool index after processing all pools
    }

    return userVotedPools;
  } catch (error) {
    console.error('Error during multicall execution:', error);
    return []; // Return empty if an error occurs during fetching
  }
};

export const useUserVotingPosition = (account: Address) => {
  const { data: poolData } = useLiquidityPoolData();
  const multicallClient = useMultiCall();
  const { fetchUserNFTs } = useVotingEscrowContract(
    contractAddresses.VotingEscrow
  );

  const fetchVotingPools = useCallback(async () => {
    if (multicallClient && poolData) {
      return await fetchUserVotingPools(
        multicallClient as PublicClient,
        poolData,
        account,
        fetchUserNFTs
      );
    }
    return [];
  }, [multicallClient, poolData, account, fetchUserNFTs]);

  const {
    data: userVotedPools,
    isError: isVoteError,
    refetch: refetchVote,
    isFetching: isVoteFetching,
  } = useQuery<UserVotingPosition[]>(
    {
      queryKey: ['userVotePosition', account],
      queryFn: fetchVotingPools,
      gcTime: 10 * 60 * 1000,
      enabled: !!account && !!multicallClient,
      placeholderData: [],
      refetchInterval: 30 * 1000,
      refetchIntervalInBackground: true,
      refetchOnMount: 'always',
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 3,
      retryOnMount: true,
      retryDelay: (retryCount) => Math.min(retryCount * 1000, 3000),
      staleTime: 0,
    },
    queryClient
  );

  const votingRewardPools = userVotedPools?.filter(({ votedPools }) =>
    votedPools.some(
      (pool: VotedPools) =>
        pool.rewardAmounts.some((rewardAmount) => Number(rewardAmount) > 0) ||
        Number(pool.fee0) > 0 ||
        Number(pool.fee1) > 0
    )
  );

  return {
    userVotedPools: votingRewardPools,
    isVoteError,
    refetchVote,
    isVoteFetching,
  };
};
