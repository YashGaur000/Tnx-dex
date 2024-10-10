import { createPublicClient, http } from 'viem';
import { getNetworkConfig } from '../constants/chain';
import { useAccount } from './useAccount';
import { useMemo } from 'react';
import { envConfig } from '../config';

export const useMultiCall = () => {
  const { chainId } = useAccount();
  const defaultChainId = envConfig.chainId;

  const config = getNetworkConfig(chainId || defaultChainId);

  const multicallClient = useMemo(() => {
    if (!config) return null;

    return createPublicClient({
      cacheTime: 10_000,
      batch: {
        multicall: {
          wait: 20,
          batchSize: 4096,
        },
      },
      chain: config,
      transport: http(config.RPC[0]),
    });
  }, [config]);

  return multicallClient;
};
