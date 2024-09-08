import { useQuery, gql } from '@apollo/client';
import { formatUnits } from 'ethers';
import { getLiquidityPoolById } from '../graphql/poolQuery';
import {
  LiquidityPoolNewType,
  LiquidityPoolResponse,
} from '../graphql/types/LiquidityPoolNew';

// const LIQUIDITY_POOL_QUERY = gql(LiquidityPoolNew);
const LIQUIDITY_POOL_BY_ID = gql(getLiquidityPoolById);

// Function to convert reserves to human-readable format
const formatReserves = (reserve: string, decimal: bigint) => {
  return Number(formatUnits(reserve, decimal));
};

// Function to process the fetched data
const processLiquidityPoolData = (data: LiquidityPoolResponse) => {
  return data.LiquidityPoolNew.map((pool: LiquidityPoolNewType) => ({
    ...pool,
    reserve0: formatReserves(pool.reserve0.toString(), pool.token0.decimals),
    reserve1: formatReserves(pool.reserve1.toString(), pool.token1.decimals),
  }));
};

// Custom hook to fetch and process liquidity pool data
export const useLiquidityPoolDataById = (poolId: string) => {
  const { loading, error, data } = useQuery<LiquidityPoolResponse>(
    LIQUIDITY_POOL_BY_ID,
    {
      variables: { id: poolId },
    }
  );
  // Process data after fetching
  const processedData = data ? processLiquidityPoolData(data) : [];

  return {
    loading,
    error,
    data: processedData,
  };
};
