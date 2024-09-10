import { useCallback } from 'react';
import { useContract } from './useContract';
import { VotingEscrowContract } from '../types/VotingEscrow';
import { Abi, Address } from 'viem';
import votingEscrowAbi from '../constants/artifacts/contracts/VotingEscrow.json';
import { useMultiCall } from './useMultiCall';
//import BigNumber from 'bignumber.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export function useVotingEscrowContract(escrowAddress: string) {
  const votingEscrowContract = useContract(
    escrowAddress as Address,
    votingEscrowAbi.abi
  ) as VotingEscrowContract;

  const multicallClient = useMultiCall();

  const createLock = useCallback(
    async (amount: bigint, duration: number) => {
      if (!votingEscrowContract) return;

      const gasEstimate = await votingEscrowContract.estimateGas.createLock(
        amount,
        duration
      );
      const tx = await votingEscrowContract.createLock(amount, duration, {
        gasLimit: gasEstimate.toBigInt(),
      });
      await tx.wait();
      return tx;
    },
    [votingEscrowContract]
  );

  const increaseLockAmount = useCallback(
    async (amount: bigint) => {
      if (!votingEscrowContract) return;

      const gasEstimate =
        await votingEscrowContract.estimateGas.increaseAmount(amount);
      const tx = await votingEscrowContract.increaseAmount(amount, {
        gasLimit: gasEstimate.toBigInt(),
      });
      await tx.wait();
      return tx;
    },
    [votingEscrowContract]
  );

  const withdraw = useCallback(async () => {
    if (!votingEscrowContract) return;

    const gasEstimate = await votingEscrowContract.estimateGas.withdraw();
    const tx = await votingEscrowContract.withdraw({
      gasLimit: gasEstimate.toBigInt(),
    });
    await tx.wait();
    return tx;
  }, [votingEscrowContract]);

  const getApproved = useCallback(
    async (tokenId: bigint) => {
      if (!votingEscrowContract) return;
      return await votingEscrowContract.getApproved(tokenId);
    },
    [votingEscrowContract]
  );

  const isApprovedForAll = useCallback(
    async (owner: Address, operator: Address) => {
      if (!votingEscrowContract) return false;
      return await votingEscrowContract.isApprovedForAll(owner, operator);
    },
    [votingEscrowContract]
  );

  const isApprovedOrOwner = useCallback(
    async (spender: Address, tokenId: bigint) => {
      if (!votingEscrowContract) return false;
      return await votingEscrowContract.isApprovedOrOwner(spender, tokenId);
    },
    [votingEscrowContract]
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const getNFTCount = useCallback(
    async (owner: Address): Promise<number> => {
      if (!votingEscrowContract) return 0;

      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const NftCount: number = (await votingEscrowContract.balanceOf(
          owner
        )) as number;

        return Number(NftCount);
      } catch (error) {
        console.error('Error fetching NFT count:', error);
        return 0;
      }
    },
    [votingEscrowContract]
  );

  const fetchUserNFTs = useCallback(
    async (
      owner: Address
    ): Promise<{ tokenId: bigint; metadata: string }[]> => {
      if (!votingEscrowContract) return [];

      const nftCount = await getNFTCount(owner);
      console.log('User NFT Count: ', nftCount);
      console.log('escrowAddress: ', escrowAddress);

      const multicallRequests: {
        abi: Abi;
        functionName: string;
        args: [Address, number];
        address: Address;
      }[] = [];

      for (let i = 0; i < nftCount; i++) {
        multicallRequests.push({
          abi: votingEscrowAbi.abi as Abi,
          functionName: 'ownerToNFTokenIdList',
          args: [owner, i],
          address: escrowAddress as Address,
        });
      }

      console.log('multicallRequests: ', multicallRequests);
      if (!multicallRequests) throw new Error('Failed to fetch tokens');

      const tokenIdResults = await multicallClient?.multicall({
        contracts: multicallRequests,
      });
      console.log('tokenIdResults: ', tokenIdResults);
      if (!tokenIdResults) throw new Error('Failed to fetch token IDs');

      const tokenIds: bigint[] = Array.from(
        new Set(
          tokenIdResults
            .filter((result) => result.status === 'success')
            .map((result) => result.result as bigint)
        )
      );

      const metadataRequests = tokenIds.map((tokenId) => ({
        abi: votingEscrowAbi.abi as Abi,
        functionName: 'tokenURI',
        args: [tokenId],
        address: escrowAddress as Address,
      }));
      console.log('metadataRequests Initial: ', metadataRequests);
      const metadataResults = await multicallClient?.multicall({
        contracts: metadataRequests,
      });

      console.log('metadataResults contracts tokenURI: ', metadataResults);

      const nfts: { tokenId: bigint; metadata: string }[] =
        metadataResults?.map((result, index) => {
          const metadata = result.result as string;
          return { tokenId: tokenIds[index], metadata };
        }) ?? [];

      console.log('nfts:', nfts);
      return nfts;
    },
    [votingEscrowContract, multicallClient, getNFTCount]
  );

  return {
    createLock,
    increaseLockAmount,
    withdraw,
    getApproved,
    isApprovedForAll,
    isApprovedOrOwner,
    getNFTCount,
    fetchUserNFTs,
  };
}
