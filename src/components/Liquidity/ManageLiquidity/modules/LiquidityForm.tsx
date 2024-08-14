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

interface FormComponentProps {
  onTokenValueChange: (token1: ethers.Numeric, token2: ethers.Numeric) => void;
}

const LiquidityForm: FC<FormComponentProps> = ({ onTokenValueChange }) => {
  const [token1Value, setToken1Amount] = useState<ethers.Numeric>(0);
  const [token2Value, setToken2Amount] = useState<ethers.Numeric>(0);

  const handleChangeToken1Value = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setToken1Amount(value);
    onTokenValueChange(value, token2Value);
  };
  const handleChangeToken2Value = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setToken2Amount(value);
    onTokenValueChange(token1Value, value);
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
              Available{' '}
              {selectedToken1 && balances[selectedToken1.address].toString()}
            </label>
          </FormRowWrapper>
          <div>
            <LiquidityInputBox
              type="text"
              name="token1"
              value={token1Value === 0 ? '' : token1Value?.toString() || ''}
              isInvalid={
                Number(token1Value) >
                Number(balances[selectedToken1.address].toString())
              }
              onChange={handleChangeToken1Value}
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
              Available{' '}
              {selectedToken2 && balances[selectedToken2.address].toString()}
            </label>
          </FormRowWrapper>
          <div>
            <LiquidityInputBox
              type="text"
              name="token2"
              value={token2Value === 0 ? '' : token2Value?.toString() || ''}
              isInvalid={
                Number(token2Value) >
                Number(
                  selectedToken2 && balances[selectedToken2.address].toString()
                )
              }
              onChange={handleChangeToken2Value}
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
