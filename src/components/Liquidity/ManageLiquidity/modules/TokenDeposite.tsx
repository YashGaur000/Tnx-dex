import InformIcon from '../../../../assets/Tips.svg';
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
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
  LiquidityTokenWrapper,
} from '../../LiquidityHomePage/styles/LiquidityTable.style';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import { usePoolContract } from '../../../../hooks/usePoolContract';

const TokenDeposite = () => {
  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  const poolId = getParam('id');
  const poolType = getParam('type') === '0' ? 'stable' : 'volatile';

  // Fetch balances from pool contract
  const { balance0, balance1, reserve0, reserve1 } = usePoolContract(
    poolId ?? '',
    selectedToken1?.decimals ?? 18,
    selectedToken2?.decimals ?? 18
  );

  if (selectedToken1 && selectedToken2) {
    return (
      <LiquidityCardSection>
        <DepositeContentWrapper>
          <DepositeTokenWithImage>
            <GroupImgContains>
              <IMG1Contains Top={5} Left={0}>
                <Imgstyle src={selectedToken1.logoURI} />
              </IMG1Contains>
              <IMG2Contains Top={5} Left={26}>
                <Imgstyle src={selectedToken2.logoURI} />
              </IMG2Contains>
            </GroupImgContains>

            <TokenDescription>
              <LiquidityHeaderTitle fontSize={16}>
                {selectedToken1.symbol}-{selectedToken2.symbol}
              </LiquidityHeaderTitle>
              <TokenStatus>
                <StatsCardtitle fontSize={12}>{poolType}</StatsCardtitle>
                <LiquidityTitle fontSize={12}>0.01%</LiquidityTitle>
                <LiquidityImgStyle
                  width={'18px'}
                  height={'18px'}
                  src={InformIcon}
                />
              </TokenStatus>
            </TokenDescription>
          </DepositeTokenWithImage>

          <TokenContainer>
            <StatsCardtitle fontSize={16}>APR</StatsCardtitle>
            <LiquidityHeaderTitle fontSize={14}>{''}</LiquidityHeaderTitle>
          </TokenContainer>
        </DepositeContentWrapper>

        <DepositeContentWrapper>
          <LiquidityStyleContainer>
            <LiquidityHeaderTitle fontSize={16}>Liquidity</LiquidityHeaderTitle>

            <LiquidityTokenWrapper>
              <LiquidityTitle fontSize={12}>
                {reserve0} {selectedToken1.symbol}
              </LiquidityTitle>
              <LiquidityTitle fontSize={12}>
                {reserve1} {selectedToken2.symbol}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </LiquidityStyleContainer>

          <DepositeStyle>
            <LiquidityHeaderTitle fontSize={16}>
              Your Deposits
            </LiquidityHeaderTitle>
            <LiquidityTokenWrapper>
              <LiquidityTitle fontSize={12}>
                {balance0} {selectedToken1.symbol}
              </LiquidityTitle>
              <LiquidityTitle fontSize={12}>
                {balance1} {selectedToken2.symbol}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
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
