import { Contract } from '@ethersproject/contracts';
import { Address } from 'viem';

interface PoolFactoryContract extends Contract {
  getFee(pool: Address, _stable: boolean): Promise<bigint>;
}

interface PoolFeeMapping {
  poolId: string;
  feePercentage: number;
}
