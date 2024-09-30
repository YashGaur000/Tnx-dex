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
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';
import { getTokenLogo } from '../../../utils/getTokenLogo';
import { useState } from 'react';
import { SelectedButtonWrapper } from '../styles/VoteSelectedCard.style';
import SelectedIcon from '../../../assets/Selected.svg';

import VoteButtonHover from './VoteButtonHover';

interface VotingPoolCardProps {
  data: LiquidityPoolNewType;
  handleSelectPool: (isSelected: boolean) => void;
  islock: boolean;
}

const VotingPoolCard: React.FC<VotingPoolCardProps> = ({
  data,
  handleSelectPool,
  islock,
}) => {
  const [isSelectCardOpen, setSelectCardOpen] = useState<boolean>(false);
  const [isHoverPopUpshow, setHoverPopUpShow] = useState<boolean>(false);

  const handleVote = () => {
    if (islock) {
      const newState = !isSelectCardOpen;

      setSelectCardOpen(newState);
      handleSelectPool(newState);
    } else setHoverPopUpShow(true);
  };

  const handleHoverHide = () => {
    setHoverPopUpShow(false);
  };

  return (
    <>
      <TableRow>
        <TableColumn>
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

                  <LiquidityTitle fontSize={12}>{0.01} %</LiquidityTitle>
                  <SugestImgWrapper>
                    <SuggestImg src={ImpIcon} />
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
                    {data.totalVolumeUSD.toString()}
                  </LiquidityTitle>
                </TokenAmountTitle>
              </LiquidityTokenWrapper>
            </PairContain>
          </TokenCardContainer>
        </TableColumn>
        <TableColumn>
          <TableColumnWrapper height="96px">
            <Title fontSize={14}> ~$ {data.totalFeesUSD.toString()}</Title>
            <LiquidityTokenWrapper>
              <LiquidityTitle fontSize={12} textalign="right">
                {data.totalFees0.toString()} {data.token0.symbol}
              </LiquidityTitle>
              <LiquidityTitle fontSize={12} textalign="right">
                {data.totalFees1.toString()} {data.token1.symbol}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </TableColumnWrapper>
        </TableColumn>

        <TableColumn>
          <TableColumnWrapper height="96px">
            <Title fontSize={14}>
              {'~$ ' + data.totalBribesUSD.toString()}
            </Title>
            <LiquidityTokenWrapper>
              <LiquidityTitle
                fontSize={12}
                textalign="right"
                textdecoration="underline"
              >
                {'Add incentives'}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </TableColumnWrapper>
        </TableColumn>

        <TableColumn>
          <TableColumnWrapper height="96px">
            <Title fontSize={14}>
              ~${' '}
              {Number(data.totalBribesUSD.toString()) +
                Number(data.totalFeesUSD.toString())}
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
            <SelectedButtonWrapper onClick={handleVote}>
              <GradientButton
                color="#ffffff"
                padding="4px 10px"
                fontSize="12px"
                width="auto"
                height="26px"
                lineheight="0px"
                border="1.5px solid transparent"
                borderradius="8px"
                smfontSize={12}
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
              <PopupWrapper onMouseLeave={handleHoverHide}>
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
