import { Address } from 'viem';
import { Contract } from '@ethersproject/contracts';
import { Overrides } from '@ethersproject/contracts';

export interface VotingEscrowContract extends Contract {
  createLock(
    amount: bigint,
    duration: number,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  increaseAmount(
    amount: bigint,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(overrides?: Overrides): Promise<ContractTransaction>;

  getApproved(tokenId: bigint): Promise<Address>;

  isApprovedForAll(owner: Address, operator: Address): Promise<boolean>;

  isApprovedOrOwner(spender: Address, tokenId: bigint): Promise<boolean>;
}

export interface ContractTransaction {
  wait: () => Promise<ContractReceipt>;
}

export interface ContractReceipt {
  transactionHash: string;
}
