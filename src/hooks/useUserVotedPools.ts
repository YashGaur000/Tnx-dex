import { useState, useCallback } from 'react';
import voterAbi from '../constants/artifacts/contracts/Voter.json';
import { useLiquidityPoolData } from './useLiquidityPoolData';
import { useMultiCall } from './useMultiCall';
import { useVotingEscrowContract } from './useVotingEscrowContract';
import contractAddresses from '../constants/contract-address/address';
import { Abi, Address } from 'viem';
import { decodeBase64 } from '../utils/common/voteTenex';
import { AddressZero } from '@ethersproject/constants';

// ethers.js import

export const useUserVotedPools = (account: Address) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { data: pools } = useLiquidityPoolData();
  const multicallClient = useMultiCall();
  const { fetchUserNFTs } = useVotingEscrowContract(
    contractAddresses.VotingEscrow
  );

  const fetchVotedPools = useCallback(async () => {
    if (!account || !multicallClient) return;

    setLoading(true);
    setError(null);

    try {
      // Fetch NFTs for the user
      const fetchedNftVal = await fetchUserNFTs(account);

      // Early return if no NFTs found
      if (fetchedNftVal.length === 0) {
        setLoading(false);
        return [];
      }

      // Decode NFT metadata
      const formattedNftData = fetchedNftVal.map((nft) => ({
        tokenId: nft.tokenId,
        metadata: decodeBase64(nft.metadata),
      }));

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
            const poolData = pools.find(
              ({ id }) => id === poolVoteResult.result
            );
            if (poolData) {
              votedPools.push({
                ...poolData,
                gauge: AddressZero as Address,
                fee0: '0',
                fee1: '0',
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

      return userVotedPools;
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [account, fetchUserNFTs, pools, multicallClient]);

  return { fetchVotedPools, loading, error };
};
