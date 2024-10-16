import React, { useEffect, useMemo, useRef, useState } from 'react';
import CalIcon from '../../../assets/phone.png';
import PlusIcon from '../../../assets/plusminus.png';
import DurationIcon from '../../../assets/Duration.svg';
import Check from '../../../assets/check.svg';
import UnCheck from '../../../assets/uncheck.svg';
import RedInformation from '../../../assets/redInformation.svg';
import GreenInformation from '../../../assets/greenInformation.svg';

import SucessDepositIcon from '../../../assets/gradient-party-poper.svg';
import Exchange from '../../../assets/exchange.svg';

import RedLockIcon from '../../../assets/lock.png';
import UnLockIcon from '../../../assets/LockSucess.svg';
import LockIcon from '../../../assets/Lock1.svg';
import SearchIcon from '../../../assets/search.png';
import {
  SidebarInner,
  SidebarList,
  SidebarTitle,
} from '../styles/Sidebar.style';
import Stepper from '../../common/Stepper';
import { StepperDataProps } from '../../../types/Stepper';
import { TokenInfo } from '../../../constants/tokens/type';
import { useLiquidityStore } from '../../../store/slices/liquiditySlice';
import { useRootStore } from '../../../store/root';
import { calculateMinAmount } from '../../../utils/transaction/calculateMinAmounts';
import { ethers } from 'ethers';
import { testErc20Abi } from '../../../constants/abis/testErc20';
import { useTokenAllowance } from '../../../hooks/useTokenAllowance';
import contractAddresses from '../../../constants/contract-address/address';
import { GlobalButton } from '../../common';
import { getDeadline } from '../../../utils/transaction/getDeadline';
import { parseAmounts } from '../../../utils/transaction/parseAmounts';
import { useAccount } from '../../../hooks/useAccount';
import { useRouterContract } from '../../../hooks/useRouterContract';
import {
  Graph,
  Route,
} from '../../../utils/liquidityRouting/generateAllRoutes';
import PopupScreen from '../../common/PopupScreen';
import { PopupWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import SlippageTolerance from '../../common/SlippageTolerance';
import TransactionDeadline from '../../common/TransactionDeadline';
import { fetchBestRouteAndUpdateState } from '../../../utils/liquidityRouting/refreshRouting';
import { useCheckAllowance } from '../../../hooks/useCheckAllowance';
import { ROUTING_DELAY } from '../../../utils/liquidityRouting/chunk';
import AllowUnsafeTrades from './AllowUnsafeTrades';
import { LoadingSpinner } from '../../common/Loader';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';
import SuccessPopup from '../../common/SucessPopup';
import useTransactionWarning from '../../../hooks/useTransactionWarning';
import { ConnectWallet } from '../../ConnectWallet';

interface SidebarProps {
  isLoading: boolean;
  isValid: boolean;
  setIsLoading: (loading: boolean) => void;
  exchangeRate: number;
  setExchangeRate: (exchangeRate: number) => void;
  token1: TokenInfo;
  token2: TokenInfo;
  tokenInput1: string;
  tokenInput2: string;
  setTokenInput1: (input: string) => void;
  setTokenInput2: (input: string) => void;
  routes: Route[] | null;
  setRoute: (route: Route[] | null) => void;
  amountsOut: bigint[] | null;
  setAmountsOut: (amountsOut: bigint[] | null) => void;
  graph: Graph;
}

const Sidebar: React.FC<SidebarProps> = ({
  isLoading,
  isValid,
  setIsLoading,
  exchangeRate,
  setExchangeRate,
  token1,
  token2,
  tokenInput1,
  tokenInput2,
  setTokenInput1,
  setTokenInput2,
  routes,
  setRoute,
  amountsOut,
  setAmountsOut,
  graph,
}) => {
  const [isTokenAllow, setIsTokenAllow] = useState(false);
  const { address } = useAccount();
  const {
    swapExactTokensForTokens,
    UNSAFE_swapExactTokensForTokens,
    swapExactTokensForETH,
    swapExactETHForTokens,
    getAmountsOut,
  } = useRouterContract();
  const { deadLineValue } = useLiquidityStore();
  const {
    selectedTolerance,
    priceImpact,
    allowUnsafe,
    setAllowUnsafe,
    setTransactionStatus,
  } = useRootStore();
  const [minAmountOut, setMinAmountOut] = useState('');
  const [isSwapped, setIsSwapped] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [isVisibleSlippage, setVisibleSlippage] = useState(false);
  const [isVisibleDeadline, setVisibleDealine] = useState(false);
  const [isVisibleUnsafe, setVisibleUnsafe] = useState(false);

  const [isUnsafe, setIsUnsafe] = useState(false);
  const [explorerLink, setExplorerlink] = useState('');

  const minAmountOutWei = useMemo(() => {
    if (tokenInput2 && selectedTolerance) {
      return calculateMinAmount(
        Number(tokenInput2) ?? 0,
        parseFloat(selectedTolerance) ?? 1,
        token2?.decimals
      );
    }
    return null;
  }, [tokenInput2, selectedTolerance, token2?.decimals]);

  useEffect(() => {
    if (minAmountOutWei && priceImpact) {
      const formattedMinAmount = ethers.formatUnits(
        minAmountOutWei.toString(),
        token2?.decimals
      );
      setMinAmountOut(formattedMinAmount);
      if (Number(priceImpact) > 6) {
        setIsUnsafe(true);
      } else setIsUnsafe(false);
    }
  }, [minAmountOutWei, token2?.decimals, priceImpact]);

  const { approveAllowance: approveAllowance1 } = useTokenAllowance(
    token1?.address,
    testErc20Abi
  );

  const { transactionStatus } = useRootStore();

  // allowance check
  useCheckAllowance(
    token1,
    tokenInput1,
    address!,
    contractAddresses.Router,
    setIsTokenAllow
  );

  // Trigger the hook with the current transaction status
  useTransactionWarning(transactionStatus);

  const handleAllowToken1 = async () => {
    try {
      setIsDisabled(true);
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      const amount1InWei =
        tokenInput1 &&
        ethers.parseUnits(tokenInput1.toString(), token1?.decimals);
      if (amount1InWei && token1?.address) {
        await approveAllowance1(
          contractAddresses.Router,
          amount1InWei.toString()
        );
        setIsTokenAllow(true);
        setIsDisabled(false);
        setTransactionStatus(TransactionStatus.DONE);

        setTimeout(() => {
          setTransactionStatus(TransactionStatus.IDEAL);
        }, TRANSACTION_DELAY);
      }
    } catch (error) {
      console.error('Error during token approval', error);
      setIsDisabled(false);
      setTransactionStatus(TransactionStatus.IDEAL);
    }
  };

  const inputTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleRefresh = () => {
    setIsLoading(true);
    setTokenInput2('');
    setRoute(null);

    // Clear any previous timeouts before setting a new one
    if (inputTimeout.current) {
      clearTimeout(inputTimeout.current);
    }

    // Regular function wrapping the async logic
    inputTimeout.current = setTimeout(() => {
      // Call the async function
      void fetchBestRouteAndUpdateState(
        token1,
        token2,
        tokenInput1,
        graph,
        getAmountsOut,
        setTokenInput2,
        setExchangeRate,
        setRoute,
        setIsLoading,
        setAmountsOut
      );
    }, ROUTING_DELAY);
  };

  const SwapDepositData: StepperDataProps[] = [
    {
      step: 1,
      icon: CalIcon,
      descriptions: {
        labels: 'Exchange Rate Found',
        adjust: 'Refresh',
        onClick: handleRefresh,
        token1: `1 ${token1.symbol}`,
        token2: `${exchangeRate.toFixed(5)} ${token2.symbol}`,
      },
    },
    {
      step: 2,
      icon: PlusIcon,
      descriptions: {
        labels: `${selectedTolerance} % slippage applied...`,
        adjust: 'Adjust',
        onClick: () => {
          handleAdjust('slippage');
        },
      },
    },
    {
      step: 3,
      icon: DurationIcon,
      descriptions: {
        labels: `${deadLineValue} min transaction deadline applied...`,
        adjust: 'Adjust',
        onClick: () => {
          handleAdjust('deadline');
        },
      },
    },
    {
      step: 4,
      icon: isUnsafe ? RedInformation : GreenInformation,
      descriptions: isUnsafe
        ? {
            labels: 'Allow unsafe trades',
            adjust: 'Allow',
            onClick: () => {
              handleAdjust('unsafe');
            },
          }
        : {
            labels: 'Safe trade',
          },
    },

    {
      step: 5,
      icon: token2.logoURI,
      descriptions: {
        labels: `Minimum received ${Number(minAmountOut).toFixed(5)} ${token2.symbol}`,
      },
    },
    {
      step: 6,
      icon: isUnsafe ? UnCheck : Check,
      descriptions: {
        labels: `${priceImpact} % price impact is ${isUnsafe ? 'unsafe' : 'safe'}`,
      },
    },
  ];

  if (address) {
    SwapDepositData.push(
      {
        step: 7,
        icon: !isTokenAllow ? RedLockIcon : UnLockIcon,
        descriptions: isValid
          ? {
              labels:
                isTokenAllow || token1.symbol === 'ETH'
                  ? 'Allowed the contracts to access ' + token1?.symbol
                  : 'Allowance not granted for ' + token1?.symbol,
            }
          : {
              labels: 'Insufficient Balance',
            },
        buttons:
          !isTokenAllow && token1.symbol !== 'ETH' && isValid
            ? {
                label: 'Allow ' + token1?.symbol,
                icon: LockIcon,
                onClick: handleAllowToken1,
                tooltip: `Click to allow ${token1.symbol} transactions`,
                disabled: isDisabled,
              }
            : undefined,
      },

      {
        step: 8,
        icon: !isSwapped ? SearchIcon : SucessDepositIcon,
        descriptions: {
          labels: isSwapped ? 'Swap confirmed' : 'Waiting for next actions...',
        },
        actionCompleted: !isSwapped,
      }
    );
  }

  const SwapInstructData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: {
        labels:
          'Choose the token you want to swap and enter the amount you would like to trade.',
      },
    },
    {
      step: 2,
      descriptions: {
        labels: 'Choose the token you want to swap into.',
      },
    },
    {
      step: 3,
      descriptions: {
        labels: "Just a moment, we're preparing your quote!",
      },
    },
  ];

  const SwapLoadingData: StepperDataProps[] = [
    {
      step: 1,
      icon: Exchange,
      descriptions: {
        labels: 'Getting the Exchange Rate ...',
      },
    },
    {
      step: 2,
      icon: !isTokenAllow ? RedLockIcon : UnLockIcon,
      descriptions: isValid
        ? {
            labels:
              isTokenAllow || token1.symbol === 'ETH'
                ? 'Allowed the contracts to access ' + token1?.symbol
                : 'Allowance not granted for ' + token1?.symbol,
          }
        : {
            labels: address
              ? 'Insufficient Balance'
              : 'Please connect your wallet',
          },
      buttons:
        !isTokenAllow && token1.symbol !== 'ETH' && isValid
          ? {
              label: 'Allow ' + token1?.symbol,
              icon: LockIcon,
              onClick: handleAllowToken1,
              tooltip: `Click to allow ${token1.symbol} transactions`,
              disabled: isDisabled,
            }
          : undefined,
    },
    {
      step: 3,
      icon: SearchIcon,
      descriptions: {
        labels: 'Waiting for next actions ...',
      },
      actionCompleted: isLoading,
    },
  ];

  const handleAdjust = (adjustbuttonName: string) => {
    switch (adjustbuttonName) {
      case 'slippage':
        setVisibleSlippage(true);
        break;
      case 'deadline':
        setVisibleDealine(true);
        break;

      case 'unsafe':
        setVisibleUnsafe(true);
        break;
      default:
        console.log('error in adjust');
    }
  };

  const handleSwap = async () => {
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      setIsDisabled(true);

      const amountInWei = parseAmounts(tokenInput1, token1?.decimals);
      const deadline = getDeadline(deadLineValue);

      if (
        !amountInWei ||
        !token1?.address ||
        !address ||
        !tokenInput2 ||
        !routes ||
        !selectedTolerance
      ) {
        throw new Error('Missing required parameters');
      }

      const minAmountOutWei = calculateMinAmount(
        Number(tokenInput2) ?? 0,
        parseFloat(selectedTolerance) ?? 1,
        token2?.decimals ?? 18
      );

      const isEthToToken = token2.symbol === 'ETH';
      const isTokenToEth = token1.symbol === 'ETH';

      const getTransaction = async () => {
        if (isEthToToken) {
          return await swapExactTokensForETH(
            amountInWei,
            minAmountOutWei,
            routes,
            address,
            deadline
          );
        }

        if (isTokenToEth) {
          return await swapExactETHForTokens(
            amountInWei,
            minAmountOutWei,
            routes,
            address,
            deadline
          );
        }

        if (allowUnsafe && isUnsafe && amountsOut) {
          return await UNSAFE_swapExactTokensForTokens(
            amountsOut,
            routes,
            address,
            deadline
          );
        }

        return await swapExactTokensForTokens(
          amountInWei,
          minAmountOutWei,
          routes,
          address,
          deadline
        );
      };

      const tx = await getTransaction();

      setExplorerlink(`https://testnet.blastscan.io/tx/${tx?.hash}`);

      setIsSwapped(true);
      setIsDisabled(false);
      setTransactionStatus(TransactionStatus.DONE);
    } catch (error) {
      console.error('Error swapping:', error);
      setIsDisabled(false);
      setTransactionStatus(TransactionStatus.IDEAL);
    }
  };

  const onClose = () => {
    setTokenInput1('');
    setTokenInput2('');
    setTransactionStatus(TransactionStatus.IDEAL);
    setIsSwapped(false);
  };

  return (
    <>
      <SidebarInner>
        <SidebarTitle fontSize={24}>Instructions</SidebarTitle>
        <SidebarList>
          {isLoading ? (
            <Stepper data={SwapLoadingData} />
          ) : exchangeRate > 0 && tokenInput1 && routes ? (
            <>
              <Stepper data={SwapDepositData} />
              {!address && <ConnectWallet />}

              {!isSwapped &&
                isValid &&
                (isTokenAllow || token1.symbol === 'ETH') && (
                  <GlobalButton
                    width="100%"
                    height="48px"
                    margin="0px"
                    onClick={() => void handleSwap()}
                    disabled={isDisabled}
                  >
                    {isDisabled ? (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center', // Center items horizontally
                          alignItems: 'center', // Center items vertically
                          gap: '15px',
                        }}
                      >
                        <LoadingSpinner width="10px" height="10px" />
                        <p>Swapping</p>
                      </div>
                    ) : (
                      <p>Swap</p>
                    )}
                  </GlobalButton>
                )}

              {isVisibleSlippage && (
                <PopupScreen
                  isvisible={isVisibleSlippage}
                  onClose={() => setVisibleSlippage(false)}
                >
                  <PopupWrapper>
                    <SlippageTolerance />
                  </PopupWrapper>
                </PopupScreen>
              )}

              {isVisibleDeadline && (
                <PopupScreen
                  isvisible={isVisibleDeadline}
                  onClose={() => setVisibleDealine(false)}
                >
                  <PopupWrapper>
                    <TransactionDeadline />
                  </PopupWrapper>
                </PopupScreen>
              )}

              {isVisibleUnsafe && (
                <PopupScreen
                  isvisible={isVisibleUnsafe}
                  onClose={() => setVisibleUnsafe(false)}
                >
                  <PopupWrapper>
                    <AllowUnsafeTrades
                      isChecked={allowUnsafe}
                      handleToggle={() => setAllowUnsafe(!allowUnsafe)}
                    />
                  </PopupWrapper>
                </PopupScreen>
              )}
            </>
          ) : (
            <Stepper data={SwapInstructData} />
          )}
        </SidebarList>
        {isSwapped && (
          <SuccessPopup
            message="Swap completed successfully"
            explorerLink={explorerLink}
            onClose={onClose}
          />
        )}
      </SidebarInner>
    </>
  );
};

export default Sidebar;
