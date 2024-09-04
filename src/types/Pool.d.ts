import { Contract } from '@ethersproject/contracts';
import { Address } from 'viem';

interface PoolContract extends Contract {
  balanceOf(address: Address): Promise<bigint>;
  reserve0(): Promise<bigint>;
  reserve1(): Promise<bigint>;
  totalSupply(): Promise<bigint>;
  metadata(): Promise<Metadata>;
}

interface Metadata {
  dec0: bigint;
  dec1: bigint;
  r0: bigint;
  r1: bigint;
  st: boolean;
  t0: Address;
  t1: Address;
}
