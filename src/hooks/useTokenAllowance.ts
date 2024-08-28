import { useCallback } from 'react';
import { useContract } from './useContract';
import { ContractInterface } from '@ethersproject/contracts';
import { Erc20Contract } from '../types/Token';
import { Address } from 'viem';

/**
 * Hook to create a token allowance transaction.
 * @param userAddress - The address of the user initiating the transaction.
 * @param contractAddress - The address of the token contract.
 * @param chainId - The chain ID where the contract is deployed.
 * @param ABI - The ABI of the token contract.
 * @returns A function to approve a token allowance.
 */
export function useTokenAllowance(
  contractAddress: Address,
  ABI: ContractInterface
) {
  const tokenContract = useContract(contractAddress, ABI) as Erc20Contract;

  const approveAllowance = useCallback(
    async (spenderAddress: Address, amount: string) => {
      if (!tokenContract) {
        console.error('Token contract instance not available');
        return;
      }

      try {
        const tx = await tokenContract.approve(spenderAddress, amount);
        console.log('Transaction sent:', tx);
        await tx.wait();
        console.log('Transaction confirmed');
        return tx;
      } catch (error) {
        console.error('Error sending transaction:', error);
        throw error;
      }
    },
    [tokenContract]
  );

  return { approveAllowance };
}
