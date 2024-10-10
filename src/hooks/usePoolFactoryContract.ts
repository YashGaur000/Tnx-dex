import { useCallback } from 'react';
import { useContract } from './useContract';
import poolFactoryAbi from '../constants/artifacts/contracts/PoolFactory.json';
import contractAddresses from '../constants/contract-address/address';
import { PoolFactoryContract, PoolFeeMapping } from '../types/PoolFactory';
import { useMultiCall } from './useMultiCall';
import { chunkArray, CHUNK_SIZE } from '../utils/liquidityRouting/chunk';
import { LiquidityPoolNewType } from '../graphql/types/LiquidityPoolNew';
import { Address, Abi } from 'viem';

/**
 * Hook to interact with the router contract.
 * @returns An object containing the functions to interact with the pool contract.
 */
export function usePoolFactoryContract() {
  const poolFactoryContract = useContract(
    contractAddresses.PoolFactory,
    poolFactoryAbi.abi
  ) as PoolFactoryContract;

  const multicallClient = useMultiCall();

  const getFee = useCallback(
    async (poolId: string, _stables: boolean) => {
      if (!poolFactoryContract) {
        console.error('Pool factory contract instance not available');
        return;
      }
      try {
        const fee = await poolFactoryContract.getFee(
          poolId as Address,
          _stables
        );
        return Number(fee) / 100;
      } catch (error) {
        console.error('Error fetching fees:', error);
        throw error;
      }
    },
    [poolFactoryContract]
  );

  const getFees = useCallback(
    async (pools: LiquidityPoolNewType[]) => {
      if (!poolFactoryContract) {
        console.error('Pool factory contract instance not available');
        return;
      }

      if (!multicallClient) {
        console.error('Multicall client not available');
        return;
      }

      try {
        // Generate contract calls for each pool
        const contractCalls = pools.map((pool) => ({
          abi: poolFactoryAbi.abi as Abi,
          functionName: 'getFee',
          args: [pool.id, pool.isStable],
          address: contractAddresses.PoolFactory, // PoolFactory contract address
        }));

        // Chunk the contract calls into batches of 10 (or your chosen size)
        const chunks = chunkArray(contractCalls, CHUNK_SIZE);

        const results = [];

        // Loop through each chunk and make the multicall
        for (const chunk of chunks) {
          try {
            // Execute multicall for the current chunk
            const result = await multicallClient.multicall({
              contracts: chunk,
            });

            results.push(...result);
          } catch (error) {
            console.error('Error in multicall:', error);
            // Optional: Add retry logic if desired
          }
        }

        const feeMapping = results.map((data, index) => {
          const fee = Number(data?.result) / 100; // Convert the result to a number
          return {
            poolId: pools[index].id, // Corresponding pool ID
            feePercentage: fee, // Fee percentage
          };
        });

        return feeMapping as PoolFeeMapping[];
      } catch (error) {
        console.error('Error fetching fees:', error);
        throw error;
      }
    },
    [poolFactoryContract, multicallClient]
  );

  return { getFees, getFee };
}
