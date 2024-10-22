import { useCallback } from 'react';
import { useContract } from './useContract';
import { Address } from 'viem';
import voterAbi from '../constants/artifacts/contracts/Voter.json';
import contractAddresses from '../constants/contract-address/address';
import { VoterContract } from '../types/Voter';
import { showSuccessToast, showErrorToast } from '../utils/common/toastUtils';

/**
 * Hook to interact with the router contract.
 * @returns An object containing the functions to interact with the pool contract.
 */
export function useVoterContract() {
  const voterContract = useContract(
    contractAddresses.Voter,
    voterAbi.abi
  ) as VoterContract;

  const createGauge = useCallback(
    async (_poolFactory: Address, _pool: Address) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }
      try {
        const gasEstimate = await voterContract.estimateGas.createGauge(
          _poolFactory,
          _pool
        );

        const tx = await voterContract.createGauge(_poolFactory, _pool, {
          gasLimit: gasEstimate,
        });

        const { transactionHash } = await tx.wait();

        return transactionHash;
      } catch (error) {
        console.log(error);
      }
    },
    [voterContract]
  );

  const gauges = useCallback(
    async (_pool: Address) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }
      try {
        const gaugeAddress = await voterContract.gauges(_pool);
        return gaugeAddress;
      } catch (error) {
        console.log(error);
      }
    },
    [voterContract]
  );

  const gaugeToBribe = useCallback(
    async (_gauge: Address) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }
      try {
        const bribeVotingRewardAddress =
          await voterContract.gaugeToBribe(_gauge);
        return bribeVotingRewardAddress;
      } catch (error) {
        console.log(error);
      }
    },
    [voterContract]
  );

  const deposit = useCallback(
    async (_amount: bigint) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }
      try {
        const result = await voterContract.deposit(_amount);
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    [voterContract]
  );
  const reset = useCallback(
    async (_tokenId: bigint) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }
      try {
        const gasEstimate = await voterContract.estimateGas.reset(_tokenId);

        const tx = await voterContract.reset(_tokenId, {
          gasLimit: gasEstimate,
        });

        const receipt = await tx.wait();

        return receipt.transactionHash;
      } catch (error) {
        console.error('Transaction failed or was canceled', error);

        throw new Error('Transaction failed or was canceled');
      }
    },
    [voterContract]
  );
  const vote = useCallback(
    async (_tokenId: number, _poolVote: Address[], _weights: number[]) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }
      return await voterContract.vote(_tokenId, _poolVote, _weights);
    },
    [voterContract]
  );
  const epochStart = useCallback(
    async (timestamp: number) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }
      try {
        const epochStartTime = await voterContract.epochStart(timestamp);
        return epochStartTime;
      } catch (error) {
        console.log(error);
      }
    },
    [voterContract]
  );
  const epochVoteEnd = useCallback(
    async (timestamp: number) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }
      try {
        const epochVoteEnd = await voterContract.epochVoteEnd(timestamp);
        return epochVoteEnd;
      } catch (error) {
        console.log(error);
      }
    },
    [voterContract]
  );

  const epochNext = useCallback(
    async (timestamp: number) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }
      try {
        const epochNextTime = await voterContract.epochNext(timestamp);
        return epochNextTime;
      } catch (error) {
        console.log(error);
      }
    },
    [voterContract]
  );

  const epochVoteStart = useCallback(
    async (timestamp: number) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }
      try {
        const epochVoteStartTime =
          await voterContract.epochVoteStart(timestamp);
        return epochVoteStartTime;
      } catch (error) {
        console.log(error);
      }
    },
    [voterContract]
  );

  const claimBribes = useCallback(
    async (_bribes: Address[], _tokens: Address[][], _tokenId: bigint) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }

      try {
        const gasEstimate = await voterContract.estimateGas.claimBribes(
          _bribes,
          _tokens,
          _tokenId
        );

        if (!gasEstimate) {
          console.error('Error estimating gas price');
        }

        const result = await voterContract.claimBribes(
          _bribes,
          _tokens,
          _tokenId
        );

        const { transactionHash } = await result.wait();

        return transactionHash;
      } catch (error) {
        console.error('Error during  transaction:', error);
      }
    },
    [voterContract]
  );

  const claimFees = useCallback(
    async (_fees: Address[], _tokens: Address[][], _tokenId: bigint) => {
      if (!voterContract) {
        console.error('Voter contract instance not available');
        return;
      }

      try {
        const gasEstimate = await voterContract.estimateGas.claimFees(
          _fees,
          _tokens,
          _tokenId
        );

        if (!gasEstimate) {
          console.error('Error estimating gas price');
        }

        const result = await voterContract.claimFees(_fees, _tokens, _tokenId);

        const { transactionHash } = await result.wait();

        return transactionHash;
      } catch (error) {
        console.log(error);
      }
    },
    [voterContract]
  );

  const poke = useCallback(
    async (_tokenId: bigint) => {
      if (!voterContract) {
        await showErrorToast('Voter contract instance is not available.');
        return;
      }
      try {
        const tx = await voterContract.poke(_tokenId);
        await tx.wait();
        await showSuccessToast('Successfully poked the voting weight!');
      } catch (error) {
        await showErrorToast(`Error:Transaction failed`);
        console.error('Error during poke transaction:', error);
      }
    },
    [voterContract]
  );

  const lastVote = useCallback(
    async (tokenId: bigint): Promise<bigint> => {
      if (!voterContract) {
        await showErrorToast('Voter contract instance is not available.');
        return 0n;
      }
      try {
        const lockVote = await voterContract.lastVoted(tokenId);
        return lockVote;
      } catch (error) {
        console.log('Error fetching lock data:', error);
        return 0n;
      }
    },
    [voterContract]
  );
  return {
    createGauge,
    gauges,
    gaugeToBribe,
    deposit,
    vote,
    reset,
    claimBribes,
    claimFees,
    epochVoteEnd,
    poke,
    lastVote,
    epochStart,
    epochNext,
    epochVoteStart,
  };
}
