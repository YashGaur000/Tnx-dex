import contractAddresses from '../constants/contract-address/address';
import { PriorityQueue } from './priorityQueue';

export interface Route {
  from: string;
  to: string;
  stable: boolean;
  factory: string;
}

export type Graph = Record<string, string[]>;

interface RouteEvaluation {
  route: Route[];
  potentialQuote: string;
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
    if (!visitedTokens.has(neighbor)) {
      const subRoutes = generateRoutes(
        graph,
        neighbor,
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
              to: neighbor,
              stable: false,
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
  // const graph: Graph = {
  //     USDB: ["tSPACE","OTK"],
  //     tSPACE: ["USDB"],
  //     OTK: ["USDB"],
  //     tOP: ["tBLAST","tENVIO","tCURVE","tUSDC"],
  //     tBLAST: ["tENVIO","tAAVE","tOP","tCURVE"],
  //     tENVIO : ["tBLAST","tOP","tUSDC","tCURVE","tAAVE"],
  //     tCURVE : ["tOP","tAAVE","tENVIO","tBLAST"],
  //     tAAVE : ["tBLAST","tCURVE","tENVIO"],
  //     tUSDC : ["tENVIO","tOP"]
  // };
  //onst PoolFactory = contractAddresses.PoolFactory;
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
    route: Route[]
  ) => Promise<bigint[] | undefined>
) => {
  if (allRoutes.length === 0) return;

  // Create a priority queue, prioritizing routes with higher potential quotes
  const pq = new PriorityQueue<RouteEvaluation>(
    (a, b) => Number(b.potentialQuote) - Number(a.potentialQuote)
  );

  // Populate the priority queue with the initial evaluation of each route
  for (const route of allRoutes) {
    pq.enqueue({ route, potentialQuote: amountIn });
  }

  let bestQuote = BigInt(0);
  let bestRoute: Route[] | null = null;

  // Process routes from the priority queue
  while (!pq.isEmpty()) {
    const dequeuedItem = pq.dequeue();

    // Ensure dequeuedItem is not undefined
    if (!dequeuedItem) continue;

    const { route, potentialQuote } = dequeuedItem;

    // Skip processing if this route's potential is less than the current best quote
    if (Number(potentialQuote) <= bestQuote) continue;

    try {
      // Call the smart contract to get the actual output for the current route
      const amounts = await getAmountsOut(amountIn, route);

      const lastAmount = amounts?.[amounts.length - 1];

      if (lastAmount && lastAmount > bestQuote) {
        bestQuote = lastAmount;
        bestRoute = route;
      }
    } catch (error) {
      console.error('Error fetching amounts out:', error);
    }
  }

  return {
    bestQuote,
    bestRoute: bestRoute ? bestRoute : null,
  };
};
