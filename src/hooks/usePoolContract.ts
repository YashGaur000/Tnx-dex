import { useCallback } from 'react';
import { useContract } from './useContract';
import { PoolContract } from '../types/Pool';
import { Address } from 'viem';
import poolAbi from '../constants/artifacts/contracts/Pool.json';

/**
 * Hook to interact with the router contract.
 * @returns An object containing the functions to interact with the pool contract.
 */
export function usePoolContract(poolId: string) {
  const poolContract = useContract(
    poolId as Address,
    poolAbi.abi
  ) as PoolContract;

  const metadata = useCallback(async () => {
    if (!poolContract) {
      console.error('Pool contract instance not available');
      return;
    }
    try {
      const metadata = await poolContract.metadata();
      return metadata;
    } catch (error) {
      console.log(error);
    }
  }, [poolContract]);

  return { metadata };
}
