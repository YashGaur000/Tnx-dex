import { http } from 'wagmi';
import {
  boba,
  bobaSepolia,
  linea,
  lineaSepolia,
  mainnet,
  optimism,
  sepolia,
  blast,
  blastSepolia,
} from 'wagmi/chains';
import { envConfig } from '../config';

export const SUPPORTED_MAINNET_CHAINS = [
  boba,
  linea,
  mainnet,
  optimism,
  blast,
] as const;

export const SUPPORTED_TESTNET_CHAINS = [
  sepolia,
  lineaSepolia,
  blastSepolia,
  bobaSepolia,
] as const;

export const SUPPORTED_CHAINS = [
  ...SUPPORTED_MAINNET_CHAINS,
  ...SUPPORTED_TESTNET_CHAINS,
] as const;

export const TRANSPORT_CHAINID = {
  //mainnet
  [boba.id]: http(),
  [linea.id]: http(),
  [mainnet.id]: http(),
  [optimism.id]: http(),
  [blast.id]: http(),
  //testnet
  [lineaSepolia.id]: http(),
  [sepolia.id]: http(),
  [blastSepolia.id]: http(),
  [bobaSepolia.id]: http(),
};

export type AllowedChainId =
  | 1
  | 288
  | 59144
  | 59141
  | 10
  | 11155111
  | 168587773
  | 81457
  | undefined;

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
  [mainnet.id]: {
    ...mainnet,
    RPC: [],
  },
  [linea.id]: {
    ...linea,
    RPC: [],
  },
  [boba.id]: {
    ...boba,
    RPC: [],
  },
  [optimism.id]: {
    ...optimism,
    RPC: [],
  },
  [blast.id]: {
    ...blast,
    RPC: [],
  },

  // Testnet
  [lineaSepolia.id]: {
    ...lineaSepolia,
    RPC: [],
  },
  [sepolia.id]: {
    ...sepolia,
    RPC: [],
  },
  [blastSepolia.id]: {
    ...blastSepolia,
    RPC: [envConfig.rpcUrl],
  },
  [bobaSepolia.id]: {
    ...bobaSepolia,
    RPC: [],
  },
} as const;

export function getNetworkConfig(
  chainId: SupportedInterfaceChainId
): ChainInfo | undefined {
  const config = NETWORK_CONFIGS[chainId];

  if (!config) return undefined; // this case can only ever occure when a wallet is connected with a unknown chainId which will not allow interaction

  return config;
}
