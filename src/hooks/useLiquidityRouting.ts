import { Graph } from '../utils/generateAllRoutes';
import { useLiquidityPoolData } from './useLiquidityPoolData';

export const useLiquidityRouting = () => {
  const { data } = useLiquidityPoolData();

  console.log('data from routing-------->', data);

  const graph = data.reduce<Graph>((acc, pool) => {
    const { token0, token1 } = pool;
    const token0Address = token0.id.split('-')[0];
    const token1Address = token1.id.split('-')[0];

    if (!acc[token0Address]) acc[token0Address] = [];
    if (!acc[token1Address]) acc[token1Address] = [];

    // Add edges in both directions for bidirectional graph
    if (!acc[token0Address].includes(token1Address)) {
      acc[token0Address].push(token1Address);
    }
    if (!acc[token1Address].includes(token0Address)) {
      acc[token1Address].push(token0Address);
    }

    return acc;
  }, {});

  return graph;
};
