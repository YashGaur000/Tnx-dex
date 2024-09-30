import { useCallback } from 'react';
import { useContract } from './useContract';
import { RouterContract } from './../types/Liquidity';
import { Abi, Address } from 'viem';
import { ethers } from 'ethers';
import contractAddress from '../constants/contract-address/address';
import routerAbi from '../constants/artifacts/contracts/Router.json';
import { TokenInfo } from '../constants/tokens/type';
import { Route } from '../utils/liquidityRouting/generateAllRoutes';
import { useMultiCall } from './useMultiCall';
import {
  CHUNK_SIZE,
  chunkArray,
  delay,
  MULTICALL_DELAY,
} from '../utils/liquidityRouting/chunk';

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

  const addLiquidityETH = useCallback(
    async (
      token: Address,
      stable: boolean,
      amountTokenDesired: bigint,
      amountTokenMin: bigint,
      amountETHMin: bigint,
      to: Address,
      deadline: bigint
    ) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }

      try {
        // @Todo : estimate gas for add liquidity eth to be implemented

        // estimate gas for add liquidity
        const gasEstimate = await routerContract.estimateGas.addLiquidityETH(
          token,
          stable,
          amountTokenDesired,
          amountTokenMin,
          amountETHMin,
          to,
          deadline,
          {
            value: amountETHMin,
          }
        );

        if (!gasEstimate) {
          console.error('Error estimating gas price');
        }

        const tx = await routerContract.addLiquidityETH(
          token,
          stable,
          amountTokenDesired,
          amountTokenMin,
          amountETHMin,
          to,
          deadline,
          { gasLimit: gasEstimate ? gasEstimate : 3000000, value: amountETHMin }
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
    async (amountIn: bigint, routes: Route[][]) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }

      if (!multicallClient) {
        console.error('Multicall client not available');
        return;
      }

      try {
        // Generate contract calls for each route
        const contractCalls = routes.map((route) => ({
          abi: routerAbi.abi as Abi,
          functionName: 'getAmountsOut',
          args: [amountIn, route],
          address: routerAddress,
        }));

        // Chunk the contract calls into batches of 10
        const chunks = chunkArray(contractCalls, CHUNK_SIZE);

        const results = [];

        for (const chunk of chunks) {
          try {
            // Execute multicall for the current chunk
            const result = await multicallClient.multicall({
              contracts: chunk,
            });
            results.push(...result);
          } catch (error) {
            console.error('Error in multicall:', error);
            // Handle errors (e.g., retry logic could be added here)
          }

          // Introduce a delay between requests to avoid rate limits
          await delay(MULTICALL_DELAY);
        }

        const amounts: bigint[][] = results.map(
          (data) => data?.result as bigint[]
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
      tokenA: TokenInfo,
      tokenB: TokenInfo,
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
        const decimal1 = tokenA.decimals ?? 18;
        const decimal2 = tokenB.decimals ?? 18;
        const liquidityEstimate = await routerContract.quoteAddLiquidity(
          tokenA.address,
          tokenB.address,
          stable,
          _factory,
          ethers.parseUnits(amountADesired.toString(), decimal1),
          ethers.parseUnits(amountBDesired.toString(), decimal2),
          { gasLimit: 3000000 } // @todo : not really required just for safety
        );
        return liquidityEstimate;
      } catch (error) {
        console.log(error);
      }
    },
    [routerContract]
  );

  const poolFor = useCallback(
    async (
      tokenA: TokenInfo,
      tokenB: TokenInfo,
      stable: boolean,
      _factory: Address
    ) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }
      try {
        const poolAddress = await routerContract.poolFor(
          tokenA.address,
          tokenB.address,
          stable,
          _factory
        );
        return poolAddress;
      } catch (error) {
        console.log(error);
      }
    },
    [routerContract]
  );
  const swapExactTokensForTokens = useCallback(
    async (
      amountIn: bigint,
      amountOutMin: bigint,
      routes: Route[],
      to: Address,
      deadline: bigint
    ) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }

      try {
        // estimate gas for add liquidity
        const gasEstimate =
          await routerContract.estimateGas.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            routes,
            to,
            deadline
          );

        if (!gasEstimate) {
          console.error('Error estimating gas price');
        }

        const tx = await routerContract.swapExactTokensForTokens(
          amountIn,
          amountOutMin,
          routes,
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

  const UNSAFE_swapExactTokensForTokens = useCallback(
    async (
      amountsOut: bigint[],
      routes: Route[],
      to: Address,
      deadline: bigint
    ) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }

      try {
        // estimate gas for add liquidity
        const gasEstimate =
          await routerContract.estimateGas.UNSAFE_swapExactTokensForTokens(
            amountsOut,
            routes,
            to,
            deadline
          );

        if (!gasEstimate) {
          console.error('Error estimating gas price');
        }

        const tx = await routerContract.UNSAFE_swapExactTokensForTokens(
          amountsOut,
          routes,
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

  const swapExactTokensForETH = useCallback(
    async (
      amountIn: bigint,
      amountOutMin: bigint,
      routes: Route[],
      to: Address,
      deadline: bigint
    ) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }

      try {
        // estimate gas for add liquidity
        const gasEstimate =
          await routerContract.estimateGas.swapExactTokensForETH(
            amountIn,
            amountOutMin,
            routes,
            to,
            deadline
          );

        if (!gasEstimate) {
          console.error('Error estimating gas price');
        }

        const tx = await routerContract.swapExactTokensForETH(
          amountIn,
          amountOutMin,
          routes,
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

  const swapExactETHForTokens = useCallback(
    async (
      amountEth: bigint,
      amountOutMin: bigint,
      routes: Route[],
      to: Address,
      deadline: bigint
    ) => {
      if (!routerContract) {
        console.error('Router contract instance not available');
        return;
      }

      try {
        // estimate gas for add liquidity
        const gasEstimate =
          await routerContract.estimateGas.swapExactETHForTokens(
            amountOutMin,
            routes,
            to,
            deadline,
            { value: amountEth }
          );

        if (!gasEstimate) {
          console.error('Error estimating gas price');
        }

        const tx = await routerContract.swapExactETHForTokens(
          amountOutMin,
          routes,
          to,
          deadline,
          { gasLimit: gasEstimate ? gasEstimate : 3000000, value: amountEth }
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

  const removeLiquidity = useCallback(
    async (
      tokenA: Address,
      tokenB: Address,
      stable: boolean,
      liquidity: string,
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
        // // estimate gas for add liquidity
        // const gasEstimate = await routerContract.estimateGas.removeLiquidity(
        //   tokenA,
        //   tokenB,
        //   stable,
        //   liquidity,
        //   amountAMin,
        //   amountBMin,
        //   to,
        //   deadline
        // );

        // if (!gasEstimate) {
        //   console.error('Error estimating gas price');
        // }

        const tx = await routerContract.removeLiquidity(
          tokenA,
          tokenB,
          stable,
          liquidity,
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

  return {
    addLiquidity,
    getReserves,
    quoteAddLiquidity,
    getAmountsOut,
    addLiquidityETH,
    poolFor,
    swapExactTokensForTokens,
    UNSAFE_swapExactTokensForTokens,
    swapExactTokensForETH,
    swapExactETHForTokens,
    removeLiquidity,
  };
}
