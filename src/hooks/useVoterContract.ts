import { useCallback } from 'react';
import { useContract } from './useContract';
import { Address } from 'viem';
import voterAbi from '../constants/artifacts/contracts/Voter.json';
import contractAddresses from '../constants/contract-address/address';
import { VoterContract } from '../types/Voter';

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
        const resetTransaction = await voterContract.reset(_tokenId);
        return resetTransaction;
      } catch (error) {
        console.error('Error during reset:', error);
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
      return voterContract.vote(_tokenId, _poolVote, _weights);
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
        console.log(error);
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
  };
}
