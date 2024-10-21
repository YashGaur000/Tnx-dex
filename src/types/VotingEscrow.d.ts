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
    tokenIds: bigint,
    amount: bigint,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  increaseUnlockTime(
    tokenIds: number,
    value: number,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    tokenId: bigint,
    overrides?: Overrides
  ): Promise<ContractTransaction>;
  merge(
    _from: bigint,
    _to: bigint,
    overrides?: Overrides
  ): Promise<ContractTransaction>;
  increaseLockAmount(
    tokenId: bigint,
    value: bigint
  ): Promise<ContractTransaction>;
  getApproved(tokenId: bigint): Promise<Address>;
  voted(tokenId: bigint[]): Promise<boolean>;
  isApprovedForAll(
    owner: Address,
    operator: Address,
    overrides?: Overrides
  ): Promise<boolean>;
  balanceOf(owner: Address): Promise<bigint>;
  transferFrom(
    owner: Address,
    address: Address,
    _tokenId: number,
    overrides?: Overrides
  ): Promise<ContractTransaction>;
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
  setIsApproveLock: (input: boolean) => void;
  setIsSliderDisabled: (input: boolean) => void;
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
  amount: number;
  end: number;
  isPermanent: boolean;
  votingPower?: number;
}

export interface NftAttribute {
  trait_type: string;
  value: string;
}

export interface NftMetadata {
  name: string;
  attributes: NftAttribute[];
}

export interface Nft {
  tokenId: bigint;
  metadata: NftMetadata;
  votingStatus?: boolean;
  poolVoteCheck?: Address | undefined;
  lastVoted?: number;
  escrowType?: string;
  setSuccessLock?: (nftData: string[]) => void;
}
interface LockIncreaseProps {
  tokenId: number;
  additionalAmount: number;
  setAdditionalAmount: (input: string) => void;
  totalVotingPower: number;
  setSuccessLock: (input: boolean) => void;
  setIsApproveLock: (input: boolean) => void;
  votingStatus: string | boolean;
}
export interface ExtendStepperProps {
  tokenId: number;
  selectedWeeks: number;
  votingPower: number;
  setSuccessLock: (input: boolean) => void;
  isExtendDisable: boolean;
  onExtendClick: (input: boolean) => void;
  votingStatus: string | boolean;
}

export interface LockModelProps {
  handleSelectToken: (
    option: string,
    toTokenId: number,
    selectVotingPower: number,
    toLockDate: string,
    votingStatus: boolean
  ) => void;
  tokenId: number;
}
