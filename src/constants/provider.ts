import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { SupportedInterfaceChainId, getNetworkConfig } from './chain';
import { getBalance } from '@wagmi/core';
import { type GetBalanceReturnType } from '@wagmi/core';
import { Address } from 'viem';
import { wagmiConfig } from '../web3Provider/wagmi';
import { envConfig } from '../config';

export const getProvider = (): StaticJsonRpcProvider => {
  const chainId = envConfig.chainId as SupportedInterfaceChainId;

  const config = getNetworkConfig(chainId);

  if (!config) {
    throw new Error(`Network config not found for chainId: ${chainId}`);
  }

  if (!config?.RPC[0]) {
    throw new Error(`No RPC URL found for chainId: ${chainId}`);
  }

  const provider = new StaticJsonRpcProvider(config.RPC[0], chainId);

  return provider;
};

export const getNativeBalance = async (
  address: Address
): Promise<GetBalanceReturnType> => {
  try {
    const balance = await getBalance(wagmiConfig, {
      address: address,
    });
    return balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error; // Re-throw the error to handle it at the call site
  }
};
