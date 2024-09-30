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
  totalBribesUSD: BigNumberish;
  token0: {
    id: string; // token address
    symbol: string; // token symbol;
    name: string; // token name;
    chainID: bigint; // chain id of the token;
    decimals: bigint; // number of decimals;
    pricePerUSDNew: bigint; // price of token per USD;
  };
  token1: {
    id: string; // token address
    symbol: string; // token symbol;
    name: string; // token name;
    chainID: bigint; // chain id of the token;
    decimals: bigint; // number of decimals;
    pricePerUSDNew: bigint; // price of token per USD;
  };
}
export interface LiquidityPoolResponse {
  LiquidityPoolNew: LiquidityPoolNewType[];
}

export interface LiquidityPoolDataBySymbol {
  symbol0: string;
  symbol1: string;
  isStable: boolean;
}
