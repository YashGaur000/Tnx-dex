import BitCoinIcon from '../../../../assets/bitCoin.png';
import UdstIcon from '../../../../assets/usdt.png';
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

const Pool = () => {
  const Navigate = useNavigate();
  function handleDeposite() {
    Navigate('/liquidity/manage');
  }
  return (
    <LiquidityPoolCardStyles>
      <PoolcardStatus>
        <GroupImgContains>
          <IMG1Contains Top={5} Left={0}>
            <Imgstyle src={BitCoinIcon} />
          </IMG1Contains>
          <IMG2Contains Top={5} Left={20}>
            <Imgstyle src={UdstIcon} />
          </IMG2Contains>
        </GroupImgContains>

        <div>
          <TraidingSyleLabel>vAMM-USDT/BTC</TraidingSyleLabel>
          <TokenAmountTitle>
            <StatsCardtitle fontSize={12}> stable </StatsCardtitle>
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
};

export default Pool;
