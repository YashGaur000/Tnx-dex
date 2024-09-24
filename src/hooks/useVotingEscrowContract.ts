import { useCallback } from 'react';
import { useContract } from './useContract';
import { LockedBalance, VotingEscrowContract } from '../types/VotingEscrow'; //LockDataNew,
import { Abi, Address } from 'viem';
import votingEscrowAbi from '../constants/artifacts/contracts/VotingEscrow.json';
import { useMultiCall } from './useMultiCall';

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

  /**
   * Increases the lock amount for a specific tokenId.
   * @param tokenId - The token ID whose lock amount is to be increased.
   * @param value - The value to be added to the existing lock amount.
   * @returns A Promise that resolves to the transaction receipt or an error if the transaction fails.
   */
  const increaseLockAmount = useCallback(
    async (tokenId: bigint, value: bigint): Promise<void> => {
      if (!votingEscrowContract) throw new Error('Contract is not initialized');

      try {
        const gasEstimate =
          await votingEscrowContract.estimateGas.increaseAmount(tokenId, value);
        const tx = await votingEscrowContract.increaseAmount(tokenId, value, {
          gasLimit: gasEstimate,
        });

        await tx.wait();
      } catch (error) {
        console.error('Failed to increase lock amount:', error);
        throw error;
      }
    },
    [votingEscrowContract]
  );
  const mergeLocks = useCallback(
    async (_from: bigint, _to: bigint): Promise<void> => {
      if (!votingEscrowContract) {
        throw new Error('VotingEscrowContract not initialized');
      }

      try {
        const gasEstimate = await votingEscrowContract.estimateGas.merge(
          _from,
          _to
        );
        const tx = await votingEscrowContract.merge(_from, _to, {
          gasLimit: gasEstimate,
        });
        await tx.wait();
      } catch (error) {
        console.error('Error merging locks:', error);
        throw error;
      }
    },
    [votingEscrowContract]
  );

  const increaseUnlockTime = useCallback(
    async (tokenId: number, value: number): Promise<void> => {
      if (!votingEscrowContract) throw new Error('Contract is not initialized');
      try {
        const gasEstimate =
          await votingEscrowContract.estimateGas.increaseUnlockTime(
            tokenId,
            value
          );
        const tx = await votingEscrowContract.increaseUnlockTime(
          tokenId,
          value,
          {
            gasLimit: gasEstimate,
          }
        );

        await tx.wait();
      } catch (error) {
        console.error('Failed to increase lock amount:', error);
        throw error;
      }
    },
    [votingEscrowContract]
  );

  const withdraw = useCallback(
    async (tokenId: bigint) => {
      if (!votingEscrowContract) return;

      const gasEstimate =
        await votingEscrowContract.estimateGas.withdraw(tokenId);
      const tx = await votingEscrowContract.withdraw(tokenId, {
        gasLimit: gasEstimate.toBigInt(),
      });
      await tx.wait();
      return tx;
    },
    [votingEscrowContract]
  );

  const transferFrom = useCallback(
    async (owner: Address, address: Address, _tokenId: number) => {
      if (!votingEscrowContract) return;

      const gasEstimate = await votingEscrowContract.estimateGas.transferFrom(
        owner,
        address,
        _tokenId
      );
      const tx = await votingEscrowContract.transferFrom(
        owner,
        address,
        _tokenId,
        { gasLimit: gasEstimate.toBigInt() }
      );
      await tx.wait();
      return tx;
    },
    [votingEscrowContract]
  );

  const getApproved = useCallback(
    async (tokenId: bigint) => {
      if (!votingEscrowContract) return;
      return await votingEscrowContract.getApproved(tokenId);
    },
    [votingEscrowContract]
  );

  const isApprovedForAll = useCallback(
    async (owner: Address, operator: Address): Promise<boolean> => {
      if (!votingEscrowContract) throw new Error('Contract is not initialized');

      try {
        const isApproved = await votingEscrowContract.isApprovedForAll(
          owner,
          operator
        );
        return isApproved;
      } catch (error) {
        console.error('Error checking approval for all:', error);
        throw error;
      }
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

      if (!multicallRequests) throw new Error('Failed to fetch tokens');

      const tokenIdResults = await multicallClient?.multicall({
        contracts: multicallRequests,
      });

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

      const metadataResults = await multicallClient?.multicall({
        contracts: metadataRequests,
      });

      const nfts: { tokenId: bigint; metadata: string }[] =
        metadataResults?.map((result, index) => {
          const metadata = result.result as string;
          return { tokenId: tokenIds[index], metadata };
        }) ?? [];

      return nfts;
    },
    [votingEscrowContract, multicallClient, getNFTCount]
  );

  const getLockData = useCallback(
    async (tokenId: number): Promise<LockedBalance | null> => {
      if (!votingEscrowContract) {
        console.error('Voting Escrow contract is not initialized');
        return null;
      }

      try {
        const lockData: LockedBalance =
          await votingEscrowContract.locked(tokenId);
        return lockData;
      } catch (error) {
        console.log('Error fetching lock data:', error);
        return null;
      }
    },
    [votingEscrowContract]
  );

  return {
    createLock,
    increaseLockAmount,
    mergeLocks,
    increaseUnlockTime,
    withdraw,
    getApproved,
    isApprovedForAll,
    isApprovedOrOwner,
    getNFTCount,
    getLockData,
    fetchUserNFTs,
    transferFrom,
  };
}
