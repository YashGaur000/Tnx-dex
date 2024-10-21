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
import { usePoolBalances } from '../../../../hooks/usePoolBalances';
import { usePoolFactoryContract } from '../../../../hooks/usePoolFactoryContract';
import { useEffect, useState } from 'react';

const TokenDeposite = () => {
  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  const poolId = getParam('id');
  const poolType = getParam('type') === '0' ? 'stable' : 'volatile';
  const [fees, setFees] = useState(0);

  // Fetch balances from pool contract
  const { balance0, balance1, reserve0, reserve1 } = usePoolBalances(
    poolId ?? '',
    selectedToken1?.decimals ?? 18,
    selectedToken2?.decimals ?? 18
  );

  const { getFee } = usePoolFactoryContract();

  useEffect(() => {
    const type = getParam('type') === '0' ? true : false;

    if (poolId) {
      try {
        getFee(poolId, type)
          .then((fees) => {
            if (fees) setFees(fees);
          })
          .catch((error) => {
            console.error('Error fetching fees:', error);
          });
      } catch (error) {
        console.error('Error in getFee:', error);
      }
    }
  }, [poolId]);

  if (selectedToken1 && selectedToken2) {
    return (
      <LiquidityCardSection>
        <DepositeContentWrapper>
          <DepositeTokenWithImage>
            <GroupImgContains>
              <IMG1Contains top={5} left={0}>
                <Imgstyle src={selectedToken1.logoURI} />
              </IMG1Contains>
              <IMG2Contains top={5} left={26}>
                <Imgstyle src={selectedToken2.logoURI} />
              </IMG2Contains>
            </GroupImgContains>

            <TokenDescription>
              <LiquidityHeaderTitle fontSize={16}>
                {selectedToken1.symbol}-{selectedToken2.symbol}
              </LiquidityHeaderTitle>
              <TokenStatus>
                <StatsCardtitle fontSize={12}>{poolType}</StatsCardtitle>
                <LiquidityTitle fontSize={12}>
                  {' '}
                  {fees ? fees : ''} %
                </LiquidityTitle>
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
                {Number(reserve0) % 1 === 0
                  ? Number(reserve0).toFixed(2)
                  : Number(reserve0).toFixed(5)}{' '}
                {selectedToken1.symbol}
              </LiquidityTitle>
              <LiquidityTitle fontSize={12}>
                {Number(reserve1) % 1 === 0
                  ? Number(reserve1).toFixed(2)
                  : Number(reserve1).toFixed(5)}{' '}
                {selectedToken2.symbol}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </LiquidityStyleContainer>

          <DepositeStyle>
            <LiquidityHeaderTitle fontSize={16}>
              Your Deposits
            </LiquidityHeaderTitle>
            <LiquidityTokenWrapper>
              <LiquidityTitle textalign="right" fontSize={12}>
                {Number(balance0) % 1 === 0
                  ? Number(balance0).toFixed(2)
                  : Number(balance0).toFixed(5)}{' '}
                {selectedToken1.symbol}
              </LiquidityTitle>
              <LiquidityTitle textalign="right" fontSize={12}>
                {Number(balance1) % 1 === 0
                  ? Number(balance1).toFixed(2)
                  : Number(balance1).toFixed(5)}{' '}
                {selectedToken2.symbol}
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
