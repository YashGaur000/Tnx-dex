import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImpImage from '../../../../assets/Tips.svg';
import { GradientButton } from '../../../common';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
  SuggestImg,
  TitleWrapper,
  TokenAmountTitle,
  TraidingSyleLabel,
} from '../../LiquidityHomePage/styles/LiquidityTable.style';
import {
  LiquidityTitle,
  StatsCardtitle,
} from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  LiquidityPoolCardStyles,
  PoolcardStatus,
  PoolButton,
  Tvlstyle,
  TokenPairWrapper,
} from '../Styles/PoolCard.style';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import { LiquidityPoolNewType } from '../../../../graphql/types/LiquidityPoolNew';

interface PoolProps {
  poolDetails?: LiquidityPoolNewType;
  poolType: string;
  exists: string;
}

const Pool: React.FC<PoolProps> = ({ poolDetails, poolType, exists }) => {
  const Navigate = useNavigate();
  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  const isStablePool = poolDetails?.isStable;

  poolType =
    exists === 'true' ? (isStablePool ? 'stable' : 'volatile') : poolType;

  const handleDeposit = () => {
    const queryParams = new URLSearchParams(location.search);

    const typeValue = poolType === 'stable' ? '0' : '1';
    if (poolDetails) {
      queryParams.set('token1', poolDetails.token0.id.replace(/-\S*$/, '')); // to handle the reversal of token0 with the available pool
      queryParams.set('token2', poolDetails.token1.id.replace(/-\S*$/, '')); // to handle the reversal of token1 with the available pool
    }
    queryParams.set('type', typeValue.toString());
    queryParams.set('exists', exists);
    if (exists == 'true' && poolDetails) queryParams.set('id', poolDetails?.id);
    Navigate({
      pathname: '/liquidity/manage',
      search: `?${queryParams.toString()}`,
    });
  };

  if (!selectedToken1 || !selectedToken2) {
    return <h3>Error: Please select a token</h3>;
  }

  const poolName =
    exists === 'true'
      ? poolDetails?.name
      : `${poolType === 'stable' ? 'Stable ' : 'Volatile '}AMM-${selectedToken1.symbol}/${selectedToken2.symbol}`;

  const tvl = exists === 'true' ? `${poolDetails?.totalVolumeUSD} $` : '0.000$';
  const fee = poolType === 'stable' ? '0.03%' : '0.5%';

  return (
    <LiquidityPoolCardStyles>
      <PoolcardStatus>
        <GroupImgContains>
          <IMG1Contains top={5} left={0}>
            <Imgstyle src={selectedToken1.logoURI} />
          </IMG1Contains>
          <IMG2Contains top={5} left={20}>
            <Imgstyle src={selectedToken2.logoURI} />
          </IMG2Contains>
        </GroupImgContains>

        <TokenPairWrapper>
          <TraidingSyleLabel>{poolName}</TraidingSyleLabel>
          <TokenAmountTitle>
            <StatsCardtitle fontsize={12}>{poolType}</StatsCardtitle>
            <LiquidityTitle fontsize={12}>{fee}</LiquidityTitle>
            <SuggestImg src={ImpImage} />
          </TokenAmountTitle>
        </TokenPairWrapper>
      </PoolcardStatus>

      <Tvlstyle>
        <TitleWrapper fontsize="14px">TVL</TitleWrapper>
        <TitleWrapper fontsize="14px">{tvl}</TitleWrapper>
      </Tvlstyle>

      <Tvlstyle>
        <TitleWrapper fontsize="14px">APR</TitleWrapper>
        <TitleWrapper fontsize="14px">0.000%</TitleWrapper>
      </Tvlstyle>

      <PoolButton onClick={handleDeposit}>
        <GradientButton
          borderradius="8px"
          color="#ffffff"
          padding="4px 16px"
          lineheight="17.94px"
          border="1px solid transparent"
          fontsize="12"
          width="80px"
          height="26px"
          smfontsize={12}
          smmargin="0px"
        >
          Deposit
        </GradientButton>
      </PoolButton>
    </LiquidityPoolCardStyles>
  );
};

export default Pool;
