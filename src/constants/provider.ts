import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { SupportedInterfaceChainId, getNetworkConfig } from './chain';

export const getProvider = (
  chainId: SupportedInterfaceChainId
): StaticJsonRpcProvider => {
  const config = getNetworkConfig(chainId);

  const provider = new StaticJsonRpcProvider(config?.RPC[0], chainId);

  return provider;
};
