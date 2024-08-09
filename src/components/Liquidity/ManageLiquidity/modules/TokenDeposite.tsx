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
import { useLocation } from 'react-router-dom';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../LiquidityHomePage/styles/LiquidityTable.style';
import { PoolDataProps } from '../../LiquidityHomePage/Modules/LiquidityPool';

const TokenDeposite = () => {
  const location = useLocation();
  const obj: PoolDataProps =
    (location.state as PoolDataProps) || ({} as PoolDataProps);

  return (
    <LiquidityCardSection>
      <DepositeContentWrapper>
        <DepositeTokenWithImage>
          <GroupImgContains>
            <IMG1Contains Top={5} Left={0}>
              <Imgstyle src={obj.icon1} />
            </IMG1Contains>
            <IMG2Contains Top={5} Left={26}>
              <Imgstyle src={obj.icon2} />
            </IMG2Contains>
          </GroupImgContains>

          <TokenDescription>
            <LiquidityHeaderTitle fontSize={20}>
              {obj.pair}
            </LiquidityHeaderTitle>
            <TokenStatus>
              <StatsCardtitle fontSize={12}>{obj.liquidityType}</StatsCardtitle>
              <label>{obj.stablePercentage}</label>
              <LiquidityImgStyle width={'15'} height={'15'} src={InformIcon} />
            </TokenStatus>
          </TokenDescription>
        </DepositeTokenWithImage>

        <TokenContainer>
          <StatsCardtitle fontSize={16}>APR</StatsCardtitle>
          <p>{obj.apr}</p>
        </TokenContainer>
      </DepositeContentWrapper>

      <DepositeContentWrapper>
        <LiquidityStyleContainer>
          <LiquidityHeaderTitle fontSize={16}>Liquidity</LiquidityHeaderTitle>
          <LiquidityTitle fontSize={12}>
            {obj.feesDesc} <span></span>
          </LiquidityTitle>
          <LiquidityTitle fontSize={12}>
            {obj.feesSubDesc} <span></span>
          </LiquidityTitle>
        </LiquidityStyleContainer>

        <DepositeStyle>
          <LiquidityHeaderTitle fontSize={16}>
            Your Deposits
          </LiquidityHeaderTitle>
          <LiquidityTitle fontSize={12}>{obj.balanceDesc}</LiquidityTitle>
          <LiquidityTitle fontSize={12}>{obj.volumeSubDesc}</LiquidityTitle>
        </DepositeStyle>
      </DepositeContentWrapper>
    </LiquidityCardSection>
  );
};

export default TokenDeposite;
