import SwapIcon from '../../../../assets/swap.png';
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
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import useQueryParams from '../../../../hooks/useQueryParams';

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

  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  // const poolType = getParam('type') ? 'stable' : 'volatile';

  // const logoName1= selectedToken1.name+"logo";
  // const logoName2= selectedToken2.name+"logo";

  function handleSwapFeatures() {
    console.log('swap button');
  }

  if (selectedToken1 && selectedToken2) {
    return (
      <ManageLiquidityFormSection>
        <FormFieldContainer>
          <FormRowWrapper>
            <ImageWithTitleWrap>
              <TokenImgLiquidity src={selectedToken1.logoURI} alt="USDT logo" />
              <label>{selectedToken1.symbol}</label>
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
        <SwapImgConatiner onClick={handleSwapFeatures}>
          <img src={SwapIcon} alt="Swap logo" />
        </SwapImgConatiner>
        <FormFieldContainer>
          <FormRowWrapper>
            <ImageWithTitleWrap>
              <TokenImgLiquidity src={selectedToken2.logoURI} alt="FTM logo" />
              <label>{selectedToken2.symbol}</label>
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
  } else {
    return (
      <>
        <h3>Error: Please select a token</h3>
      </>
    );
  }
};

export default LiquidityForm;
