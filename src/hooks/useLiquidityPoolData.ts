import { useQuery, gql } from '@apollo/client';
import { formatUnits } from 'ethers';
import { LiquidityPoolNew } from '../graphql/poolQuery';
import {
  LiquidityPoolNewType,
  LiquidityPoolResponse,
} from '../graphql/types/LiquidityPoolNew';

const LIQUIDITY_POOL_QUERY = gql(LiquidityPoolNew);
// const LIQUIDITY_POOL_BY_SYMBOLS = gql(getLiquidityPoolBySymbols);

// Function to convert reserves to human-readable format
const formatValue = (reserve: string, decimal: bigint) => {
  return Number(formatUnits(reserve, decimal)) > 0
    ? Number(formatUnits(reserve, decimal)).toFixed(5)
    : 0;
};

// Function to process the fetched data
const processLiquidityPoolData = (data: LiquidityPoolResponse) => {
  return data.LiquidityPoolNew.map((pool: LiquidityPoolNewType) => ({
    ...pool,
    reserve0: formatValue(pool.reserve0.toString(), pool.token0.decimals),
    reserve1: formatValue(pool.reserve1.toString(), pool.token1.decimals),
    totalVolumeUSD: formatValue(pool.totalVolumeUSD.toString(), BigInt(18)),
    totalVolume0: formatValue(
      pool.totalVolume0.toString(),
      pool.token0.decimals
    ),
    totalVolume1: formatValue(
      pool.totalVolume1.toString(),
      pool.token1.decimals
    ),
    totalFeesUSD: formatValue(pool.totalFeesUSD.toString(), BigInt(18)),
    totalFees0: formatValue(pool.totalFeesUSD.toString(), pool.token0.decimals),
    totalFees1: formatValue(pool.totalFeesUSD.toString(), pool.token1.decimals),
    totalBribesUSD: formatValue(pool.totalBribesUSD.toString(), BigInt(18)),
  }));
};

// Custom hook to fetch and process liquidity pool data
export const useLiquidityPoolData = () => {
  // const { loading, error, data } = filterdata ?  useQuery<LiquidityPoolResponse>(LIQUIDITY_POOL_BY_SYMBOLS, {
  //   variables: {"symbol0": filterdata.symbol0, "symbol1": filterdata.symbol1, "isStable": filterdata.isStable}}) : useQuery<LiquidityPoolResponse>(LIQUIDITY_POOL_QUERY);
  const { loading, error, data } =
    useQuery<LiquidityPoolResponse>(LIQUIDITY_POOL_QUERY);
  // Process data after fetching
  const processedData = data ? processLiquidityPoolData(data) : [];

  return {
    loading,
    error,
    data: processedData,
  };
};
