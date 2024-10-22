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
import { useNativeBalance } from '../../../../hooks/useNativeBalance';
import { AddressZero } from '@ethersproject/constants';
import { formatAmounts } from '../../../../utils/transaction/parseAmounts';
import { useRootStore } from '../../../../store/root';
import { TransactionStatus } from '../../../../types/Transaction';
import { showErrorToast } from '../../../../utils/common/toastUtils';
import { ToastContainer } from 'react-toastify';
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
  const { quoteAddLiquidity, getReserves } = useRouterContract();
  const { transactionStatus } = useRootStore();
  const { address } = useAccount();

  const handleChangeToken1Value = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    let stableValue = value;
    const validInput = /^[0-9]*\.?[0-9]*$/.test(value);
    if (!validInput) return;

    if (!address) {
      void showErrorToast('Connect Wallet to continue ...');
      return;
    }

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
        const reserves = await getReserves(
          selectedToken1,
          selectedToken2,
          type
        );

        const amountBDesired =
          (Number(value) * Number(reserves?.formatedReserveB)) /
          Number(reserves?.formatedReserveA);

        const amountADesired = value;

        if (
          Number(reserves?.formatedReserveA) < 1e-6 ||
          Number(reserves?.formatedReserveB) < 1e-6
        ) {
          if (type) {
            setToken2Amount(stableValue);
          } else {
            setToken2Amount(token2Value);
          }
          onTokenValueChange(
            parseFloat(value),
            type ? parseFloat(stableValue) : parseFloat(token2Value),
            totalBalanceToken1,
            totalBalanceToken2
          );
          return;
        }

        quoteAddLiquidity(
          selectedToken1,
          selectedToken2,
          type,
          contractAddress.PoolFactory,
          parseFloat(amountADesired),
          parseFloat(amountBDesired.toFixed(5))
        )
          .then((tx) => {
            if (
              tx &&
              parseFloat(value) <=
                parseFloat(
                  formatAmounts(tx.amountA, selectedToken1.decimals) ?? '0'
                )
            ) {
              const value2 =
                tx && formatAmounts(tx?.amountB, selectedToken2.decimals);
              console.log(tx.amountA.toString(), tx.amountB.toString());

              setToken2Amount(value2 ? value2.toString() : '0');
              if (value2) {
                onTokenValueChange(
                  parseFloat(value),
                  parseFloat(value2),
                  totalBalanceToken1,
                  totalBalanceToken2
                );
              }
            } else if (tx) {
              const value2 =
                (parseFloat(value) *
                  parseFloat(
                    formatAmounts(tx.amountB, selectedToken2.decimals) ?? '0'
                  )) /
                parseFloat(
                  formatAmounts(tx.amountA, selectedToken1.decimals) ?? '1'
                );
              setToken2Amount(value2 ? value2.toString() : '0');
              if (value2) {
                onTokenValueChange(
                  parseFloat(value),
                  value2,
                  totalBalanceToken1,
                  totalBalanceToken2
                );
              }
            }
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
      const value = calculatedValue.toFixed(5); // Fix decimal issue need to check
      const desiredValue =
        selectedToken1?.symbol == 'ETH' ||
        selectedToken2?.symbol == 'ETH' ||
        selectedToken1?.symbol == 'WETH' ||
        selectedToken2?.symbol == 'WETH'
          ? (Number(value) - 0.00001).toString()
          : value; // for gas fee
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
                tx && formatAmounts(tx.amountA, selectedToken1.decimals);
              const value2 =
                tx && formatAmounts(tx.amountB, selectedToken2.decimals);
              setToken1Amount(value1 ? Number(value1).toFixed(5) : '0');
              setToken2Amount(value2 ? Number(value2).toFixed(5) : '0');
              if (value2) {
                onTokenValueChange(
                  parseFloat(Number(value1).toFixed(5)),
                  parseFloat(Number(value2).toFixed(5)),
                  totalBalanceToken1,
                  totalBalanceToken2
                );
              }
            })
            .catch((error) => {
              console.error('Error fetching liquidity quote:', error);
            });
        }
      } else {
        if (type) {
          onTokenValueChange(
            Number(desiredValue),
            Number(desiredValue),
            totalBalanceToken1,
            totalBalanceToken2
          );
        } else {
          onTokenValueChange(
            Number(desiredValue),
            parseFloat(token2Value),
            totalBalanceToken1,
            totalBalanceToken2
          );
        }
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

  const { balance: ethBalance } = useNativeBalance(address ?? AddressZero);
  const { balances } = useTokenBalances(tokenList as TokenInfo[], address!);

  if (selectedToken1?.symbol == 'ETH' && ethBalance) {
    totalBalanceToken1 = Number(ethBalance.formatted);
  } else {
    totalBalanceToken1 = Number(
      selectedToken1 && balances[selectedToken1.address]
    );
  }

  if (selectedToken2?.symbol == 'ETH' && ethBalance) {
    totalBalanceToken2 = Number(ethBalance.formatted);
  } else {
    totalBalanceToken2 = Number(
      selectedToken2 && balances[selectedToken2.address]
    );
  }

  if (selectedToken1 && selectedToken2) {
    return (
      <ManageLiquidityFormSection>
        <FormFieldContainer>
          <ToastContainer />
          <FormRowWrapper>
            <ImageWithTitleWrap>
              <TokenImgLiquidity src={selectedToken1.logoURI} alt="USDT logo" />
              <LiquidityHeaderTitle fontSize={16}>
                {selectedToken1.symbol}
              </LiquidityHeaderTitle>
            </ImageWithTitleWrap>
            <LiquidityTitle fontSize={16}>
              Available{' '}
              {totalBalanceToken1 % 1 === 0
                ? totalBalanceToken1.toFixed(2)
                : totalBalanceToken1.toFixed(5)}
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
              disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
            />
          </InputBoxContainer>
          <LiquidityProgress>
            <AmountLabel
              onClick={() => handleAmountValue(25, 'token1')}
              disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
            >
              25%
            </AmountLabel>
            <AmountLabel
              onClick={() => handleAmountValue(50, 'token1')}
              disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
            >
              50%
            </AmountLabel>
            <AmountLabel
              onClick={() => handleAmountValue(75, 'token1')}
              disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
            >
              75%
            </AmountLabel>
            <AmountLabel
              onClick={() => handleAmountValue(100, 'token1')}
              disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
            >
              MAX
            </AmountLabel>
          </LiquidityProgress>
        </FormFieldContainer>
        <FormFieldContainer>
          <FormRowWrapper>
            <ImageWithTitleWrap>
              <TokenImgLiquidity src={selectedToken2.logoURI} alt="FTM logo" />
              <LiquidityHeaderTitle fontSize={16}>
                {selectedToken2.symbol}
              </LiquidityHeaderTitle>
            </ImageWithTitleWrap>
            <LiquidityTitle fontSize={16}>
              Available{' '}
              {totalBalanceToken2 % 1 === 0
                ? totalBalanceToken2.toFixed(2)
                : totalBalanceToken2.toFixed(5)}
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
          {!exists && !type && (
            <LiquidityProgress>
              <AmountLabel
                onClick={() => handleAmountValue(25, 'token2')}
                disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
              >
                25%
              </AmountLabel>
              <AmountLabel
                onClick={() => handleAmountValue(50, 'token2')}
                disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
              >
                50%
              </AmountLabel>
              <AmountLabel
                onClick={() => handleAmountValue(75, 'token2')}
                disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
              >
                75%
              </AmountLabel>
              <AmountLabel
                onClick={() => handleAmountValue(100, 'token2')}
                disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
              >
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
