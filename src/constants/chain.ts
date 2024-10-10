import { http } from 'wagmi';
import { blast, blastSepolia } from 'wagmi/chains';
import { envConfig } from '../config';

export const SUPPORTED_MAINNET_CHAINS = [blast] as const;

export const SUPPORTED_TESTNET_CHAINS = [blastSepolia] as const;

export const SUPPORTED_CHAINS = [
  ...SUPPORTED_MAINNET_CHAINS,
  ...SUPPORTED_TESTNET_CHAINS,
] as const;

export const TRANSPORT_CHAINID = {
  //mainnet
  [blast.id]: http(envConfig.rpcUrl),
  //testnet
  [blastSepolia.id]: http(envConfig.rpcUrl),
};

export type AllowedChainId = 168587773 | 81457 | undefined;

// have to check

type ExtractObject<
  TObject extends Record<string, unknown>,
  TNarrowedObject extends Partial<TObject>,
> = Extract<TObject, TNarrowedObject>;

export type SupportedInterfaceChain<
  partialChain extends Partial<(typeof SUPPORTED_CHAINS)[number]> = Partial<
    (typeof SUPPORTED_CHAINS)[number]
  >,
> = ExtractObject<(typeof SUPPORTED_CHAINS)[number], partialChain>;

export type SupportedInterfaceChainId = SupportedInterfaceChain['id'];

type ChainInfo = SupportedInterfaceChain & {
  RPC: string[];
};

type NetworkConfig = {
  readonly [chainId in SupportedInterfaceChainId]: ChainInfo;
};

export const NETWORK_CONFIGS: NetworkConfig = {
  // Mainnet
  [blast.id]: {
    ...blast,
    RPC: [envConfig.rpcUrl],
  },
  // Testnet
  [blastSepolia.id]: {
    ...blastSepolia,
    RPC: [envConfig.rpcUrl],
  },
} as const;

export function getNetworkConfig(
  chainId: SupportedInterfaceChainId
): ChainInfo | undefined {
  const config = NETWORK_CONFIGS[chainId];

  if (!config) return undefined; // this case can only ever occure when a wallet is connected with a unknown chainId which will not allow interaction

  return config;
}
