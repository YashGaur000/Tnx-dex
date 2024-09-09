import { Route } from './generateAllRoutes';

export const findBestRoute = async (
  amountIn: bigint,
  allRoutes: Route[][],
  getAmountsOut: (
    amountIn: bigint,
    routes: Route[][]
  ) => Promise<bigint[][] | undefined>
): Promise<{ bestQuote: bigint; bestRoute: Route[] | null }> => {
  if (allRoutes.length === 0) return { bestQuote: BigInt(0), bestRoute: null };

  try {
    // Fetch amounts out for all routes in one go
    const amounts = await getAmountsOut(amountIn, allRoutes);
    if (!amounts) throw new Error('Failed to fetch amounts out');

    let bestQuote = BigInt(0);
    let bestRoute: Route[] | null = null;

    for (let i = 0; i < amounts.length; i++) {
      const amountsOut = amounts[i];
      const lastAmount = amountsOut
        ? amountsOut[amountsOut.length - 1]
        : undefined;

      if (lastAmount && lastAmount > bestQuote) {
        bestQuote = lastAmount;
        bestRoute = allRoutes[i];
      }
    }

    return { bestQuote, bestRoute };
  } catch (error) {
    console.error('Error finding best route:', error);
    return { bestQuote: BigInt(0), bestRoute: null };
  }
};
