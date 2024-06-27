import { http } from 'wagmi';
import {
  boba,
  linea,
  lineaSepolia,
  mainnet,
  optimism,
  sepolia,
} from 'wagmi/chains';

export const SUPPORTED_MAINNET_CHAINS = [
  boba,
  linea,
  mainnet,
  optimism,
] as const;

export const SUPPORTED_TESTNET_CHAINS = [sepolia, lineaSepolia] as const;

export const TRANSPORT_CHAINID = {
  [boba.id]: http(),
  [linea.id]: http(),
  [lineaSepolia.id]: http(),
  [mainnet.id]: http(),
  [optimism.id]: http(),
  [sepolia.id]: http(),
};

export type AllowedChainId =
  | 1
  | 288
  | 59144
  | 59141
  | 10
  | 11155111
  | undefined;
