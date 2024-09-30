import { Address } from 'viem';
import { Contract, ContractTransaction } from '@ethersproject/contracts';

export interface VoterContract extends Contract {
  createGauge(
    _poolFactory: Address,
    _pool: Address,
    { gasLimit: bigInt }
  ): Promise<Address>;
  gauges(_pool: Address): Promise<Address>;
  gaugeToBribe(_gauge: Address): Promise<Address>;
  deposit(_amount: bigint): Promise<ContractTransaction>;
  reset(_tokenId: bigint): Promise<ContractTransaction>;
  estimateGas: {
    createGauge(_poolFactory: Address, _pool: Address): Promise<bigint>;
  };
  vote(
    _tokenId: number,
    _poolVote: ddress[],
    _weights: number[]
  ): Promise<ContractTransaction>;
}
