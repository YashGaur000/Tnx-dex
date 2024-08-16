export const LiquidityPoolNew = `
  query  {
  LiquidityPoolNew {
    id
    name
    isStable
    reserve0
    reserve1
    totalVolume0
    totalVolume1
    totalVolumeUSD
    totalFees0
    totalFees1
    totalFeesUSD
    token0 {
        id
        symbol
    }
    token1 {
        id
        symbol
    }
  }
}
`;
