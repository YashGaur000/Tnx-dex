import ImpImage from '../../../../assets/information.png';

import { GradientButton } from '../../../common';
import { useNavigate } from 'react-router-dom';
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
import { useLiquidityStore } from '../../../../store/slices/liquiditySlice';

interface PoolProps {
  poolType: string;
}

const Pool: React.FC<PoolProps> = ({ poolType }) => {
  const Navigate = useNavigate();
  const { selectedToken1, selectedToken2, setPoolType } = useLiquidityStore();
  console.log('token1:', selectedToken1, 'token2:', selectedToken2);

  function handleDeposite() {
    setPoolType(poolType);
    console.log('pool type: set', poolType);
    Navigate('/liquidity/manage');
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

          <div>
            <TraidingSyleLabel>
              vAMM-{selectedToken1.symbol}/{selectedToken2.symbol}
            </TraidingSyleLabel>
            <TokenAmountTitle>
              <StatsCardtitle fontSize={12}> {poolType} </StatsCardtitle>
              <label> 0.00%</label> <SuggestImg src={ImpImage} />
            </TokenAmountTitle>
          </div>
        </PoolcardStatus>
        <Tvlstyle>
          <label>TVL</label>
          <label>0.000$</label>
        </Tvlstyle>
        <Tvlstyle>
          <label>APR</label>
          <label>0.000%</label>
        </Tvlstyle>
        <PoolButton onClick={handleDeposite}>
          <GradientButton height="40px" padding="5px" fontSize="16px">
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
