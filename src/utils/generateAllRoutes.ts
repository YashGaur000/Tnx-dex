import contractAddresses from '../constants/contract-address/address';
import { PriorityQueue } from './priorityQueue';

export interface Route {
  from: string;
  to: string;
  stable: boolean;
  factory: string;
}

interface Connection {
  token: string;
  stable: boolean;
}

export type Graph = Record<string, Connection[]>;

interface RouteEvaluation {
  route: Route[];
  potentialQuote: bigint;
}

function generateRoutes(
  graph: Graph,
  sourceToken: string,
  destToken: string,
  visitedTokens: Set<string>,
  currentHop: number,
  maxHops: number
): Route[][] {
  if (currentHop > maxHops) {
    return []; // Exceeded max hops, so no valid routes
  }

  if (sourceToken === destToken) {
    return [[]]; // Reached destination
  }

  visitedTokens.add(sourceToken);
  const routes: Route[][] = [];

  for (const neighbor of graph[sourceToken]) {
    if (!visitedTokens.has(neighbor.token)) {
      const subRoutes = generateRoutes(
        graph,
        neighbor.token,
        destToken,
        visitedTokens,
        currentHop + 1,
        maxHops
      );

      for (const subRoute of subRoutes) {
        routes.push(
          [
            {
              from: sourceToken,
              to: neighbor.token,
              stable: neighbor.stable,
              factory: contractAddresses.PoolFactory.toString(),
            },
          ].concat(subRoute)
        );
      }
    }
  }

  visitedTokens.delete(sourceToken); // Unmark the current token to allow re-use in other paths
  return routes;
}

export function getAllRoutes(
  graph: Graph,
  sourceToken: string,
  destToken: string,
  maxHops: number
): Route[][] {
  return generateRoutes(
    graph,
    sourceToken,
    destToken,
    new Set<string>(),
    0,
    maxHops
  );
}

export const findBestRoute = async (
  amountIn: string,
  allRoutes: Route[][],
  getAmountsOut: (
    amountIn: string,
    routes: Route[][]
  ) => Promise<bigint[][] | undefined>
): Promise<{ bestQuote: bigint; bestRoute: Route[] | null }> => {
  if (allRoutes.length === 0) return { bestQuote: BigInt(0), bestRoute: null };

  try {
    // Create a priority queue, prioritizing routes with higher potential quotes
    const pq = new PriorityQueue<RouteEvaluation>(
      (a, b) => Number(b.potentialQuote) - Number(a.potentialQuote)
    );

    // Fetch amounts out for all routes
    const amounts = await getAmountsOut(amountIn, allRoutes);
    if (!amounts) throw new Error('Failed to fetch amounts out');

    // Populate the priority queue with the evaluation of each route
    allRoutes.forEach((route, i) => {
      const amountsOut = amounts[i];
      const lastAmount = amountsOut[amountsOut.length - 1];

      if (lastAmount) {
        pq.enqueue({ route, potentialQuote: lastAmount });
      }
    });

    // Get the best evaluation from the priority queue
    const bestEvaluation = pq.peek();

    return {
      bestQuote: bestEvaluation?.potentialQuote ?? BigInt(0),
      bestRoute: bestEvaluation?.route ?? null,
    };
  } catch (error) {
    console.error('Error finding best route:', error);
    return { bestQuote: BigInt(0), bestRoute: null };
  }
};
