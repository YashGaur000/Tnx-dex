import ImpIcon from '../../../../assets/information.png';
import {
  TokenCardContainer,
  GroupImgContains,
  IMG2Contains,
  IMG1Contains,
  Imgstyle,
  PairContain,
  TraidingSyleLabel,
  VolumeStyles,
  SuggestImg,
  TokenAmountTitle,
} from '../styles/LiquidityTable.style';
import { GradientButton } from '../../../common';
import { useNavigate } from 'react-router-dom';
import { StatsCardtitle } from '../styles/LiquidityHeroSection.style';
interface TableProps {
  data: DataProps;
}
interface DataProps {
  id: string;
  pair: string;
  icon1: string;
  icon2: string;
  stablePercentage: number;
  tvl: string;
  apr: number;
  volume: string;
  volumeDesc: string;
  volumeSubDesc: string;
  fees: string;
  feesDesc: string;
  feesSubDesc: string;
  poolBalance: string;
  balanceDesc: string;
}

const LiquidityPoolCard: React.FC<TableProps> = ({ data }) => {
  const Navigate = useNavigate();
  function handleDepositeButton() {
    Navigate('/liquidity/manage');
  }

  return (
    <tr>
      <td>
        <TokenCardContainer>
          <GroupImgContains>
            <IMG1Contains Top={20} Left={0}>
              <Imgstyle src={data.icon1} />
            </IMG1Contains>
            <IMG2Contains Top={20} Left={20}>
              <Imgstyle src={data.icon2} />
            </IMG2Contains>
          </GroupImgContains>
          <PairContain>
            <TraidingSyleLabel>{data.pair}</TraidingSyleLabel>
            <TokenAmountTitle>
              <StatsCardtitle fontSize={12}>Stable</StatsCardtitle>{' '}
              {data.stablePercentage}% <SuggestImg src={ImpIcon} />
            </TokenAmountTitle>
            <TokenAmountTitle>
              <StatsCardtitle fontSize={12}>TVL</StatsCardtitle>{' '}
              <label>{data.tvl}</label>
            </TokenAmountTitle>
          </PairContain>
        </TokenCardContainer>
      </td>
      <td>{data.apr}%</td>
      <td>
        <VolumeStyles>
          <label>{data.volume}</label>
          <TokenAmountTitle>{data.volumeDesc}</TokenAmountTitle>
          <TokenAmountTitle>{data.volumeSubDesc}</TokenAmountTitle>
        </VolumeStyles>
      </td>
      <td>
        <VolumeStyles>
          <label>{data.fees}</label>
          <TokenAmountTitle>{data.feesDesc}</TokenAmountTitle>
          <TokenAmountTitle>{data.feesSubDesc}</TokenAmountTitle>
        </VolumeStyles>
      </td>
      <td>
        <VolumeStyles>
          <label>{data.poolBalance}</label>
          <TokenAmountTitle>{data.balanceDesc}</TokenAmountTitle>
          <div onClick={handleDepositeButton}>
            <GradientButton
              width="90px"
              fontSize="13px"
              padding="0px 5px"
              marginTop="10px"
            >
              Deposit
            </GradientButton>
          </div>
        </VolumeStyles>
      </td>
    </tr>
  );
};

export default LiquidityPoolCard;
