import ImpImage from '../../../../assets/Tips.svg';

import { GradientButton } from '../../../common';
import { useNavigate } from 'react-router-dom';
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

interface PoolProps {
  poolType: string;
  exists: string;
}

const Pool: React.FC<PoolProps> = ({ poolType, exists }) => {
  const Navigate = useNavigate();

  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  // const poolType = getParam('type') ? 'stable' : 'volatile';

  function handleDeposite() {
    const queryParams = new URLSearchParams(location.search);

    const typeValue = poolType === 'stable' ? '0' : '1';
    queryParams.set('type', typeValue.toString());
    queryParams.set('exists', exists);
    // Navigate('/liquidity/manage');
    Navigate({
      pathname: '/liquidity/manage',
      search: `?${queryParams.toString()}`,
    });
  }

  if (selectedToken1 && selectedToken2) {
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

          <TokenPairWrapper>
            <TraidingSyleLabel>
              vAMM-{selectedToken1.symbol}/{selectedToken2.symbol}
            </TraidingSyleLabel>
            <TokenAmountTitle>
              <StatsCardtitle fontSize={12}> {poolType} </StatsCardtitle>
              <LiquidityTitle fontSize={14}> 0.00%</LiquidityTitle>{' '}
              <SuggestImg src={ImpImage} />
            </TokenAmountTitle>
          </TokenPairWrapper>
        </PoolcardStatus>
        <Tvlstyle>
          <TitleWrapper fontSize="14px">TVL</TitleWrapper>
          <TitleWrapper fontSize="14px">0.000$</TitleWrapper>
        </Tvlstyle>
        <Tvlstyle>
          <TitleWrapper fontSize="14px">APR</TitleWrapper>
          <TitleWrapper fontSize="14px">0.000%</TitleWrapper>
        </Tvlstyle>
        <PoolButton onClick={handleDeposite}>
          <GradientButton
            borderRadius="8px"
            color="#ffffff"
            padding="0px 20px 30px"
            border="1px solid transparent"
            fontSize="12"
            width="86"
            height="26px"
          >
            Deposit
          </GradientButton>
        </PoolButton>
      </LiquidityPoolCardStyles>
    );
  } else {
    return (
      <>
        <h3>Error: Please select a token</h3>
      </>
    );
  }
};

export default Pool;
