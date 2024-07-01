import {
  SupportedInterfaceChainId,
  getNetworkConfig,
} from '../constants/chain';
import { useMemo } from 'react';
import {
  UseAccountReturnType as UseAccountReturnTypeWagmi,
  useAccount as useAccountWagmi,
} from 'wagmi';

type ReplaceChainId<T> = T extends { chainId: number }
  ? Omit<T, 'chainId'> & { chainId: SupportedInterfaceChainId | undefined }
  : T extends { chainId: number | undefined }
    ? Omit<T, 'chainId'> & { chainId: SupportedInterfaceChainId | undefined }
    : T;

type UseAccountReturnType = ReplaceChainId<UseAccountReturnTypeWagmi>;

export function useAccount(): UseAccountReturnType {
  const { chainId, ...rest } = useAccountWagmi();
  const config = getNetworkConfig(chainId as SupportedInterfaceChainId);

  let supportedChainId = undefined;

  if (config) supportedChainId = config.id;

  return useMemo(
    () => ({
      ...rest,
      chainId: supportedChainId,
    }),
    [rest, supportedChainId]
  );
}
