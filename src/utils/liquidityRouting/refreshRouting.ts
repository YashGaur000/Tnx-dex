import { ethers } from 'ethers';
import { findTokenBySymbol } from '../transaction/getTokenInfo';
import { TokenInfo } from '../../constants/tokens';
import { getAllRoutes, Graph, Route } from './generateAllRoutes';
import { findBestRoute } from './findBestRoute';

export const fetchBestRouteAndUpdateState = async (
  selectedToken1: TokenInfo,
  selectedToken2: TokenInfo,
  amount: string,
  graph: Graph,
  getAmountsOut: (
    amountIn: bigint,
    routes: Route[][]
  ) => Promise<bigint[][] | undefined>,
  setTokenInput2: (input: string) => void,
  setExchangeRate: (input: number) => void,
  setRoute: (route: Route[] | null) => void,
  setIsLoading: (loading: boolean) => void
) => {
  try {
    // Handle token conversions for ETH to WETH
    const srcToken =
      selectedToken1.symbol === 'ETH'
        ? findTokenBySymbol('WETH')
        : selectedToken1.address;

    const destToken =
      selectedToken2.symbol === 'ETH'
        ? findTokenBySymbol('WETH')
        : selectedToken2.address;

    const routes = getAllRoutes(graph, srcToken!, destToken!, 3); // maxhop
    const amountInWei = ethers.parseUnits(amount, selectedToken1.decimals);

    const bestPath = await findBestRoute(amountInWei, routes, getAmountsOut);

    if (bestPath?.bestQuote) {
      const bestQuote = ethers.formatUnits(
        bestPath.bestQuote,
        selectedToken2.decimals
      );
      const exchangeRate = Number(bestQuote) / Number(amount);

      // Update state in one place
      setTokenInput2(bestQuote);
      setExchangeRate(exchangeRate);
      setRoute(bestPath.bestRoute);
    }
  } catch (error) {
    console.error('Error fetching reserves:', error);
  } finally {
    setIsLoading(false);
  }
};
