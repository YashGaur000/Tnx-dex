import ImpIcon from '../../../../assets/Tips.svg';
import {
  TokenCardContainer,
  GroupImgContains,
  IMG2Contains,
  IMG1Contains,
  Imgstyle,
  DepositeButtonWrapper,
  PairContain,
  TraidingSyleLabel,
  LiquidityTokenWrapper,
  SuggestImg,
  TokenAmountTitle,
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
import {
  TableColumn,
  TableColumnWrapper,
  TableRow,
} from '../../../common/TableStyled';
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
          <TableColumnWrapper>{}%</TableColumnWrapper>
        </TableColumn>
        <TableColumn>
          <TableColumnWrapper>
            <TitleWrapper fontSize={'14px'}>
              ~$ {data.totalVolumeUSD.toString()}
            </TitleWrapper>
            <LiquidityTokenWrapper>
              <LiquidityTitle fontSize={12}>
                {' '}
                {data.totalVolume0.toString()} {data.token0.symbol}
              </LiquidityTitle>
              <LiquidityTitle fontSize={12}>
                {data.totalVolume1.toString()} {data.token1.symbol}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </TableColumnWrapper>
        </TableColumn>
        <TableColumn>
          <TableColumnWrapper>
            <TitleWrapper fontSize={'12px'}>
              ~$ {data.totalFeesUSD.toString()}
            </TitleWrapper>

            <LiquidityTokenWrapper>
              <LiquidityTitle fontSize={12}>
                {data.totalFees0.toString()} {data.token0.symbol}
              </LiquidityTitle>
              <LiquidityTitle fontSize={12}>
                {data.totalFees1.toString()} {data.token1.symbol}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </TableColumnWrapper>
        </TableColumn>
        <TableColumn>
          <LiquidityTokenWrapper>
            <TitleWrapper fontSize={'12px'} lineHeight="17.94px">
              {data.reserve0.toString()} {data.token0.symbol}
            </TitleWrapper>
            {/* <TokenAmountTitle>{data.balanceDesc}</TokenAmountTitle> */}
            <TitleWrapper fontSize={'12px'} lineHeight="17.94px">
              {data.reserve1.toString()} {data.token1.symbol}
            </TitleWrapper>
          </LiquidityTokenWrapper>
          <DepositeButtonWrapper
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
              padding="4px 20px"
              border="1px solid transparent"
              fontSize="12px"
              width="81px"
              height="26px"
              lineHeight="17.94px"
              smFontSize={12}
              smMargin="0px"
            >
              Deposit
            </GradientButton>
          </DepositeButtonWrapper>
        </TableColumn>
      </TableRow>
    </>
  );
};

export default LiquidityPoolCard;
