import { useState, useEffect } from 'react';
import { getNativeBalance } from '../constants/provider';
import { Address } from 'viem';
import { type GetBalanceReturnType } from '@wagmi/core';
import { useRootStore } from '../store/root';

export const useNativeBalance = (address: Address) => {
  const [balance, setBalance] = useState<GetBalanceReturnType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { transactionStatus } = useRootStore();

  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);
      try {
        const balance = await getNativeBalance(address);
        setBalance(balance);
      } catch (error) {
        setError('Failed to fetch balance');
      } finally {
        setLoading(false);
      }
    };

    void fetchBalance();
  }, [address, transactionStatus]);

  return { balance, loading, error };
};
