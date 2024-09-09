import React from 'react';
import { useNativeBalance } from '../../../hooks/useNativeBalance';
import { Address } from 'viem';

interface BalanceDisplayProps {
  address: Address;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ address }) => {
  const { balance, loading, error } = useNativeBalance(address);

  if (loading) return <p>Loading balance...</p>;
  if (error) return <p>{error}</p>;

  return Number(balance?.formatted).toFixed(5);
};

export default BalanceDisplay;
