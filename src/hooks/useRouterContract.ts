import { useCallback } from 'react';
import { useContract } from './useContract';
import { RouterContract } from './../types/Liquidity';
import { Address } from 'viem';
import { ethers } from 'ethers';
import contractAddress from '../constants/contract-address/address';
import { routerAbi } from '../constants/abis/router';
import { TokenInfo } from '../constants/tokens';

/**
 * Hook to interact with the router contract.
 * @returns An object containing the functions to interact with the router contract.
 */
export function useRouterContract() {
  const routerAddress = contractAddress.Router;
  const factory = contractAddress.PoolFactory;
  const routerContract = useContract(
    routerAddress,
    routerAbi
  ) as RouterContract;

  const addLiquidity = useCallback(
    async (
      tokenA: Address,
      tokenB: Address,
      stable: boolean,
      amountADesired: bigint,
      amountBDesired: bigint,
      amountAMin: bigint,
      amountBMin: bigint,
      to: Address,
      deadline: bigint
    ) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }

      try {
        // estimate gas for add liquidity
        const gasEstimate = await routerContract.estimateGas.addLiquidity(
          tokenA,
          tokenB,
          stable,
          amountADesired,
          amountBDesired,
          amountAMin,
          amountBMin,
          to,
          deadline
        );

        if (!gasEstimate) {
          console.error('Error estimating gas price');
        }

        const tx = await routerContract.addLiquidity(
          tokenA,
          tokenB,
          stable,
          amountADesired,
          amountBDesired,
          amountAMin,
          amountBMin,
          to,
          deadline,
          { gasLimit: gasEstimate ? gasEstimate : 3000000 }
        );
        console.log('Transaction sent:', tx);
        await tx.wait();
        console.log('Transaction confirmed');
        return tx;
      } catch (error) {
        console.error('Error sending transaction:', error);
        throw error;
      }
    },
    [routerContract]
  );

  const getReserves = useCallback(
    async (tokenA: TokenInfo, tokenB: TokenInfo, stable: boolean) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }

      try {
        const { reserveA, reserveB } = await routerContract.getReserves(
          tokenA.address,
          tokenB.address,
          stable,
          factory
        ); // need to handle edge cases for stable factor

        const formatedReserveA = ethers.formatUnits(
          reserveA.toString(),
          tokenA.decimals
        );
        const formatedReserveB = ethers.formatUnits(
          reserveB.toString(),
          tokenB.decimals
        );

        return {
          formatedReserveA,
          formatedReserveB,
        };
      } catch (error) {
        console.error('Error fetching:', error);
        throw error;
      }
    },
    [routerContract, factory]
  );

  return { addLiquidity, getReserves };
}
