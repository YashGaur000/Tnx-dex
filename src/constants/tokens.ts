export interface TokenInfo {
  readonly chainId: number;
  readonly address: string;
  readonly name: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoURI?: string;
}

export const TOKEN_LIST: TokenInfo[] = [
  {
    name: 'Wrapped Ether',
    symbol: 'WETH',
    decimals: 18,
    address: '0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa',
    chainId: 1,
    logoURI: '',
  },
  {
    name: 'USDCoin',
    symbol: 'USDC',
    decimals: 6,
    address: '0x51fCe89b9f6D4c530698f181167043e1bB4abf89',
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
];
