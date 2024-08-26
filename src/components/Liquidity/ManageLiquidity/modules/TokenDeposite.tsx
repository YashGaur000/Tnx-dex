import InformIcon from '../../../../assets/information.png';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import {
  LiquidityImgStyle,
  LiquidityTitle,
  StatsCardtitle,
} from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  DepositeContentWrapper,
  DepositeStyle,
  DepositeTokenWithImage,
  LiquidityCardSection,
  LiquidityStyleContainer,
  TokenContainer,
  TokenDescription,
  TokenStatus,
} from '../styles/TokenDeposite.style';
//import { useLocation } from 'react-router-dom';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../LiquidityHomePage/styles/LiquidityTable.style';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import { useLiquidityPoolData } from '../../../../hooks/useLiquidityPoolData';

const TokenDeposite = () => {
  //const location = useLocation();
  // const obj: PoolDataProps =
  //   (location.state as PoolDataProps) || ({} as PoolDataProps);

  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  const poolType = getParam('type') == '0' ? 'stable' : 'volatile';

  const { loading, error, data: poolData } = useLiquidityPoolData();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // @todo : check if this query is possible to integrate in gql itself
  const poolDetails = poolData.filter((item) => {
    const type = poolType == 'stable' ? true : false;
    if (
      (item.token0.symbol === selectedToken1?.symbol &&
        item.token1.symbol === selectedToken2?.symbol) ||
      (item.token1.symbol === selectedToken1?.symbol &&
        item.token0.symbol === selectedToken2?.symbol &&
        item.isStable == type)
    ) {
      return item;
    }
  });

  console.log(poolDetails[0].reserve0, poolDetails[0].reserve0);

  if (selectedToken1 && selectedToken2) {
    return (
      <LiquidityCardSection>
        <DepositeContentWrapper>
          <DepositeTokenWithImage>
            <GroupImgContains>
              <IMG1Contains Top={5} Left={0}>
                <Imgstyle
                  src={selectedToken1.logoURI}
                  // {obj.icon1}
                />
              </IMG1Contains>
              <IMG2Contains Top={5} Left={26}>
                <Imgstyle
                  src={selectedToken2.logoURI}
                  // {obj.icon2}
                />
              </IMG2Contains>
            </GroupImgContains>

            <TokenDescription>
              <LiquidityHeaderTitle fontSize={20}>
                {/* {obj.pair} */}
                {selectedToken1.symbol}-{selectedToken2.symbol}
              </LiquidityHeaderTitle>
              <TokenStatus>
                <StatsCardtitle fontSize={12}>
                  {/* {obj.liquidityType} */}
                  {poolType}
                </StatsCardtitle>
                {/* <label>0.01%{obj.stablePercentage}</label> */}
                <label>0.01%</label>
                <LiquidityImgStyle
                  width={'15'}
                  height={'15'}
                  src={InformIcon}
                />
              </TokenStatus>
            </TokenDescription>
          </DepositeTokenWithImage>

          <TokenContainer>
            <StatsCardtitle fontSize={16}>APR</StatsCardtitle>
            {/* <p>{obj.apr}</p> */}
          </TokenContainer>
        </DepositeContentWrapper>

        <DepositeContentWrapper>
          <LiquidityStyleContainer>
            <LiquidityHeaderTitle fontSize={16}>Liquidity</LiquidityHeaderTitle>
            <LiquidityTitle fontSize={12}>
              {/* {obj.feesDesc}*/} {poolDetails[0].reserve0}{' '}
              {selectedToken1.symbol}
            </LiquidityTitle>
            <LiquidityTitle fontSize={12}>
              {/* {obj.feesSubDesc}*/} {poolDetails[0].reserve1}{' '}
              {selectedToken2.symbol}
            </LiquidityTitle>
          </LiquidityStyleContainer>

          <DepositeStyle>
            <LiquidityHeaderTitle fontSize={16}>
              Your Deposits
            </LiquidityHeaderTitle>
            <LiquidityTitle fontSize={12}>
              {/* {obj.balanceDesc} */}
              {selectedToken1.symbol}
            </LiquidityTitle>
            <LiquidityTitle fontSize={12}>
              {/* {obj.volumeSubDesc} */}
              {selectedToken2.symbol}
            </LiquidityTitle>
          </DepositeStyle>
        </DepositeContentWrapper>
      </LiquidityCardSection>
    );
  } else {
    return (
      <>
        <h3>Error: Please select tokens</h3>
      </>
    );
  }
};

export default TokenDeposite;
