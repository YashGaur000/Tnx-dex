import { useCallback } from 'react';
import { useContract } from './useContract';
import { Address } from 'viem';
import gaugeAbi from '../constants/artifacts/contracts/Gauge.json';
import { GaugeContract } from '../types/Gauge';

/**
 * Hook to interact with the router contract.
 * @returns An object containing the functions to interact with the pool contract.
 */
export function useGaugeContract(gaugeAddress: Address) {
  const gaugeContract = useContract(
    gaugeAddress,
    gaugeAbi.abi
  ) as GaugeContract;

  const deposit = useCallback(
    async (_amount: bigint) => {
      if (!gaugeContract) {
        console.error('Gauge contract instance not available');
        return;
      }
      try {
        const result = await gaugeContract.deposit(_amount);

        const tx = result.wait();

        return tx;
      } catch (error) {
        console.log(error);
      }
    },
    [gaugeContract]
  );

  const totalSupply = useCallback(async () => {
    if (!gaugeContract) {
      console.error('Gauge contract instance not available');
      return;
    }
    try {
      const result = await gaugeContract.totalSupply();

      return result;
    } catch (error) {
      console.log(error);
    }
  }, [gaugeContract]);

  return { deposit, totalSupply };
}
