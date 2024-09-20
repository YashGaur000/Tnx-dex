import { Contract, ContractTransaction } from '@ethersproject/contracts';
import { Address } from 'viem';

export interface GaugeContract extends Contract {
  deposit(_amount: bigint): Promise<ContractTransaction>;
  deposit(_amount: bigint, _recipient: Address): Promise<ContractTransaction>;
  balanceOf(address: string): Promise<bigint>;
  totalSupply(): Promise<bigint>;
}
