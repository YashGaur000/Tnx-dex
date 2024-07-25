import styled from 'styled-components';
import SwapIcon from '../../assets/swap.png';
import UsdtIcon from '../../assets/usdt.png';
import FtmIcon from '../../assets/ftm.png';
const FormSection = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);

  border-radius: 15px;
  padding: 10px;
`;
const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 130px;
  padding: 10px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Kanit;
  font-size: 15px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: left;
`;

const Progress = styled.span`
  display: flex;
  justify-content: end;
  padding-right: 5px;
  gap: 10px;
  font-size: 12px;
  color: silver;
`;

const InputBox = styled.input`
  width: 99%;
  height: 47px;
  border-radius: 10px;

  background: transparent;
  border: 1px solid #b8b8b899;
`;

const Swap = styled.div`
  display: block;
  margin: auto;
`;
const Img = styled.img`
  width: 17px;
  height: 17px;
  margin: auto;
  margin-right: 7px;
`;
const ImageWithTitle = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;

const LiquidityForm = () => {
  return (
    <FormSection>
      <FormFieldContainer>
        <Title>
          <ImageWithTitle>
            <Img src={UsdtIcon} alt="logo" />
            <label>USDT</label>
          </ImageWithTitle>
          <label>Available 0000</label>
        </Title>
        <div>
          <InputBox
            type="text"
            name="usdt"
            // value={usdt}
            // onChange={handleChange}
          />
        </div>
        <Progress>
          <label>0%</label>
          <label>25%</label>
          <label>50%</label>
          <label>75%</label>
          <label>MAX</label>
        </Progress>
      </FormFieldContainer>
      <Swap>
        <img src={SwapIcon} alt="logo" />
      </Swap>
      <FormFieldContainer>
        <Title>
          <ImageWithTitle>
            <Img src={FtmIcon} alt="logo" />
            <label>FTM</label>
          </ImageWithTitle>

          <label>Available 0000</label>
        </Title>
        <div>
          <InputBox
            type="text"
            name="ftm"
            // value={usdt}
            readOnly
          />
        </div>
        <Progress>
          <label>0%</label>
          <label>25%</label>
          <label>50%</label>
          <label>75%</label>
          <label>MAX</label>
        </Progress>
      </FormFieldContainer>
    </FormSection>
  );
};

export default LiquidityForm;
