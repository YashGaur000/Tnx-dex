import { useCallback } from 'react';
import { useContract } from './useContract';
import { Address } from 'viem';
import bribeAbi from '../constants/artifacts/contracts/BribeVotingReward.json';
import { BribeVotingRewardContract } from '../types/Bribe';

/**
 * Hook to interact with the bribe voting rewards contract.
 * @returns An object containing the functions to interact with the bribe voting rewards contract.
 */
export function useBribeVotingReward(bribeAddress: Address) {
  const bribeContract = useContract(
    bribeAddress,
    bribeAbi.abi
  ) as BribeVotingRewardContract;
  const notifyRewardAmount = useCallback(
    async (token: Address, amount: bigint) => {
      if (!bribeContract) {
        console.error('Voter contract instance not available');
        return;
      }
      try {
        const gasEstimate = await bribeContract.estimateGas.notifyRewardAmount(
          token,
          amount
        );

        const result = await bribeContract.notifyRewardAmount(token, amount, {
          gasLimit: gasEstimate,
        });

        return result;
      } catch (error) {
        console.log(error);
      }
    },
    [bribeContract]
  );

  return { notifyRewardAmount };
}
