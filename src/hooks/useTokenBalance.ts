import { useEffect, useMemo } from 'react';
import { useRootStore } from '../store/root';
import { TokenInfo } from '../constants/tokens';
import { Address, PublicClient } from 'viem';
import { ethers } from 'ethers';
import { useMultiCall } from './useMultiCall';

export const useTokenBalances = (tokens: TokenInfo[], account: Address) => {
  const { balances, loading, error, getTokenBalances } = useRootStore();

  const multicallClient = useMultiCall();

  useEffect(() => {
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
  }, [tokens, account, getTokenBalances, multicallClient]);

  // Memoize the mapped balances
  const tokenBalances = useMemo(() => {
    return tokens.reduce(
      (acc, token) => {
        acc[token.address as Address] = balances[token.address as Address]
          ? balances[token.address as Address]
          : 0;
        return acc;
      },
      {} as Record<Address, ethers.Numeric>
    );
  }, [tokens, balances]);

  return {
    balances: tokenBalances,
    loading,
    error,
  };
};
