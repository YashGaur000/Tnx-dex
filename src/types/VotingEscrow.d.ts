import { Address } from 'viem';
import { Contract } from '@ethersproject/contracts';
import { Overrides } from '@ethersproject/contracts';
import { BigNumber } from 'ethers';
export interface VotingEscrowContract extends Contract {
  createLock(
    amount: bigint,
    duration: number,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  increaseAmount(
    tokenIds: bigint,
    amount: bigint,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(overrides?: Overrides): Promise<ContractTransaction>;
  increaseLockAmount(
    tokenId: bigint,
    value: bigint
  ): Promise<ContractTransaction>;
  getApproved(tokenId: bigint): Promise<Address>;
  isApprovedForAll(
    owner: Address,
    operator: Address,
    overrides?: Overrides
  ): Promise<boolean>;
  isApprovedOrOwner(spender: Address, tokenId: bigint): Promise<boolean>;
}

export interface ContractTransaction {
  wait: () => Promise<ContractReceipt>;
}

export interface ContractReceipt {
  transactionHash: string;
}

export interface Attribute {
  trait_type: string;
  value: string;
}

export interface Metadata {
  attributes: Attribute[];
  background_color: string;
  description: string;
  image: string;
  name: string;
}

export interface LockItemProps {
  tokenId: bigint;
  metadata: Metadata;
}

export interface LockDepositeProps {
  setLockTokenValue: (input: string) => void;
  SetlockDuration: (input: number) => void;
  LockTokenValue: string;
  LockTokenSymbol: string;
  LocTokenAddress: string;
  LockTokenDecimal?: number;
  lockDuration: number;
  setSuccessLock: (input: boolean) => void;
}

export interface LockDataNew {
  tokenId: number;
  amount: bigint;
  end: number;
  isPermanent: boolean;
  votingPower: number;
}

export interface VotingEscrowContract extends Contract {
  locked(tokenId: number): Promise<LockedBalance>;
}

export interface LockedBalance {
  tokenId?: string;
  amount: BigNumber; // Locked token amount (in BigNumber)
  end: BigNumber; // Timestamp when the lock ends (in BigNumber)
  isPermanent: boolean; // Whether the lock is permanent
  votingPower?: number;
}
