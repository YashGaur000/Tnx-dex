import styled from 'styled-components';
import SwapIcon from '../../../../assets/swap.png';
import UsdtIcon from '../../../../assets/usdt.png';
import FtmIcon from '../../../../assets/ftm.png';
import { ChangeEvent, FC } from 'react';

const FormSection = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
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

interface InputBoxProps {
  isInvalid: boolean;
}

const InputBox = styled.input<InputBoxProps>`
  // Use InputBoxProps for typing
  width: 99%;
  height: 47px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid #b8b8b899;
  color: ${(props) => (props.isInvalid ? 'red' : 'white')};
  padding-left: 20px;
  font-weight: 300;
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
  align-items: center;
  justify-content: center;
`;

interface FormComponentProps {
  tokenValue: number;
  onTokenValueChange: (value: number) => void;
}

const LiquidityForm: FC<FormComponentProps> = ({
  tokenValue,
  onTokenValueChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onTokenValueChange(value);
  };

  return (
    <FormSection>
      <FormFieldContainer>
        <Title>
          <ImageWithTitle>
            <Img src={UsdtIcon} alt="USDT logo" />
            <label>USDT</label>
          </ImageWithTitle>
          <label>Available 0000</label>
        </Title>
        <div>
          <InputBox
            type="text"
            name="usdt"
            value={tokenValue === 0 ? '' : tokenValue?.toString() || ''}
            isInvalid={tokenValue < 100}
            onChange={handleChange}
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
        <img src={SwapIcon} alt="Swap logo" />
      </Swap>
      <FormFieldContainer>
        <Title>
          <ImageWithTitle>
            <Img src={FtmIcon} alt="FTM logo" />
            <label>FTM</label>
          </ImageWithTitle>
          <label>Available 0000</label>
        </Title>
        <div>
          <InputBox
            type="text"
            name="ftm"
            value={tokenValue === 0 ? '' : tokenValue?.toString() || ''}
            isInvalid={tokenValue < 100}
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
