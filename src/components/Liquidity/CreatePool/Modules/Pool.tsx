import GroupCoin from '../../../../assets/Groupcoin.png';
import ImpImage from '../../../../assets/information.png';
import styled from 'styled-components';
import { GradientButton } from '../../../common';
const IMG = styled.img`
  width: 55px;
  height: 30px;
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

  margin-left: 3px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Poolsstyle = styled.div`
  margin-top: 20px;
  display: flex;
  border-radius: 20px;
  justify-content: space-between;
  padding: 3px 30px 3px 30px;
  height: 80px;
  color: rgba(255, 255, 255, 1);

  align-items: center;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  font-size: 13px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    margin: 10px;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    height: auto;
  }
`;
const GroupImg = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const Tvlstyle = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  @media only screen and (max-width: 500px) {
    flex-direction: row;

    gap: 20px;
  }
`;
const AprStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media only screen and (max-width: 500px) {
    flex-direction: row;

    gap: 20px;
  }
`;
const PoolButton = styled.div`
  flex-shrink: 1;
  @media only screen and (max-width: 500px) {
    margin-left: 80%;
  }
`;

const TraidingSyleLabel = styled.label`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;
const Pool = () => {
  return (
    <Poolsstyle>
      <GroupImg>
        <IMG src={GroupCoin} />
        <div>
          <TraidingSyleLabel>vAMM-USDT/BTC</TraidingSyleLabel>
          <Label>
            <Span> stable </Span> 0.00% <Img src={ImpImage} />
          </Label>
        </div>{' '}
      </GroupImg>
      <Tvlstyle>
        <label>TVL</label>
        <label>0.000$</label>
      </Tvlstyle>
      <AprStyle>
        <label>APR</label>
        <label>0.000%</label>
      </AprStyle>
      <PoolButton>
        <GradientButton height="40px" padding="5px" fontSize="16px">
          Deposit
        </GradientButton>
      </PoolButton>
    </Poolsstyle>
  );
};

export default Pool;
