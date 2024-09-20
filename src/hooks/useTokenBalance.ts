import { useEffect, useMemo } from 'react';
import { useRootStore } from '../store/root';
import { TokenInfo } from '../constants/tokens/type';
import { Address, PublicClient } from 'viem';
import { ethers } from 'ethers';
import { useMultiCall } from './useMultiCall';

export const useTokenBalances = (tokens: TokenInfo[], account: Address) => {
  const { transactionStatus, balances, loading, error, getTokenBalances } =
    useRootStore();

  const multicallClient = useMultiCall();

  useEffect(() => {
    // Fetch balances once when the component mounts
    async function fetchBalances() {
      if (multicallClient) {
        await getTokenBalances(
          multicallClient as PublicClient,
          tokens,
          account
        );
      }
    }
    void fetchBalances();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionStatus]); // Empty dependency array to ensure it runs only once on mount

  // Memoize the mapped balances
  const tokenBalances = useMemo(() => {
    return tokens.reduce(
      (acc, token) => {
        acc[token.address] = account ? balances[token.address] : 0;
        return acc;
      },
      {} as Record<Address, ethers.Numeric>
    );
  }, [tokens, balances, transactionStatus]);

  return {
    balances: tokenBalances,
    loading,
    error,
  };
};
