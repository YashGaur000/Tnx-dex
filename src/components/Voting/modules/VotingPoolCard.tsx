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
import USDTIcon from '../../../assets/usdt.png';
import BtcIcon from '../../../assets/Btc.svg';
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

interface TableProps {
  data: DataProps;
}
interface DataProps {
  id?: string;
  pair?: string;
  icon1?: string;
  icon2?: string;
  stablePercentage?: number;
  votes?: string;
  tvl?: string;
  apr?: number;
  volume?: string;
  volumeDesc?: string;
  volumeSubDesc?: string;
  fees?: string;
  feesUSDT?: string;
  feesBTC?: string;
  feesDesc?: string;
  feesSubDesc?: string;
  poolBalance?: string;
  balanceDesc?: string;
}

const VotingPoolCard: React.FC<TableProps> = ({ data }) => {
  return (
    <TableRow>
      <TableColumn>
        <TokenCardContainer height={96}>
          <GroupImgContains>
            <IMG1Contains top={10} left={0}>
              <Imgstyle src={USDTIcon} />
            </IMG1Contains>
            <IMG2Contains top={10} left={25}>
              <Imgstyle src={BtcIcon} />
            </IMG2Contains>
          </GroupImgContains>

          <PairContain>
            <TraidingSyleLabel>USDT-BTC</TraidingSyleLabel>
            <LiquidityTokenWrapper>
              <TokenAmountTitle>
                <StatsCardtitle lineheight="17px" fontSize={12}>
                  stable
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
                  ~$7,428,176,4
                </LiquidityTitle>
              </TokenAmountTitle>
            </LiquidityTokenWrapper>
          </PairContain>
        </TokenCardContainer>
      </TableColumn>
      <TableColumn>
        <TableColumnWrapper height="96px">
          <Title fontSize={14}>{data.fees}</Title>
          <LiquidityTokenWrapper>
            <LiquidityTitle fontSize={12} textalign="right">
              {data.feesUSDT}
            </LiquidityTitle>
            <LiquidityTitle fontSize={12} textalign="right">
              {data.feesBTC}
            </LiquidityTitle>
          </LiquidityTokenWrapper>
        </TableColumnWrapper>
      </TableColumn>

      <TableColumn>
        <TableColumnWrapper height="96px">
          <Title fontSize={14}>{data.volume}</Title>
          <LiquidityTokenWrapper>
            <LiquidityTitle
              fontSize={12}
              textalign="right"
              textdecoration="underline"
            >
              {data.volumeDesc}
            </LiquidityTitle>
          </LiquidityTokenWrapper>
        </TableColumnWrapper>
      </TableColumn>

      <TableColumn>
        <TableColumnWrapper height="96px">
          <Title fontSize={14}>{data.fees}</Title>
          <LiquidityTokenWrapper>
            <LiquidityTitle fontSize={12} textalign="right">
              {data.feesDesc}
            </LiquidityTitle>
            <LiquidityTitle fontSize={12} textalign="right">
              {data.feesSubDesc}
            </LiquidityTitle>
          </LiquidityTokenWrapper>
        </TableColumnWrapper>
      </TableColumn>

      <TableColumn padding="0px">
        <TableColumnWrapper height="96px">
          <TooltipContainer>
            <Title fontSize={14}>
              {data.poolBalance} <Img src={ImpIcon} />
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
          <Label>{data.balanceDesc}</Label>
        </TableColumnWrapper>
      </TableColumn>

      <TableColumn>
        <TableColumnWrapper height="95px">
          <GradientButton
            color="#ffffff"
            padding="4px 10px"
            fontSize="12px"
            width="70px"
            height="26px"
            lineheight="0px"
            border="1.5px solid transparent"
            borderRadius="8px"
            smfontsize={12}
            smmargin="0px"
          >
            Vote
          </GradientButton>
        </TableColumnWrapper>
      </TableColumn>
    </TableRow>
  );
};

export default VotingPoolCard;
