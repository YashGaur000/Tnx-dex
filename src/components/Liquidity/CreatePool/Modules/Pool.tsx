import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImpImage from '../../../../assets/information.png';
import { GradientButton } from '../../../common';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
  SuggestImg,
  TokenAmountTitle,
  TraidingSyleLabel,
} from '../../LiquidityHomePage/styles/LiquidityTable.style';
import { StatsCardtitle } from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  LiquidityPoolCardStyles,
  PoolcardStatus,
  PoolButton,
  Tvlstyle,
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
    queryParams.set('type', typeValue.toString());
    queryParams.set('exists', exists);
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
      : `vAMM-${selectedToken1.symbol}/${selectedToken2.symbol}`;

  const tvl = exists === 'true' ? `${poolDetails?.totalVolumeUSD} $` : '0.000$';
  const fee = poolType === 'stable' ? '0.03%' : '0.5%';

  return (
    <LiquidityPoolCardStyles>
      <PoolcardStatus>
        <GroupImgContains>
          <IMG1Contains Top={5} Left={0}>
            <Imgstyle src={selectedToken1.logoURI} />
          </IMG1Contains>
          <IMG2Contains Top={5} Left={20}>
            <Imgstyle src={selectedToken2.logoURI} />
          </IMG2Contains>
        </GroupImgContains>

        <div>
          <TraidingSyleLabel>{poolName}</TraidingSyleLabel>
          <TokenAmountTitle>
            <StatsCardtitle fontSize={12}>{poolType}</StatsCardtitle>
            <label>{fee}</label>
            <SuggestImg src={ImpImage} />
          </TokenAmountTitle>
        </div>
      </PoolcardStatus>

      <Tvlstyle>
        <label>TVL</label>
        <label>{tvl}</label>
      </Tvlstyle>

      <Tvlstyle>
        <label>APR</label>
        <label>0.000%</label>
      </Tvlstyle>

      <PoolButton onClick={handleDeposit}>
        <GradientButton height="40px" padding="5px" fontSize="16px">
          Deposit
        </GradientButton>
      </PoolButton>
    </LiquidityPoolCardStyles>
  );
};

export default Pool;
