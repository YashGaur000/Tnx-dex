import { ChangeEvent, FC, useState } from 'react';
import {
  ManageLiquidityFormSection,
  FormFieldContainer,
  FormRowWrapper,
  ImageWithTitleWrap,
  TokenImgLiquidity,
  LiquidityInputBox,
  LiquidityProgress,
  InputBoxContainer,
} from '../styles/LiquidityForm.style';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useAccount } from '../../../../hooks/useAccount';
import { useTokenBalances } from '../../../../hooks/useTokenBalance';
import { TokenInfo } from '../../../../constants/tokens/type';
import { ethers } from 'ethers';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import contractAddress from '../../../../constants/contract-address/address';
import { LiquidityTitle } from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import { AmountLabel } from '../../../common';
import { useRouterContract } from '../../../../hooks/useRouterContract';
import { formatUnits } from 'ethers';

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
  const [token1Value, setToken1Amount] = useState('');
  const [token2Value, setToken2Amount] = useState('');
  const { quoteAddLiquidity } = useRouterContract();

  const handleChangeToken1Value = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let stableValue = value;
    const validInput = /^[0-9]*\.?[0-9]*$/.test(value);
    if (!validInput) return;

    // Check the number of decimals
    if (value.includes('.') && selectedToken1 && selectedToken2) {
      const decimalPlaces = value.split('.')[1]?.length || 0;
      if (decimalPlaces > selectedToken2.decimals && type) {
        stableValue = Number(value).toFixed(selectedToken2.decimals);
      }
      if (decimalPlaces > selectedToken1.decimals) return;
    }

    setToken1Amount(value);

    // Set values for creating a new stable pool deposit.
    if (!exists && type) {
      setToken2Amount(stableValue);
    }

    // Fetch values for new deposit in an existing pool (quote liquidity).
    if (selectedToken1 && selectedToken2 && exists) {
      if (!value) {
        //Reset values
        setToken2Amount('');
        onTokenValueChange(0, 0, totalBalanceToken1, totalBalanceToken2);
      } else {
        quoteAddLiquidity(
          selectedToken1,
          selectedToken2,
          type,
          contractAddress.PoolFactory,
          parseFloat(value),
          totalBalanceToken2
        )
          .then((tx) => {
            const value2 =
              tx &&
              parseFloat(
                formatUnits(tx.amountB.toString(), selectedToken2.decimals)
              );
            setToken2Amount(value2 ? value2.toString() : '0');
            onTokenValueChange(
              parseFloat(value),
              value2 ?? 0,
              totalBalanceToken1,
              totalBalanceToken2
            );
          })
          .catch((error) => {
            console.error('Error fetching quote liquidity:', error);
            setToken2Amount('0');
          });
      }
    } else {
      onTokenValueChange(
        parseFloat(value),
        type ? parseFloat(stableValue) : parseFloat(token2Value),
        totalBalanceToken1,
        totalBalanceToken2
      );
    }
  };

  const handleChangeToken2Value = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const validInput = /^[0-9]*\.?[0-9]*$/.test(value);
    if (!validInput) return;

    // Check the number of decimals
    if (value.includes('.') && selectedToken2) {
      const decimalPlaces = value.split('.')[1]?.length || 0;
      if (decimalPlaces > selectedToken2.decimals) return;
    }
    setToken2Amount(value);
    onTokenValueChange(
      parseFloat(token1Value),
      parseFloat(value),
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
      const desiredValue = calculatedValue.toFixed(5); // Fix decimal issue need to check
      setToken1Amount(desiredValue);

      // to set values for creating new stable pool deposit.
      if (!exists && type) {
        setToken2Amount(desiredValue);
      }

      // to fetch values for new deposit in an existing pool (quote liquidity).
      if (selectedToken1 && selectedToken2 && exists) {
        if (!calculatedValue) {
          setToken2Amount('0');
        } else {
          quoteAddLiquidity(
            selectedToken1,
            selectedToken2,
            type,
            contractAddress.PoolFactory,
            parseFloat(desiredValue),
            totalBalanceToken2
          )
            .then((tx) => {
              const value1 =
                tx &&
                parseFloat(
                  formatUnits(tx.amountA.toString(), selectedToken1.decimals)
                );
              const value2 =
                tx &&
                parseFloat(
                  formatUnits(tx.amountB.toString(), selectedToken2.decimals)
                );
              setToken1Amount(value1 ? value1.toString() : '0');
              setToken2Amount(value2 ? value2.toString() : '0');
              onTokenValueChange(
                Number(desiredValue),
                value2 ?? 0,
                totalBalanceToken1,
                totalBalanceToken2
              );
            })
            .catch((error) => {
              console.error('Error fetching liquidity quote:', error);
            });
        }
      } else {
        onTokenValueChange(
          Number(desiredValue),
          parseFloat(token2Value),
          totalBalanceToken1,
          totalBalanceToken2
        );
      }
    } else {
      const calculatedValue = (Number(totalBalanceToken2) * percentage) / 100;
      setToken2Amount(calculatedValue.toString());
      onTokenValueChange(
        parseFloat(token1Value),
        calculatedValue,
        totalBalanceToken1,
        totalBalanceToken2
      );
    }
  };

  const getParam = useQueryParams();
  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  const type = getParam('type') == '0' ? true : false;
  const exists = getParam('exists') == 'true' ? true : false;

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
              <LiquidityHeaderTitle fontsize={16}>
                {selectedToken1.symbol}
              </LiquidityHeaderTitle>
            </ImageWithTitleWrap>
            <LiquidityTitle fontsize={16}>
              Available {totalBalanceToken1.toString()}
            </LiquidityTitle>
          </FormRowWrapper>
          <InputBoxContainer>
            <LiquidityInputBox
              type="number"
              name="token1"
              step="0.000000000001"
              value={token1Value}
              isInvalid={
                parseFloat(token1Value) >
                parseFloat(totalBalanceToken1.toString())
              }
              onChange={handleChangeToken1Value}
            />
          </InputBoxContainer>
          <LiquidityProgress>
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
        <FormFieldContainer>
          <FormRowWrapper>
            <ImageWithTitleWrap>
              <TokenImgLiquidity src={selectedToken2.logoURI} alt="FTM logo" />
              <LiquidityHeaderTitle fontsize={16}>
                {selectedToken2.symbol}
              </LiquidityHeaderTitle>
            </ImageWithTitleWrap>
            <LiquidityTitle fontsize={16}>
              Available {totalBalanceToken2.toString()}
            </LiquidityTitle>
          </FormRowWrapper>
          <InputBoxContainer>
            <LiquidityInputBox
              type="text"
              name="token2"
              value={token2Value}
              isInvalid={
                parseFloat(token2Value) >
                parseFloat(totalBalanceToken2.toString())
              }
              onChange={handleChangeToken2Value}
              disabled={exists ? exists : type}
            />
          </InputBoxContainer>
          {!exists && (
            <LiquidityProgress>
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
          )}
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
