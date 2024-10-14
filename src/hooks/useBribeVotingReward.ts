import { useCallback } from 'react';
import { useContract } from './useContract';
import { Address } from 'viem';
import bribeAbi from '../constants/artifacts/contracts/BribeVotingReward.json';
import { BribeVotingRewardContract } from '../types/Bribe';
import { getTokenInfo } from '../utils/transaction/getTokenInfo';

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
        // console.error('Voter contract instance not available');
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

        const { transactionHash } = await result.wait();

        return transactionHash;
      } catch (error) {
        console.log(error);
        return undefined;
      }
    },
    [bribeContract]
  );

  const rewards = useCallback(async () => {
    if (!bribeContract) {
      // console.error('Voter contract instance not available');
      return;
    }
    try {
      // Fetch total number of reward tokens
      const rewardsLength = await bribeContract.rewardsListLength();

      const rewardTokenList = [];

      for (let i = 0; i < rewardsLength; i++) {
        const rewardToken = await bribeContract.rewards(i);
        const rewardTokenInfo = getTokenInfo(rewardToken);
        rewardTokenList.push(rewardTokenInfo);
      }
      return rewardTokenList;
    } catch (error) {
      // console.error('Error fetching rewards and balances:', error);
    }
  }, [bribeContract]);

  return { notifyRewardAmount, rewards };
}
