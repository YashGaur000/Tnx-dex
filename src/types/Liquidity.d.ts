import { Contract, ContractTransaction } from '@ethersproject/contracts';
import { ethers } from 'ethers';

interface RouterContract extends Contract {
  functions: {
    addLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      amountADesired: ethers.Numeric,
      amountBDesired: ethers.Numeric,
      amountAMin: ethers.Numeric,
      amountBMin: ethers.Numeric,
      to: string,
      deadline: ethers.Numeric
    ): Promise<ContractTransaction>;
    factoryRegistry(): Promise<[string]>;
  };
}

export interface AddLiquidityParams {
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
