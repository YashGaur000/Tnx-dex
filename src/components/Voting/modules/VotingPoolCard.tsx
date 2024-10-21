import ImpIcon from '../../../assets/Tips.svg';
import {
  TableColumn,
  TableColumnWrapper,
  TableRow,
} from '../../common/TableStyled';
import {
  LiquidityTitle,
  PopupWrapper,
  StatsCardtitle,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  LiquidityTokenWrapper,
  SugestImgWrapper,
  SuggestImg,
  TokenAmountTitle,
  TokenCardContainer,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';

import ArrowIcon from '../../../assets/arrow.svg';
import {
  Img,
  Imgstyle,
  Label,
  PairContain,
  TooltipContainer,
  TraidingSyleLabel,
} from '../styles/VotingPoolCard.style';
import { ImageContainer } from '../../ManageVeTenex/Styles/ManageVetenex.style';
import { GradientButton } from '../../common';
import { Title } from '../styles/VotingBanner.style';

import { getTokenLogo } from '../../../utils/getTokenLogo';

import { SelectedButtonWrapper } from '../styles/VoteSelectedCard.style';
import SelectedIcon from '../../../assets/Selected.svg';

import VoteButtonHover from './VoteButtonHover';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLiquidityStore } from '../../../store/slices/liquiditySlice';
import LiquidityInfo from '../../Liquidity/LiquidityHomePage/Modules/LiquidityInfo';
import { VoteDataType } from '../../../types/VoteData';

interface VotingPoolCardProps {
  data: VoteDataType;

  islock: boolean;
  handleSelectButton: (data: VoteDataType) => void;
  isSelectCardOpen: boolean;
}

const VotingPoolCard: React.FC<VotingPoolCardProps> = ({
  data,
  handleSelectButton,
  islock,
  isSelectCardOpen,
}) => {
  const [isHoverPopUpshow, setHoverPopUpShow] = useState(false);

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const { getPoolFeeById } = useLiquidityStore();
  const handleIncentive = (poolId: string) => {
    navigate('/incentives?pool=' + poolId);
  };

  const poolFees = Number(getPoolFeeById(data.id));
  return (
    <>
      <TableRow>
        <TableColumn width="330px">
          <TokenCardContainer height={96}>
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

                  <LiquidityTitle fontSize={12}>
                    {poolFees ? poolFees.toString() : ''} %
                  </LiquidityTitle>
                  <SugestImgWrapper
                    onMouseEnter={() => {
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <SuggestImg src={ImpIcon} />
                    {isHovered && (
                      <LiquidityInfo poolId={data.id} gaugeId={data.gauge} />
                    )}
                  </SugestImgWrapper>
                </TokenAmountTitle>
                <TokenAmountTitle>
                  <StatsCardtitle lineheight="17px" fontSize={12}>
                    Votes
                  </StatsCardtitle>{' '}
                  <LiquidityTitle fontSize={12} textalign="right">
                    8,428,176.46
                  </LiquidityTitle>
                  <ImageContainer src={ArrowIcon} width="12px" height="10px" />
                  <LiquidityTitle fontSize={12} textalign="right">
                    8,428,176.4
                  </LiquidityTitle>
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
          <TableColumnWrapper height="96px">
            <Title fontSize={14}>
              {' '}
              ~${' '}
              {Number(data.totalFeesUSD) % 1 === 0
                ? Number(data.totalFeesUSD).toFixed(2)
                : Number(data.totalFeesUSD).toFixed(5)}
            </Title>
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
          <TableColumnWrapper height="96px">
            <Title fontSize={14}>
              {'$ '}
              {Number(data.totalBribesUSD) == 0
                ? '0.00'
                : data.totalBribesUSD.toString()}
            </Title>
            <LiquidityTokenWrapper>
              {Number(data.totalBribesUSD) <= 0 && (
                <LiquidityTitle
                  fontSize={12}
                  textalign="right"
                  pointer="pointer"
                  textDecoration="underline"
                  onClick={() => handleIncentive(data.id)}
                >
                  {'Add incentives'}
                </LiquidityTitle>
              )}
            </LiquidityTokenWrapper>
          </TableColumnWrapper>
        </TableColumn>

        <TableColumn>
          <TableColumnWrapper height="96px">
            <Title fontSize={14}>
              ~${' '}
              {(Number(data.totalBribesUSD) + Number(data.totalFeesUSD)) % 1 ===
              0
                ? (
                    Number(data.totalBribesUSD) + Number(data.totalFeesUSD)
                  ).toFixed(2)
                : (
                    Number(data.totalBribesUSD) + Number(data.totalFeesUSD)
                  ).toFixed(5)}
            </Title>
            <LiquidityTokenWrapper>
              <LiquidityTitle fontSize={12} textalign="right">
                {'Fees + Incentives'}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </TableColumnWrapper>
        </TableColumn>

        <TableColumn padding="0px">
          <TableColumnWrapper height="96px">
            <TooltipContainer>
              <Title fontSize={14}>
                {'226.18%'} <Img src={ImpIcon} />
              </Title>
            </TooltipContainer>
            <Label>{}</Label>
          </TableColumnWrapper>
        </TableColumn>

        <TableColumn padding="5px">
          <TableColumnWrapper height="95px">
            <SelectedButtonWrapper
              onClick={
                islock
                  ? () => handleSelectButton(data)
                  : () => setHoverPopUpShow(!isHoverPopUpshow)
              }
            >
              <GradientButton
                color="#ffffff"
                padding="4px 10px"
                fontSize="12px"
                width="auto"
                height="26px"
                lineheight="0px"
                border="1.5px solid transparent"
                borderradius="8px"
                smfontsize={12}
                smmargin="0px"
              >
                {!islock ? (
                  <>Vote</>
                ) : (
                  <>
                    {isSelectCardOpen ? (
                      <>
                        Selected
                        <ImageContainer
                          width="10px"
                          height="10px"
                          margin="0px 0px 0px 5px"
                          src={SelectedIcon}
                        />
                      </>
                    ) : (
                      'Select'
                    )}
                  </>
                )}
              </GradientButton>
              <PopupWrapper>
                {!islock && isHoverPopUpshow && <VoteButtonHover />}
              </PopupWrapper>
            </SelectedButtonWrapper>
          </TableColumnWrapper>
        </TableColumn>
      </TableRow>
    </>
  );
};

export default VotingPoolCard;
