import SwapIcon from '../../../../assets/swap.png';
import { ChangeEvent, FC, useState } from 'react';
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
import { ethers } from 'ethers';
import { AmountLabel } from '../../../common';

interface FormComponentProps {
  totalBalanceToken1: ethers.Numeric;
  totalBalanceToken2: ethers.Numeric;
  onTokenValueChange: (
    token1: ethers.Numeric,
    token2: ethers.Numeric,
    totalBalanceToken1: ethers.Numeric,
    totalBalanceToken2: ethers.Numeric
  ) => void;
}

const LiquidityForm: FC<FormComponentProps> = ({
  totalBalanceToken1,
  totalBalanceToken2,
  onTokenValueChange,
}) => {
  const [token1Value, setToken1Amount] = useState<ethers.Numeric>(0);
  const [token2Value, setToken2Amount] = useState<ethers.Numeric>(0);

  const handleChangeToken1Value = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setToken1Amount(value);
    onTokenValueChange(
      value,
      token2Value,
      totalBalanceToken1,
      totalBalanceToken2
    );
  };
  const handleChangeToken2Value = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setToken2Amount(value);
    onTokenValueChange(
      token1Value,
      value,
      totalBalanceToken1,
      totalBalanceToken2
    );
  };

  const handleAmountValue = (
    percentage: number,
    tokenType: 'token1' | 'token2'
  ) => {
    if (tokenType === 'token1') {
      const calculatedValue = (Number(totalBalanceToken1) * percentage) / 100;
      setToken1Amount(calculatedValue);
      onTokenValueChange(
        calculatedValue,
        token2Value,
        totalBalanceToken1,
        totalBalanceToken2
      );
    } else {
      const calculatedValue = (Number(totalBalanceToken2) * percentage) / 100;
      setToken2Amount(calculatedValue);
      onTokenValueChange(
        token1Value,
        calculatedValue,
        totalBalanceToken1,
        totalBalanceToken2
      );
    }
  };

  const getParam = useQueryParams();
  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));

  const tokenList = [selectedToken1, selectedToken2];

  const { address } = useAccount();
  const { balances } = useTokenBalances(tokenList as TokenInfo[], address!);
  totalBalanceToken1 = Number(
    selectedToken1 && balances[selectedToken1.address]
  );
  totalBalanceToken2 = Number(
    selectedToken2 && balances[selectedToken2.address]
  );

  if (selectedToken1 && selectedToken2) {
    return (
      <ManageLiquidityFormSection>
        <FormFieldContainer>
          <FormRowWrapper>
            <ImageWithTitleWrap>
              <TokenImgLiquidity src={selectedToken1.logoURI} alt="USDT logo" />
              <label>{selectedToken1.symbol}</label>
            </ImageWithTitleWrap>
            <label>Available {totalBalanceToken1.toString()}</label>
          </FormRowWrapper>
          <div>
            <LiquidityInputBox
              type="text"
              name="token1"
              value={token1Value === 0 ? '' : token1Value?.toString() || ''}
              isInvalid={
                Number(token1Value) > Number(totalBalanceToken1.toString())
              }
              onChange={handleChangeToken1Value}
            />
          </div>
          <LiquidityProgress>
            <AmountLabel onClick={() => handleAmountValue(0, 'token1')}>
              0%
            </AmountLabel>
            <AmountLabel onClick={() => handleAmountValue(25, 'token1')}>
              25%
            </AmountLabel>
            <AmountLabel onClick={() => handleAmountValue(50, 'token1')}>
              50%
            </AmountLabel>
            <AmountLabel onClick={() => handleAmountValue(75, 'token1')}>
              75%
            </AmountLabel>
            <AmountLabel onClick={() => handleAmountValue(100, 'token1')}>
              MAX
            </AmountLabel>
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
            <label>Available {totalBalanceToken2.toString()}</label>
          </FormRowWrapper>
          <div>
            <LiquidityInputBox
              type="text"
              name="token2"
              value={token2Value === 0 ? '' : token2Value?.toString() || ''}
              isInvalid={
                Number(token2Value) > Number(totalBalanceToken2.toString())
              }
              onChange={handleChangeToken2Value}
            />
          </div>
          <LiquidityProgress>
            <AmountLabel onClick={() => handleAmountValue(0, 'token2')}>
              0%
            </AmountLabel>
            <AmountLabel onClick={() => handleAmountValue(25, 'token2')}>
              25%
            </AmountLabel>
            <AmountLabel onClick={() => handleAmountValue(50, 'token2')}>
              50%
            </AmountLabel>
            <AmountLabel onClick={() => handleAmountValue(75, 'token2')}>
              75%
            </AmountLabel>
            <AmountLabel onClick={() => handleAmountValue(100, 'token2')}>
              MAX
            </AmountLabel>
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
