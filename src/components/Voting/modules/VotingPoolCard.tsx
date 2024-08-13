import ImpIcon from '../../../assets/information.png';
import {
  CardContainer,
  GroupImg,
  Img,
  IMG1,
  IMG2,
  Imgstyle,
  Label,
  PairContain,
  Span,
  StyledGradientButton,
  TooltipContainer,
  TooltipContent,
  TooltipText,
  TooltipTextBox,
  TooltipValue,
  TooltipValueBox,
  TraidingSyleLabel,
  VolumeStyles,
  VoteButtonContainer,
  VoteTooltip,
} from '../styles/VotingPoolCard.style';

interface TableProps {
  data: DataProps;
}
interface DataProps {
  id?: string;
  pair?: string;
  icon1?: string;
  icon2?: string;
  stablePercentage?: number;
  tvl?: string;
  apr?: number;
  volume?: string;
  volumeDesc?: string;
  volumeSubDesc?: string;
  fees?: string;
  feesDesc?: string;
  feesSubDesc?: string;
  poolBalance?: string;
  balanceDesc?: string;
}

const VotingPoolCard: React.FC<TableProps> = ({ data }) => {
  return (
    <tr>
      <td>
        <CardContainer>
          <GroupImg>
            <IMG1>
              <Imgstyle src={data.icon1} />
            </IMG1>
            <IMG2>
              <Imgstyle src={data.icon2} />
            </IMG2>
          </GroupImg>
          <PairContain>
            <TraidingSyleLabel>{data.pair}</TraidingSyleLabel>
            <Label>
              <Span>Stable</Span> {data.stablePercentage}% <Img src={ImpIcon} />
            </Label>
            <Label>
              <Span>TVL</Span> <label>{data.tvl}</label>
            </Label>
          </PairContain>
        </CardContainer>
      </td>
      <td>{data.apr}% </td>
      <td>
        <VolumeStyles>
          <label>{data.volume}</label>
          <Label>{data.volumeDesc}</Label>
          <Label>{data.volumeSubDesc}</Label>
        </VolumeStyles>
      </td>
      <td>
        <VolumeStyles>
          <label>{data.fees}</label>
          <Label>{data.feesDesc}</Label>
          <Label>{data.feesSubDesc}</Label>
        </VolumeStyles>
      </td>
      <td>
        <VolumeStyles>
          <TooltipContainer>
            <label>
              {data.poolBalance} <Img src={ImpIcon} />
            </label>
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
        </VolumeStyles>
      </td>
      <td>
        <VolumeStyles>
          <VoteButtonContainer>
            <StyledGradientButton
              width="90px"
              fontSize="13px"
              padding="0px 5px"
              marginTop="10px"
            >
              Vote
            </StyledGradientButton>
            <VoteTooltip>
              You need to create a Lock in
              <br /> order to start voting. Locking
              <br />
              will give you an NFT, also
              <br /> referred to as a veNFT
            </VoteTooltip>
          </VoteButtonContainer>
        </VolumeStyles>
      </td>
    </tr>
  );
};

export default VotingPoolCard;
