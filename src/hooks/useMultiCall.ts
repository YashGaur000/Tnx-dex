import { createPublicClient, http } from 'viem';
import { getNetworkConfig } from '../constants/chain';
import { useAccount } from './useAccount';
import { useMemo } from 'react';

export const useMultiCall = () => {
  const { chainId } = useAccount();
  const config = getNetworkConfig(chainId);

  const multicallClient = useMemo(() => {
    if (!config) return null;

    return createPublicClient({
      chain: config,
      transport: http(),
    });
  }, [config]);

  return multicallClient;
};
