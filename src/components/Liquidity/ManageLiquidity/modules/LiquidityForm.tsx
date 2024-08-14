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
import { useAccount } from '../../../../hooks/useAccount';
import { useTokenBalances } from '../../../../hooks/useTokenBalance';
import { TokenInfo } from '../../../../constants/tokens';

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

  const tokenList = [selectedToken1, selectedToken2];

  const { address } = useAccount();
  const { balances } = useTokenBalances(tokenList as TokenInfo[], address!);

  if (selectedToken1 && selectedToken2) {
    return (
      <ManageLiquidityFormSection>
        <FormFieldContainer>
          <FormRowWrapper>
            <ImageWithTitleWrap>
              <TokenImgLiquidity src={selectedToken1.logoURI} alt="USDT logo" />
              <label>{selectedToken1.symbol}</label>
            </ImageWithTitleWrap>
            <label>
              Available {selectedToken1 && (balances[selectedToken1.address]).toString()}
            </label>
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
              <TokenImgLiquidity src={selectedToken2.logoURI} alt="FTM logo" />
              <label>{selectedToken2.symbol}</label>
            </ImageWithTitleWrap>
            <label>
              Available {selectedToken2 && (balances[selectedToken2.address]).toString()}
            </label>
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
