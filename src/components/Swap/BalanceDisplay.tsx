// BalanceDisplay.tsx
import React, { useState, useEffect } from 'react';
import { getNativeBalance } from '../../constants/provider';
import { Address } from 'viem';
import { type GetBalanceReturnType } from '@wagmi/core';

interface BalanceDisplayProps {
  address: Address;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ address }) => {
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

  if (loading) return <p>Loading balance...</p>;
  if (error) return <p>{error}</p>;

  return <p>{Number(balance?.formatted).toFixed(4)}</p>;
};

export default BalanceDisplay;
