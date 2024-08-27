import { ERC20_TEST_TOKEN_LIST } from '../constants/tokens';

export const getTokenLogo = (symbol: string) => {
  const token = ERC20_TEST_TOKEN_LIST.find((token) => token.symbol === symbol);
  return token ? token.logoURI : '';
};
