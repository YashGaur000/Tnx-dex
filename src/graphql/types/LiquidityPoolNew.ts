import { BigNumberish } from 'ethers';

export interface LiquidityPoolNewType {
  id: string;
  name: string;
  isStable: boolean;
  reserve0: BigNumberish;
  reserve1: BigNumberish;
  totalVolume0: BigNumberish;
  totalVolume1: BigNumberish;
  totalVolumeUSD: BigNumberish;
  totalFees0: BigNumberish;
  totalFees1: BigNumberish;
  totalFeesUSD: BigNumberish;
  token0: {
    id: string;
    symbol: string;
  };
  token1: {
    id: string;
    symbol: string;
  };
}
export interface LiquidityPoolResponse {
  LiquidityPoolNew: LiquidityPoolNewType[];
}
