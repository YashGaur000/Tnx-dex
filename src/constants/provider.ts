import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { SupportedInterfaceChainId, getNetworkConfig } from './chain';
import { getBalance } from '@wagmi/core';
import { type GetBalanceReturnType } from '@wagmi/core';
import { Address } from 'viem';
import { wagmiConfig } from '../components/Web3Provider/wagmi';

export const getProvider = (
  chainId: SupportedInterfaceChainId
): StaticJsonRpcProvider => {
  const config = getNetworkConfig(chainId);

  const provider = new StaticJsonRpcProvider(config?.RPC[0], chainId);

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
