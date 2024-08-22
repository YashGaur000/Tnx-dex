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
  InputBoxContainer,
} from '../styles/LiquidityForm.style';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useAccount } from '../../../../hooks/useAccount';
import { useTokenBalances } from '../../../../hooks/useTokenBalance';
import { TokenInfo } from '../../../../constants/tokens';
import { ethers } from 'ethers';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';

import { LiquidityTitle } from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';

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
              <LiquidityHeaderTitle fontSize={16}>
                {selectedToken1.symbol}
              </LiquidityHeaderTitle>
            </ImageWithTitleWrap>
            <LiquidityTitle fontSize={16}>
              Available {totalBalanceToken1.toString()}
            </LiquidityTitle>
          </FormRowWrapper>
          <InputBoxContainer>
            <LiquidityInputBox
              type="text"
              name="token1"
              value={token1Value === 0 ? '' : token1Value?.toString() || ''}
              isInvalid={
                Number(token1Value) > Number(totalBalanceToken1.toString())
              }
              onChange={handleChangeToken1Value}
            />
          </InputBoxContainer>
          <LiquidityProgress>
            <LiquidityTitle fontSize={14}>0%</LiquidityTitle>
            <LiquidityTitle fontSize={14}>25%</LiquidityTitle>
            <LiquidityTitle fontSize={14}>50%</LiquidityTitle>
            <LiquidityTitle fontSize={14}>75%</LiquidityTitle>
            <LiquidityTitle fontSize={14}>MAX</LiquidityTitle>
          </LiquidityProgress>
        </FormFieldContainer>
        <SwapImgConatiner onClick={handleSwapFeatures}>
          <img src={SwapIcon} alt="Swap logo" />
        </SwapImgConatiner>
        <FormFieldContainer>
          <FormRowWrapper>
            <ImageWithTitleWrap>
              <TokenImgLiquidity src={selectedToken2.logoURI} alt="FTM logo" />
              <LiquidityHeaderTitle fontSize={16}>
                {selectedToken2.symbol}
              </LiquidityHeaderTitle>
            </ImageWithTitleWrap>
            <LiquidityTitle fontSize={16}>
              Available {totalBalanceToken2.toString()}
            </LiquidityTitle>
          </FormRowWrapper>
          <InputBoxContainer>
            <LiquidityInputBox
              type="text"
              name="token2"
              value={token2Value === 0 ? '' : token2Value?.toString() || ''}
              isInvalid={
                Number(token2Value) > Number(totalBalanceToken2.toString())
              }
              onChange={handleChangeToken2Value}
            />
          </InputBoxContainer>
          <LiquidityProgress>
            <LiquidityTitle fontSize={14}>0%</LiquidityTitle>
            <LiquidityTitle fontSize={14}>25%</LiquidityTitle>
            <LiquidityTitle fontSize={14}>50%</LiquidityTitle>
            <LiquidityTitle fontSize={14}>75%</LiquidityTitle>
            <LiquidityTitle fontSize={14}>MAX</LiquidityTitle>
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
