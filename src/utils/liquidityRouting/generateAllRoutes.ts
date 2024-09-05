import contractAddresses from '../../constants/contract-address/address';

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

// Helper function for generating routes with memoization
function generateRoutesMemoized(
  graph: Graph,
  sourceToken: string,
  destToken: string,
  visitedTokens: Set<string>,
  currentHop: number,
  maxHops: number,
  memo: Map<string, Route[][]>
): Route[][] {
  const memoKey = `${sourceToken}-${destToken}-${currentHop}`;
  if (memo.has(memoKey)) {
    return memo.get(memoKey)!;
  }

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
      const subRoutes = generateRoutesMemoized(
        graph,
        neighbor.token,
        destToken,
        visitedTokens,
        currentHop + 1,
        maxHops,
        memo
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
  memo.set(memoKey, routes);
  return routes;
}

export function getAllRoutes(
  graph: Graph,
  sourceToken: string,
  destToken: string,
  maxHops: number
): Route[][] {
  return generateRoutesMemoized(
    graph,
    sourceToken,
    destToken,
    new Set<string>(),
    0,
    maxHops,
    new Map<string, Route[][]>()
  );
}
