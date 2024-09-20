import { ethers } from 'ethers';
import { findTokenBySymbol } from '../transaction/getTokenInfo';
import { TokenInfo } from '../../constants/tokens/type';
import { getAllRoutes, Graph, Route } from './generateAllRoutes';
import { findBestRoute } from './findBestRoute';

const MAX_HOP = 3;

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
  setIsLoading: (loading: boolean) => void,
  setAmountsOut: (amountsOut: bigint[]) => void
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

    const routes = getAllRoutes(graph, srcToken!, destToken!, MAX_HOP); // maxhop
    const amountInWei = ethers.parseUnits(amount, selectedToken1.decimals);

    const { bestQuote, bestRoute, bestAmounts } = await findBestRoute(
      amountInWei,
      routes,
      getAmountsOut
    );

    if (bestRoute && bestAmounts) {
      const formattedBestQuote = ethers.formatUnits(
        bestQuote,
        selectedToken2.decimals
      );
      const exchangeRate = Number(formattedBestQuote) / Number(amount);

      // Update state in one place
      setTokenInput2(formattedBestQuote);
      setExchangeRate(exchangeRate);
      setRoute(bestRoute);
      setAmountsOut(bestAmounts);
    }
  } catch (error) {
    console.error('Error fetching reserves:', error);
  } finally {
    setIsLoading(false);
  }
};
