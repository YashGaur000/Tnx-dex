import { useEffect, useMemo } from 'react';
import { useRootStore } from '../store/root';
import { TokenInfo } from '../constants/tokens';
import { Address } from 'viem';

export const useTokenBalances = (tokens: TokenInfo[], account: Address) => {
  const { balances, loading, error, getTokenBalances } = useRootStore();

  useEffect(() => {
    async function fetchBalances() {
      await getTokenBalances(tokens, account);
    }
    void fetchBalances();
  }, [tokens, account, getTokenBalances]);

  // Memoize the mapped balances
  const tokenBalances = useMemo(() => {
    return tokens.reduce(
      (acc, token) => {
        acc[token.address] = balances[token.address as Address]
          ? balances[token.address as Address]
          : '0.00';
        return acc;
      },
      {} as Record<string, string>
    );
  }, [tokens, balances]);

  return {
    balances: tokenBalances,
    loading,
    error,
  };
};
