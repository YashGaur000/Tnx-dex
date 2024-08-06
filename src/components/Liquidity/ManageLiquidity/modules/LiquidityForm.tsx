import SwapIcon from '../../../../assets/swap.png';
import UsdtIcon from '../../../../assets/usdt.png';
import FtmIcon from '../../../../assets/ftm.png';
import { ChangeEvent, FC } from 'react';
import {
  ManageLiquidityFormSection,
  FormFieldContainer,
  FormRowWrapper,
  ImageWithTitleWrap,
  TokenImgLiquidity,
  LiquidityInputBox,
  LiquidityProgress,
  SwapImgConatiner,
} from '../styles/LiquidityForm.style';

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
    <ManageLiquidityFormSection>
      <FormFieldContainer>
        <FormRowWrapper>
          <ImageWithTitleWrap>
            <TokenImgLiquidity src={UsdtIcon} alt="USDT logo" />
            <label>USDT</label>
          </ImageWithTitleWrap>
          <label>Available 0000</label>
        </FormRowWrapper>
        <div>
          <LiquidityInputBox
            type="text"
            name="usdt"
            value={tokenValue === 0 ? '' : tokenValue?.toString() || ''}
            isInvalid={tokenValue < 100}
            onChange={handleChange}
          />
        </div>
        <LiquidityProgress>
          <label>0%</label>
          <label>25%</label>
          <label>50%</label>
          <label>75%</label>
          <label>MAX</label>
        </LiquidityProgress>
      </FormFieldContainer>
      <SwapImgConatiner>
        <img src={SwapIcon} alt="Swap logo" />
      </SwapImgConatiner>
      <FormFieldContainer>
        <FormRowWrapper>
          <ImageWithTitleWrap>
            <TokenImgLiquidity src={FtmIcon} alt="FTM logo" />
            <label>FTM</label>
          </ImageWithTitleWrap>
          <label>Available 0000</label>
        </FormRowWrapper>
        <div>
          <LiquidityInputBox
            type="text"
            name="ftm"
            value={tokenValue === 0 ? '' : tokenValue?.toString() || ''}
            isInvalid={tokenValue < 100}
            readOnly
          />
        </div>
        <LiquidityProgress>
          <label>0%</label>
          <label>25%</label>
          <label>50%</label>
          <label>75%</label>
          <label>MAX</label>
        </LiquidityProgress>
      </FormFieldContainer>
    </ManageLiquidityFormSection>
  );
};

export default LiquidityForm;
