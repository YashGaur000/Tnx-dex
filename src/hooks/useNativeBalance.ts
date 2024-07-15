import { useState, useEffect } from 'react';
import { getNativeBalance } from '../constants/provider';
import { Address } from 'viem';
import { type GetBalanceReturnType } from '@wagmi/core';

export const useNativeBalance = (address: Address) => {
  const [balance, setBalance] = useState<GetBalanceReturnType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);
      try {
        const balance = await getNativeBalance(address);
        console.log(balance);
        setBalance(balance);
      } catch (error) {
        setError('Failed to fetch balance');
      } finally {
        setLoading(false);
      }
    };

    void fetchBalance();
  }, [address]);

  return { balance, loading, error };
};
