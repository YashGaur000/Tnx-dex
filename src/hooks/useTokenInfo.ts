import { ERC20_TEST_TOKEN_LIST, TokenInfo } from '../constants/tokens'; // Adjust the import path accordingly

export function findTokenByAddress(address: string): TokenInfo | undefined {
  return ERC20_TEST_TOKEN_LIST.find(
    (token) => token.address.toLowerCase() === address.toLowerCase()
  );
}

export const useTokenInfo = (address: string | null) => {
  if (!address) return undefined;
  return findTokenByAddress(address);
};
