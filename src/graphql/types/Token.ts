export interface TokenDetailsType {
  id: string; // token address
  symbol: string; // token symbol;
  pricePerUSDNew: bigint; // price of token per USD;
}
export interface TokenResponse {
  Token: TokenDetailsType[];
}
