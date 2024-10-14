import React from 'react';
import { useNativeBalance } from '../../../hooks/useNativeBalance';
import { Address } from 'viem';

interface BalanceDisplayProps {
  address: Address;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ address }) => {
  const { balance, loading } = useNativeBalance(address);

  if (loading) return null;

  return Number(balance?.formatted).toFixed(5);
};

export default BalanceDisplay;
