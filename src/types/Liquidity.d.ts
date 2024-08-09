export interface AddLiquidityParams {
  tokenA: string;
  tokenB: string;
  stable: boolean;
  amountADesired: ethers.BigNumber;
  amountBDesired: ethers.BigNumber;
  amountAMin: ethers.BigNumber;
  amountBMin: ethers.BigNumber;
  to: string;
  deadline: number;
}

export interface LiquidityResult {
  amountA: ethers.BigNumber;
  amountB: ethers.BigNumber;
  liquidity: ethers.BigNumber;
}

interface AddLiquidityParams {
  tokenA: string;
  tokenB: string;
  stable: boolean;
  amountADesired: ethers.BigNumber;
  amountBDesired: ethers.BigNumber;
  amountAMin: ethers.BigNumber;
  amountBMin: ethers.BigNumber;
  to: string;
  deadline: number;
}
