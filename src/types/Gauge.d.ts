import { Contract, ContractTransaction } from '@ethersproject/contracts';
import { Address } from 'viem';

export interface GaugeContract extends Contract {
  deposit(_amount: bigint, { gasLimit: BigInt }): Promise<ContractTransaction>;
  deposit(_amount: bigint, _recipient: Address): Promise<ContractTransaction>;
  withdraw(_amount: bigint, { gasLimit: BigInt }): Promise<ContractTransaction>;
  getReward(
    _account: Address,
    { gasLimit: BigInt }
  ): Promise<ContractTransaction>;
  balanceOf(address: string): Promise<bigint>;
  totalSupply(): Promise<bigint>;
  estimateGas: {
    getReward(_account: Address): Promise<bigint>;
    deposit(_amount: bigint): Promise<bigint>;
    withdraw(_amount: bigint): Promise<bigint>;
  };
}
