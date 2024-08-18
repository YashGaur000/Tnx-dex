import { useCallback } from 'react';
import { useContract } from './useContract';
import { RouterContract } from './../types/Liquidity';
import { Address } from 'viem';
import contractAddress from '../constants/contract-address/address';
import routerAbi from '../constants/artifacts/contracts/Router.json';

/**
 * Hook to interact with the router contract.
 * @returns An object containing the functions to interact with the router contract.
 */
export function useRouterContract() {
  const routerAddress = contractAddress.Router;
  console.log(routerAddress, 'router');
  const routerContract = useContract(
    routerAddress,
    routerAbi.abi
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
          { gasLimit: 3000000 }
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

  // Additional functions can be added here

  return { addLiquidity };
}
