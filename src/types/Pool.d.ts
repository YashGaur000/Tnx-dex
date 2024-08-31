import { Contract } from '@ethersproject/contracts';
import { Address } from 'viem';

interface PoolContract extends Contract {
  balanceOf(address: Address): Promise<bigint>;
  reserve0(): Promise<bigint>;
  reserve1(): Promise<bigint>;
  totalSupply(): Promise<bigint>;
}
