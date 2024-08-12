import { ERC20_TEST_TOKEN_LIST, TokenInfo } from '../constants/tokens';

export function findTokenByAddress(address: string): TokenInfo | undefined {
  return ERC20_TEST_TOKEN_LIST.find(
    (token) => token.address.toLowerCase() === address.toLowerCase()
  );
}

export const useTokenInfo = (address: string | null) => {
  if (!address) return undefined;
  return findTokenByAddress(address);
};
