import { useCallback } from 'react';
import { useContract } from './useContract';
import { PoolContract } from '../types/Pool';
import { Address } from 'viem';
import poolAbi from '../constants/artifacts/contracts/Pool.json';
import { useAccount } from './useAccount';
import { ethers } from 'ethers';
/**
 * Hook to interact with the router contract.
 * @returns An object containing the functions to interact with the pool contract.
 */
export function usePoolContract(poolId: string) {
  const poolContract = useContract(
    poolId as Address,
    poolAbi.abi
  ) as PoolContract;
  const { address } = useAccount();

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

  const balanceOf = useCallback(async () => {
    if (!poolContract) {
      console.error('Pool contract instance not available');
      return;
    }
    try {
      const decimals = await poolContract.decimals();
      const balance = address && (await poolContract.balanceOf(address));
      const etherBalance = ethers.formatUnits(
        balance ? balance.toString() : '0',
        decimals
      );
      return { etherBalance, decimals };
    } catch (error) {
      console.log(error);
    }
  }, [poolContract, address]);

  return { metadata, balanceOf };
}
