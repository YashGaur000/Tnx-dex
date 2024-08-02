import styled from 'styled-components';
import ImpIcon from '../../../../assets/information.png';

import { GradientButton } from '../../../common';
import { useNavigate } from 'react-router-dom';

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
const CardContainer = styled.div`
  display: flex;
  gap: 15px;

  justify-content: center;
  margin: auto;

  width: 200px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const GroupImg = styled.div`
  display: block;
  position: relative;

  width: 60px;
  height: 50px;
`;
const TraidingSyleLabel = styled.label`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

const IMG1 = styled.div`
  display: block;
  position: absolute;
  left: 0px;
  top: 20px;
`;
const IMG2 = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #cccccc;
  font-size: 12px;
`;
const Span = styled.span`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-right: 10px;
`;
const Img = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;
const Imgstyle = styled.img`
  width: 35px;
  height: 35px;
`;
const PairContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const VolumeStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: flex-end;

  width: 60%;
`;
const LiquidityPoolCard: React.FC<TableProps> = ({ data }) => {
  const Navigate = useNavigate();
  function handleDepositeButton() {
    Navigate('/liquidity/manage');
  }

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
      <td>{data.apr}%</td>
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
          <label>{data.poolBalance}</label>
          <Label>{data.balanceDesc}</Label>
          <div onClick={handleDepositeButton}>
            <GradientButton
              width="90px"
              fontSize="16px"
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
