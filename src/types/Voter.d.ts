import { Address } from 'viem';
import { Contract } from '@ethersproject/contracts';

export interface VoterContract extends Contract {
  createGauge(
    _poolFactory: Address,
    _pool: Address,
    { gasLimit: bigInt }
  ): Promise<Address>;
  gauges(_pool: Address): Promise<Address>;
  estimateGas: {
    createGauge(_poolFactory: Address, _pool: Address): Promise<bigint>;
  };
}
