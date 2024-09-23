import { useCallback } from 'react';
import { useContract } from './useContract';
import { PoolContract } from '../types/Pool';
import { Address } from 'viem';
import poolAbi from '../constants/artifacts/contracts/Pool.json';
import { useAccount } from './useAccount';
import { ethers } from 'ethers';
import { useTokenAllowance } from './useTokenAllowance';
import { formatAmounts } from '../utils/transaction/parseAmounts';
// import { Contract } from '@ethersproject/contracts';
// import { AddressZero } from '@ethersproject/constants';
// import { useEthersProvider } from './useEthersProvider';
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

  // const provider = useEthersProvider({chainId})

  // const getPoolContract = useCallback(
  //   (id: Address) => {
  //     if (!isAddress(id) || id === AddressZero) {
  //       console.error(`Invalid 'address' parameter '${id}'.`);
  //       return undefined;
  //     }

  //     if (!provider) {
  //       console.error('Provider not available');
  //       return undefined;
  //     }

  //     const signer = provider.getSigner(address!);
  //     return new Contract(id, poolAbi.abi, signer);
  //   },
  //   [] // Dependencies
  // )

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

  const { checkAllowance } = useTokenAllowance(poolId as Address, poolAbi.abi);

  const fetchAllowance = useCallback(
    async (
      stakeAmount: number,
      spender: Address,
      setIsSufficientAllowance: (isAllow: boolean) => void
    ) => {
      if (address && stakeAmount) {
        try {
          const allowance = await checkAllowance(address, spender);
          const decimals = await poolContract.decimals();
          const formattedAllowance = formatAmounts(allowance, decimals);
          setIsSufficientAllowance(Number(formattedAllowance) >= stakeAmount);
        } catch (error) {
          console.error('Error checking allowance:', error);
          setIsSufficientAllowance(false);
        }
      }
    },
    [address, checkAllowance]
  );

  // const claimFees = useCallback(
  //   async (id: string) => {
  //     const poolContract = getPoolContract(id as Address)
  //     if (!poolContract) {
  //       console.error('Pool contract instance not available');
  //       return;
  //     }
  //     try {
  //       const gasEstimate = await poolContract.estimateGas.claimFees();

  //       const result = await poolContract.claimFees({
  //         gasLimit: gasEstimate ,
  //       });

  //       const { transactionHash } = await result.wait();

  //       return transactionHash;
  //     } catch (error) {
  //       console.log(error);
  //       return undefined;
  //     }
  //   },
  //   [poolContract]
  // );

  return { metadata, balanceOf, fetchAllowance };
}
