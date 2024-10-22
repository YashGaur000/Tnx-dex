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
import { useVoterContract } from '../../../../hooks/useVoterContract';
import { Address } from 'viem';
import { useLiquidityStore } from '../../../../store/slices/liquiditySlice';
// import Pool from '../../CreatePool/Modules/Pool';

const LiquidityPoolCard = ({ data }: { data: LiquidityPoolNewType }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { gauges } = useVoterContract();
  const [gaugeAddress, setGaugeAddress] = useState('');
  const { getPoolFeeById } = useLiquidityStore();
  // const tvl = parseFloat(
  //   Number(data.token0PricePerUSDNew) * Number(data.reserve0) +
  //     (Number(data.token1PricePerUSDNew) * Number(data.reserve1)).toString()
  // );
  const poolFees = Number(getPoolFeeById(data.id));

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

    queryParams.set('id', data?.id);

    navigate({
      pathname: '/liquidity/manage',
      search: `?${queryParams.toString()}`,
    });
  };

  const getGaugeAddress = async (poolId: string) => {
    setIsHovered(true);
    try {
      const gaugeAddress = await gauges(poolId as Address);
      if (gaugeAddress) setGaugeAddress(gaugeAddress);
    } catch (error) {
      console.error('Error fetching gauge:', error);
    }
  };

  return (
    <>
      <TableRow>
        <TableColumn width="260px">
          <TokenCardContainer>
            <GroupImgContains>
              <IMG1Contains top={10} left={0}>
                <Imgstyle src={getTokenLogo(data.token0.symbol)} />
              </IMG1Contains>
              <IMG2Contains top={10} left={25}>
                <Imgstyle src={getTokenLogo(data.token1.symbol)} />
              </IMG2Contains>
            </GroupImgContains>

            <PairContain>
              <TraidingSyleLabel>
                {data.token0.symbol}-{data.token1.symbol}
              </TraidingSyleLabel>
              <LiquidityTokenWrapper>
                <TokenAmountTitle>
                  <StatsCardtitle lineheight="17px" fontSize={12}>
                    {data.isStable ? 'Stable' : 'Volatile'}
                  </StatsCardtitle>
                  {/* <p> {data.stablePercentage}%</p>{' '} */}
                  <LiquidityTitle fontSize={12}>
                    {/* {data.isStable ? '0.05' : '0.3'} %  */}
                    {poolFees ? poolFees.toString() : ''}%
                  </LiquidityTitle>
                  <SugestImgWrapper
                    onMouseEnter={() => getGaugeAddress(data.id)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <SuggestImg src={ImpIcon} />
                    {isHovered && (
                      <LiquidityInfo poolId={data.id} gaugeId={gaugeAddress} />
                    )}
                  </SugestImgWrapper>
                </TokenAmountTitle>
                <TokenAmountTitle>
                  <StatsCardtitle lineheight="17px" fontSize={12}>
                    TVL
                  </StatsCardtitle>{' '}
                  <LiquidityTitle fontSize={12} textalign="right">
                    {Number(data.totalValueLocked) % 1 === 0
                      ? Number(data.totalValueLocked).toFixed(2)
                      : Number(data.totalValueLocked).toFixed(5)}
                  </LiquidityTitle>
                </TokenAmountTitle>
              </LiquidityTokenWrapper>
            </PairContain>
          </TokenCardContainer>
        </TableColumn>
        <TableColumn>
          <TableColumnWrapper>{}%</TableColumnWrapper>
        </TableColumn>
        <TableColumn>
          <TableColumnWrapper>
            <TitleWrapper fontSize={'14px'}>
              ~${' '}
              {Number(data.totalVolumeUSD) % 1 === 0
                ? Number(data.totalVolumeUSD).toFixed(2)
                : Number(data.totalVolumeUSD).toFixed(5)}
            </TitleWrapper>
            <LiquidityTokenWrapper>
              <LiquidityTitle fontSize={12} textalign="right">
                {' '}
                {Number(data.totalVolume0) % 1 === 0
                  ? Number(data.totalVolume0).toFixed(2)
                  : Number(data.totalVolume0).toFixed(5)}{' '}
                {data.token0.symbol}
              </LiquidityTitle>
              <LiquidityTitle fontSize={12} textalign="right">
                {Number(data.totalVolume0) % 1 === 0
                  ? Number(data.totalVolume1).toFixed(2)
                  : Number(data.totalVolume1).toFixed(5)}{' '}
                {data.token1.symbol}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </TableColumnWrapper>
        </TableColumn>
        <TableColumn>
          <TableColumnWrapper>
            <TitleWrapper fontSize={'14px'}>
              ~${' '}
              {Number(data.totalFeesUSD) % 1 === 0
                ? Number(data.totalFeesUSD).toFixed(2)
                : Number(data.totalFeesUSD).toFixed(5)}
            </TitleWrapper>

            <LiquidityTokenWrapper>
              <LiquidityTitle fontSize={12} textalign="right">
                {Number(data.totalFees0) % 1 === 0
                  ? Number(data.totalFees0).toFixed(2)
                  : Number(data.totalFees0).toFixed(5)}{' '}
                {data.token0.symbol}
              </LiquidityTitle>
              <LiquidityTitle fontSize={12} textalign="right">
                {Number(data.totalFees1) % 1 === 0
                  ? Number(data.totalFees1).toFixed(2)
                  : Number(data.totalFees1).toFixed(5)}{' '}
                {data.token1.symbol}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </TableColumnWrapper>
        </TableColumn>
        <TableColumn>
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
              color="#ffffff"
              padding="4px 20px"
              fontSize="12px"
              width="81px"
              height="26px"
              lineheight="0px"
              border="1.5px solid transparent"
              borderradius="8px"
              smfontsize={12}
              smmargin="0px"
            >
              Deposit
            </GradientButton>
          </DepositeButtonWrapper>
          <LiquidityTokenWrapper>
            <LiquidityTitle
              fontSize={12}
              lineheight="17.94px"
              textalign="right"
            >
              {Number(data.reserve0) % 1 === 0
                ? Number(data.reserve0).toFixed(2)
                : Number(data.reserve0).toFixed(5)}{' '}
              {data.token0.symbol}
            </LiquidityTitle>
            {/* <TokenAmountTitle>{data.balanceDesc}</TokenAmountTitle> */}
            <LiquidityTitle
              fontSize={12}
              lineheight="17.94px"
              textalign="right"
            >
              {Number(data.reserve1) % 1 === 0
                ? Number(data.reserve1).toFixed(2)
                : Number(data.reserve1).toFixed(5)}{' '}
              {data.token1.symbol}
            </LiquidityTitle>
          </LiquidityTokenWrapper>
        </TableColumn>
      </TableRow>
    </>
  );
};

export default LiquidityPoolCard;
