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
  AprDataWrapper,
  SugestImgWrapper,
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
  liquidityType: string;
}
import { useState } from 'react';
import LiquidityInfo from './LiquidityInfo';

const LiquidityPoolCard: React.FC<TableProps> = ({ data }) => {
  const Navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  function handleDepositeButton() {
    const queryParams = new URLSearchParams(location.search);
    // const typeValue = poolType === 'stable' ? '0' : '1';

    //todo: update with indexer query data, interface is created in liquidity.d.ts
    const typeValue = 0;
    const token1 = '0x4200000000000000000000000000000000000023';
    const token2 = '0x66f473054828BF8D560869eF26Fb2f5Ff7D326E2';
    console.log(token1, 'liq pool card', token2, typeValue);

    queryParams.set('token1', token1);
    queryParams.set('token2', token2);
    queryParams.set('type', typeValue.toString());

    // Navigate('/liquidity/manage', { state: data });
    Navigate({
      pathname: '/liquidity/manage',
      search: `?${queryParams.toString()}`,
    });
  }

  return (
    <>
      <tr>
        <td>
          <TokenCardContainer>
            <GroupImgContains>
              <IMG1Contains Top={20} Left={0}>
                <Imgstyle src={data.icon1} />
              </IMG1Contains>
              <IMG2Contains Top={20} Left={25}>
                <Imgstyle src={data.icon2} />
              </IMG2Contains>
            </GroupImgContains>
            <PairContain>
              <TraidingSyleLabel>{data.pair}</TraidingSyleLabel>
              <TokenAmountTitle>
                <StatsCardtitle fontSize={12}>
                  {data.liquidityType}
                </StatsCardtitle>
                <p> {data.stablePercentage}%</p>{' '}
                <SugestImgWrapper
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <SuggestImg src={ImpIcon} />
                  {isHovered && <LiquidityInfo />}
                </SugestImgWrapper>
              </TokenAmountTitle>
              <TokenAmountTitle>
                <StatsCardtitle fontSize={12}>TVL</StatsCardtitle>{' '}
                <label>{data.tvl}</label>
              </TokenAmountTitle>
            </PairContain>
          </TokenCardContainer>
        </td>
        <td>
          <AprDataWrapper>{data.apr}%</AprDataWrapper>
        </td>
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
            </div>
          </VolumeStyles>
        </td>
      </tr>
    </>
  );
};

export default LiquidityPoolCard;
