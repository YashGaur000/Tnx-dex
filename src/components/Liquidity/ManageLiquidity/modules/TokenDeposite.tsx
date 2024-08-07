import GroupTokenIcon from '../../../../assets/Groupcoin.png';
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
  ImgTokenIcon,
  LiquidityCardSection,
  LiquidityStyleContainer,
  TokenContainer,
  TokenDescription,
  TokenStatus,
} from '../styles/TokenDeposite.style';

const TokenDeposite = () => {
  return (
    <LiquidityCardSection>
      <DepositeContentWrapper>
        <DepositeTokenWithImage>
          <ImgTokenIcon src={GroupTokenIcon} />

          <TokenDescription>
            <LiquidityHeaderTitle fontSize={20}>USDT-FTM</LiquidityHeaderTitle>
            <TokenStatus>
              <StatsCardtitle fontSize={12}>stable</StatsCardtitle>
              <label>0.01%</label>
              <LiquidityImgStyle width={'15'} height={'15'} src={InformIcon} />
            </TokenStatus>
          </TokenDescription>
        </DepositeTokenWithImage>
        <TokenContainer>
          <StatsCardtitle fontSize={16}>APR</StatsCardtitle>
          <p>226.18%</p>
        </TokenContainer>
      </DepositeContentWrapper>
      <DepositeContentWrapper>
        <LiquidityStyleContainer>
          <LiquidityHeaderTitle fontSize={16}>Liquidity</LiquidityHeaderTitle>
          <LiquidityTitle fontSize={12}>
            1,003,212.5643 <span>USDT</span>
          </LiquidityTitle>
          <LiquidityTitle fontSize={12}>
            2,783,860.003 <span>FTM</span>
          </LiquidityTitle>
        </LiquidityStyleContainer>
        <DepositeStyle>
          <LiquidityHeaderTitle fontSize={16}>
            Your Deposits
          </LiquidityHeaderTitle>
          <LiquidityTitle fontSize={12}>0.0 USDT</LiquidityTitle>
          <LiquidityTitle fontSize={12}>0.0 FTM</LiquidityTitle>
        </DepositeStyle>
      </DepositeContentWrapper>
    </LiquidityCardSection>
  );
};

export default TokenDeposite;
