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

        const gaugeAddress = await voterContract.createGauge(
          _poolFactory,
          _pool,
          { gasLimit: gasEstimate }
        );

        return gaugeAddress;
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

  return { createGauge, gauges, gaugeToBribe, deposit };
}
