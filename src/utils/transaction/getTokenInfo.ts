// src/utils/tokenUtils.ts

import { ERC20_TEST_TOKEN_LIST, TokenInfo } from '../../constants/tokens';

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

/**
 * Custom hook to get token information by address.
 * @param address The address of the token.
 * @returns The token information if found, otherwise undefined.
 */
export const getTokenInfo = (address: string | null): TokenInfo | undefined => {
  if (!address) return undefined;
  return findTokenByAddress(address);
};
