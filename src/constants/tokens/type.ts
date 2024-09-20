import { Address } from 'viem';
export interface TokenInfo {
  readonly chainId: number;
  readonly address: Address;
  readonly name: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoURI?: string;
}
