import { useQuery, gql } from '@apollo/client';
import { formatUnits } from 'ethers';
import { LiquidityPoolNew } from '../graphql/poolQuery';
import {
  LiquidityPoolNewType,
  LiquidityPoolResponse,
} from '../graphql/types/LiquidityPoolNew';

const LIQUIDITY_POOL_QUERY = gql(LiquidityPoolNew);

// Function to convert reserves to human-readable format
const formatReserves = (reserve: string) => {
  return Number(formatUnits(reserve, 18)); // Assuming the reserve is in 18 decimal places
};

// Function to process the fetched data
const processLiquidityPoolData = (data: LiquidityPoolResponse) => {
  return data.LiquidityPoolNew.map((pool: LiquidityPoolNewType) => ({
    ...pool,
    reserve0: formatReserves(pool.reserve0.toString()),
    reserve1: formatReserves(pool.reserve1.toString()),
  }));
};

// Custom hook to fetch and process liquidity pool data
export const useLiquidityPoolData = () => {
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
