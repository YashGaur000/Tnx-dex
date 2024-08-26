import ImpIcon from '../../../../assets/Tips.svg';
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
  TitleWrapper,
} from '../styles/LiquidityTable.style';
import { GradientButton } from '../../../common';
import { useNavigate } from 'react-router-dom';
import {
  LiquidityTitle,
  StatsCardtitle,
} from '../styles/LiquidityHeroSection.style';

import { useState } from 'react';
import LiquidityInfo from './LiquidityInfo';
import { LiquidityPoolNewType } from '../../../../graphql/types/LiquidityPoolNew';
import { getTokenLogo } from '../../../../utils/getTokenLogo';
import { TableColumn, TableRow } from '../../../common/TableStyled';
// import Pool from '../../CreatePool/Modules/Pool';

const LiquidityPoolCard = ({ data }: { data: LiquidityPoolNewType }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleDepositeButton = (
    token0: string,
    token1: string,
    isStable: boolean
  ) => {
    const queryParams = new URLSearchParams(location.search);

    const tokenA = token0.split('-');
    const tokenB = token1.split('-');

    const typeValue = isStable ? '0' : '1';

    queryParams.set('token1', tokenA[0]);
    queryParams.set('token2', tokenB[0]);
    queryParams.set('type', typeValue);
    queryParams.set('exists', true.toString()); //@Todo need to handle properly and check routes of both manage and create new pool

    navigate({
      pathname: '/liquidity/manage',
      search: `?${queryParams.toString()}`,
    });
  };

  return (
    <>
      <TableRow>
        <TableColumn>
          <TokenCardContainer>
            <GroupImgContains>
              <IMG1Contains Top={10} Left={0}>
                <Imgstyle src={getTokenLogo(data.token0.symbol)} />
              </IMG1Contains>
              <IMG2Contains Top={10} Left={25}>
                <Imgstyle src={getTokenLogo(data.token1.symbol)} />
              </IMG2Contains>
            </GroupImgContains>
            <PairContain>
              <TraidingSyleLabel>
                {data.token0.symbol}-{data.token1.symbol}
              </TraidingSyleLabel>
              <TokenAmountTitle>
                <StatsCardtitle fontSize={12}>
                  {data.isStable ? 'Stable' : 'Volatile'}
                </StatsCardtitle>
                {/* <p> {data.stablePercentage}%</p>{' '} */}
                <p>{0.01} %</p>
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
                <LiquidityTitle fontSize={12}>
                  {data.totalVolumeUSD.toString()}
                </LiquidityTitle>
              </TokenAmountTitle>
            </PairContain>
          </TokenCardContainer>
        </TableColumn>
        <TableColumn>
          <AprDataWrapper>{}%</AprDataWrapper>
        </TableColumn>
        <TableColumn>
          <VolumeStyles>
            <TitleWrapper fontSize={'12px'}>
              ~$ {data.totalVolumeUSD.toString()}
            </TitleWrapper>
            <TokenAmountTitle>
              {data.totalVolume0.toString()} {data.token0.symbol}
            </TokenAmountTitle>
            <TokenAmountTitle>
              {data.totalVolume1.toString()} {data.token1.symbol}
            </TokenAmountTitle>
          </VolumeStyles>
        </TableColumn>
        <TableColumn>
          <VolumeStyles>
            <TitleWrapper fontSize={'12px'}>
              ~$ {data.totalFeesUSD.toString()}
            </TitleWrapper>
            <TokenAmountTitle>
              {data.totalFees0.toString()} {data.token0.symbol}
            </TokenAmountTitle>
            <TokenAmountTitle>
              {data.totalFees1.toString()} {data.token1.symbol}
            </TokenAmountTitle>
          </VolumeStyles>
        </TableColumn>
        <TableColumn>
          <VolumeStyles>
            <TitleWrapper fontSize={'12px'}>
              {data.reserve0.toString()} {data.token0.symbol}
            </TitleWrapper>
            {/* <TokenAmountTitle>{data.balanceDesc}</TokenAmountTitle> */}
            <TitleWrapper fontSize={'12px'}>
              {data.reserve1.toString()} {data.token1.symbol}
            </TitleWrapper>
            <div
              onClick={() =>
                handleDepositeButton(
                  data.token0.id,
                  data.token1.id,
                  data.isStable
                )
              }
            >
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
        </TableColumn>
      </TableRow>
    </>
  );
};

export default LiquidityPoolCard;
