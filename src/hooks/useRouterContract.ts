import { useCallback } from 'react';
import { useContract } from './useContract';
import { RouterContract } from './../types/Liquidity';
import { Abi, Address } from 'viem';
import { ethers } from 'ethers';
import contractAddress from '../constants/contract-address/address';
import routerAbi from '../constants/artifacts/contracts/Router.json';
import { TokenInfo } from '../constants/tokens';
import { Route } from '../utils/generateAllRoutes';
import { useMultiCall } from './useMultiCall';

/**
 * Hook to interact with the router contract.
 * @returns An object containing the functions to interact with the router contract.
 */
export function useRouterContract() {
  const routerAddress = contractAddress.Router;
  const factory = contractAddress.PoolFactory;
  const routerContract = useContract(
    routerAddress,
    routerAbi.abi
  ) as RouterContract;

  const multicallClient = useMultiCall();

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

  const getAmountsOut = useCallback(
    async (amountIn: string, routes: Route[][]) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }

      if (!multicallClient) {
        console.error('Multicall client not available');
        return;
      }

      try {
        const amountInWei = ethers.parseUnits(amountIn, 18);

        const contractCalls = routes.map((route) => ({
          abi: routerAbi.abi as Abi,
          functionName: 'getAmountsOut',
          args: [amountInWei, route],
          address: routerAddress,
        }));

        const results = await multicallClient.multicall({
          contracts: contractCalls,
        });

        const amounts: bigint[][] = results.map(
          (data) => data.result as bigint[]
        );

        return amounts;
      } catch (error) {
        console.error('Error fetching amounts out:', error);
        throw error;
      }
    },
    [routerContract, multicallClient, routerAddress]
  );

  const quoteAddLiquidity = useCallback(
    async (
      tokenA: Address,
      tokenB: Address,
      stable: boolean,
      _factory: Address,
      amountADesired: ethers.Numeric,
      amountBDesired: ethers.Numeric
    ) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }
      try {
        const liquidityEstimate = await routerContract.quoteAddLiquidity(
          tokenA,
          tokenB,
          stable,
          _factory,
          ethers.parseUnits(amountADesired.toString()),
          ethers.parseUnits(amountBDesired.toString()),
          { gasLimit: 3000000 } // @todo : not really required just for safety
        );
        return liquidityEstimate;
      } catch (error) {
        console.log(error);
      }
    },
    [routerContract]
  );


  return { addLiquidity, getReserves, quoteAddLiquidity, getAmountsOut };
}
