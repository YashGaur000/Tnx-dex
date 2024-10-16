import { useQuery, gql } from '@apollo/client';
import { formatUnits } from 'ethers';
import { TokenDetails } from '../graphql/tokenQuery';
import { TokenDetailsType, TokenResponse } from '../graphql/types/Token';

const TOKEN_DETAILS_QUERY = gql(TokenDetails);

const formatValue = (reserve: string, decimal: bigint) => {
  return Number(formatUnits(reserve, decimal)) > 0
    ? Number(formatUnits(reserve, decimal)).toFixed(5)
    : '0.00';
};

export interface TokenPriceData {
  id: string;
  symbol: string;
  pricePerUSDNew: string;
}

const processTokenData = (data: TokenResponse): TokenPriceData[] => {
  return data.Token.map((token: TokenDetailsType) => {
    const tokenAddress = token.id.split('-')[0];

    const formattedTokenPricePerUSDNew = formatValue(
      token.pricePerUSDNew.toString(),
      BigInt(18)
    );

    return {
      id: tokenAddress,
      symbol: token.symbol,
      pricePerUSDNew: formattedTokenPricePerUSDNew,
    };
  });
};

// Custom hook to fetch and process liquidity pool data
export const useTokenPrice = () => {
  const { loading, error, data } = useQuery<TokenResponse>(TOKEN_DETAILS_QUERY);
  const processedData = data ? processTokenData(data) : [];

  return {
    loading,
    error,
    data: processedData,
  };
};
