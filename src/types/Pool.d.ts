import { Contract } from '@ethersproject/contracts';
import { Address } from 'viem';

interface PoolContract extends Contract {
  balanceOf(address: Address): Promise<bigint>;
  reserve0(): Promise<bigint>;
  reserve1(): Promise<bigint>;
  totalSupply(): Promise<bigint>;
  metadata(): Promise<Metadata>;
  decimals(): Promise<number>;
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

interface UserPosition {
  lp: Address;
  //   symbol: string;
  //   decimals: number;
  //   totalSupply: string;
  isStable: boolean;
  token0: {
    id: string; // token address
    symbol: string; // token symbol;
  };
  token1: {
    id: string; // token address
    symbol: string; // token symbol;
  };
  reserve0: string;
  //claimable0?: bigint;

  //   token1: string;
  reserve1: string;
  //claimable1?: bigint;

  //   gauge: string;
  //   gaugeTotalSupply: string;
  //   gaugeAlive: boolean;

  //   fee: string;
  //   bribe: string;
  //   factory: string;

  //   emissions: string;
  //   emissionsToken: string;

  accountBalance: string;
  //   accountEarned: string;
  //   accountStaked: string;

  //   poolFee: string;
  //   token0Fees: string;
  //   token1Fees: string;
}
