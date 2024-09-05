import { Graph } from '../utils/liquidityRouting/generateAllRoutes';
import { useLiquidityPoolData } from './useLiquidityPoolData';

export const useLiquidityRouting = () => {
  const { data } = useLiquidityPoolData();

  const graph = data.reduce<Graph>((acc, pool) => {
    const { token0, token1, isStable } = pool;
    const token0Address = token0.id.split('-')[0];
    const token1Address = token1.id.split('-')[0];

    if (!acc[token0Address]) acc[token0Address] = [];
    if (!acc[token1Address]) acc[token1Address] = [];

    // Add edges in both directions for bidirectional graph
    if (!acc[token0Address].some((conn) => conn.token === token1Address)) {
      acc[token0Address].push({ token: token1Address, stable: isStable });
    }
    if (!acc[token1Address].some((conn) => conn.token === token0Address)) {
      acc[token1Address].push({ token: token0Address, stable: isStable });
    }

    return acc;
  }, {});

  return graph;
};
