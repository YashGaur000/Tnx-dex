import { Address } from 'viem';
import { Contract, ContractTransaction } from '@ethersproject/contracts';

export interface BribeVotingRewardContract extends Contract {
  notifyRewardAmount(
    token: Address,
    amount: bigint,
    { gasLimit: bigInt }
  ): Promise<ContractTransaction>;
  rewardsListLength(): Promise<number>;
  rewards(index: number): Promise<Address>;
  estimateGas: {
    notifyRewardAmount(token: Address, amount: bigint): Promise<bigint>;
  };
}
