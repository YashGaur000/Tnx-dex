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
            votedPools.push(poolData);
          }
        } else {
          // Stop processing further indices for this NFT if no result
          break;
        }
      }

      return {
        tokenId: nft.tokenId,
        votedPools,
      };
    });

    // Filter out NFTs with no voted pools
    const userVotedPools = poolToVoteResult.filter(
      ({ votedPools }) => votedPools.length > 0
    );

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

    userVotedPools.forEach(({ tokenId }, index) => {
      bribeRewardResults.forEach((rewardToken) => {
        earnedCalls.push({
          abi: bribeVotingRewardAbi.abi as Abi,
          functionName: 'earned',
          args: [rewardToken.result as string, tokenId],
          address: bribeResults[index].result as Address,
        });
      });
    });

    const bribeEarnedResults = await multicallClient.multicall({
      contracts: earnedCalls,
    });

    console.log(feeEarnedResults, bribeEarnedResults);

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
  }, [multicallClient, poolData, account]);

  const {
    data: userVotedPools,
    isError: isVoteError,
    refetch: refetchVote,
    isFetching: isVoteFetching,
  } = useQuery(
    {
      queryKey: ['userVotePosition', account],
      queryFn: fetchVotingPools,
      gcTime: 60 * 1000,
      enabled: !!account && !!multicallClient,
      placeholderData: [],
      refetchInterval: 10 * 1000,
      refetchIntervalInBackground: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 3,
      retryOnMount: true,
      retryDelay: (retryCount) => Math.min(retryCount * 1000, 3000),
      staleTime: 5000,
    },
    queryClient
  );

  return {
    userVotedPools,
    isVoteError,
    refetchVote,
    isVoteFetching,
  };
};
