import { Contract, ContractTransaction } from '@ethersproject/contracts';
import { ethers } from 'ethers';
import { Address } from 'viem';

interface RouterContract extends Contract {
  functions: {
    addLiquidity(
      tokenA: Address,
      tokenB: Address,
      stable: boolean,
      amountADesired: ethers.Numeric,
      amountBDesired: ethers.Numeric,
      amountAMin: ethers.Numeric,
      amountBMin: ethers.Numeric,
      to: Address,
      deadline: ethers.Numeric
    ): Promise<ContractTransaction>;
    factoryRegistry(): Promise<[Address]>;
  };
}

export interface AddLiquidityParams {
  tokenA: Address;
  tokenB: Address;
  stable: boolean;
  amountADesired: ethers.Numeric;
  amountBDesired: ethers.Numeric;
  amountAMin: ethers.Numeric;
  amountBMin: ethers.Numeric;
  to: Address;
  deadline: number;
}

export interface LiquidityResult {
  amountA: ethers.Numeric;
  amountB: ethers.Numeric;
  liquidity: ethers.Numeric;
}

interface AddLiquidityParams {
  tokenA: string;
  tokenB: string;
  stable: boolean;
  amountADesired: ethers.Numeric;
  amountBDesired: ethers.Numeric;
  amountAMin: ethers.Numeric;
  amountBMin: ethers.Numeric;
  to: string;
  deadline: number;
}
