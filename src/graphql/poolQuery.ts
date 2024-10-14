export const LiquidityPoolNew = `
  query {
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
    totalBribesUSD
    lastUpdatedTimestamp
    token0 {
        id
        symbol
        name
        chainID
        pricePerUSDNew
    }
    token1 {
        id
        symbol
        name
        chainID
        pricePerUSDNew
    }
  }
}
`;

export const getLiquidityPoolById = `
  query ($id: String!) {
    LiquidityPoolNew(
      where: {
        id: { _eq: $id }
      }
    ) {
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

export const getLiquidityPoolBySymbols = `
  query ($symbol0: String!, $symbol1: String!, $isStable: Boolean!) {
    LiquidityPoolNew(
      where: {
        token0: { symbol: {_eq: $symbol0} },
        token1: { symbol: {_eq: $symbol1} },
        isStable: {_eq: $isStable}
      }
    ) {
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
