// src/utils/tokenUtils.ts

import { Address } from 'viem';
import { TokenInfo } from '../../constants/tokens/type';
import { ERC20_TEST_TOKEN_LIST } from '../../constants/tokens/testnetTokens';
import { TokenPriceData } from '../../hooks/useTokenPrice';

/**
 * Finds a token by its address in the ERC20 test token list.
 * @param address The address of the token.
 * @returns The token information if found, otherwise undefined.
 */
export function findTokenByAddress(address: string): TokenInfo | undefined {
  return ERC20_TEST_TOKEN_LIST.find(
    (token) => token.address.toLowerCase() === address.toLowerCase()
  );
}

export function findTokenBySymbol(symbol: string): Address | undefined {
  const token = ERC20_TEST_TOKEN_LIST.find(
    (token) => token.symbol.toLowerCase() === symbol.toLowerCase()
  );
  return token?.address;
}

/**
 * Custom hook to get token information by address.
 * @param address The address of the token.
 * @returns The token information if found, otherwise undefined.
 */
export const getTokenInfo = (address: string | null): TokenInfo | undefined => {
  if (!address) return undefined;
  return findTokenByAddress(address);
};

export function findTokenPriceBytokenInfo(
  tokenPiceData: TokenPriceData[],
  tokenInfo: TokenInfo,
  balance: string
): string {
  let token = tokenPiceData.find(
    (token) => token.id.toLowerCase() === tokenInfo.address.toLowerCase()
  );
  if (tokenInfo.symbol === 'ETH') {
    token = tokenPiceData.find(
      (token) => token.symbol.toLowerCase() === 'WETH'.toLowerCase()
    );
  }

  const tokenPriceInUsd = token
    ? (Number(token.pricePerUSDNew) * Number(balance)).toFixed(2)
    : 'None';

  return tokenPriceInUsd;
}
