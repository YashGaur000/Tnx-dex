import ImpIcon from '../../../assets/Tips.svg';
import {
  TableColumn,
  TableColumnWrapper,
  TableRow,
} from '../../common/TableStyled';
import {
  LiquidityTitle,
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
  TooltipContent,
  TooltipText,
  TooltipTextBox,
  TooltipValue,
  TooltipValueBox,
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

interface VotingPoolCardProps {
  data: LiquidityPoolNewType;
  handleSelectPool: (isSelected: boolean) => void;
}

const VotingPoolCard: React.FC<VotingPoolCardProps> = ({
  data,
  handleSelectPool,
}) => {
  const [isSelectCardOpen, setSelectCardOpen] = useState<boolean>(false);

  const handleVote = () => {
    const newState = !isSelectCardOpen;
    setSelectCardOpen(newState);
    handleSelectPool(newState);
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
                  <StatsCardtitle lineheight="17px" fontsize={12}>
                    {data.isStable ? 'Stable' : 'Volatile'}
                  </StatsCardtitle>

                  <LiquidityTitle fontsize={12}>{0.01} %</LiquidityTitle>
                  <SugestImgWrapper>
                    <SuggestImg src={ImpIcon} />
                  </SugestImgWrapper>
                </TokenAmountTitle>
                <TokenAmountTitle>
                  <StatsCardtitle lineheight="17px" fontsize={12}>
                    Votes
                  </StatsCardtitle>{' '}
                  <LiquidityTitle fontsize={12} textalign="right">
                    8,428,176.46
                  </LiquidityTitle>
                  <ImageContainer src={ArrowIcon} width="12px" height="10px" />
                  <LiquidityTitle fontsize={12} textalign="right">
                    8,428,176.4
                  </LiquidityTitle>
                </TokenAmountTitle>
                <TokenAmountTitle>
                  <StatsCardtitle lineheight="17px" fontsize={12}>
                    TVL
                  </StatsCardtitle>{' '}
                  <LiquidityTitle fontsize={12} textalign="right">
                    {data.totalVolumeUSD.toString()}
                  </LiquidityTitle>
                </TokenAmountTitle>
              </LiquidityTokenWrapper>
            </PairContain>
          </TokenCardContainer>
        </TableColumn>
        <TableColumn>
          <TableColumnWrapper height="96px">
            <Title fontsize={14}> ~$ {data.totalFeesUSD.toString()}</Title>
            <LiquidityTokenWrapper>
              <LiquidityTitle fontsize={12} textalign="right">
                {data.totalFees0.toString()} {data.token0.symbol}
              </LiquidityTitle>
              <LiquidityTitle fontsize={12} textalign="right">
                {data.totalFees1.toString()} {data.token1.symbol}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </TableColumnWrapper>
        </TableColumn>

        <TableColumn>
          <TableColumnWrapper height="96px">
            <Title fontsize={14}>{'No available incentive'}</Title>
            <LiquidityTokenWrapper>
              <LiquidityTitle
                fontsize={12}
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
            <Title fontsize={14}>{}</Title>
            <LiquidityTokenWrapper>
              <LiquidityTitle fontsize={12} textalign="right">
                {}
              </LiquidityTitle>
              <LiquidityTitle fontsize={12} textalign="right">
                {'Fees + Incentives'}
              </LiquidityTitle>
            </LiquidityTokenWrapper>
          </TableColumnWrapper>
        </TableColumn>

        <TableColumn padding="0px">
          <TableColumnWrapper height="96px">
            <TooltipContainer>
              <Title fontsize={14}>
                {'226.18%'} <Img src={ImpIcon} />
              </Title>
              <TooltipContent className="tooltip-content">
                <TooltipValueBox>
                  <TooltipValue>3.65%</TooltipValue>
                  <TooltipTextBox>
                    <TooltipText>Rebase APR</TooltipText>
                  </TooltipTextBox>
                </TooltipValueBox>
                <TooltipValueBox>
                  <TooltipValue>2.01%</TooltipValue>
                  <TooltipText>Fees + Incentives APR</TooltipText>
                </TooltipValueBox>
              </TooltipContent>
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
                fontsize="12px"
                width="auto"
                height="26px"
                lineheight="0px"
                border="1.5px solid transparent"
                borderradius="8px"
                smfontsize={12}
                smmargin="0px"
              >
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
              </GradientButton>
            </SelectedButtonWrapper>
          </TableColumnWrapper>
        </TableColumn>
      </TableRow>
    </>
  );
};

export default VotingPoolCard;
