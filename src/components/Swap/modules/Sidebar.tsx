import React, { useEffect, useMemo, useRef, useState } from 'react';
import CalIcon from '../../../assets/phone.png';
import PlusIcon from '../../../assets/plusminus.png';
import DurationIcon from '../../../assets/Duration.svg';
//import InformationIcon from '../../../assets/redInformation.svg';
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
import { TokenInfo } from '../../../constants/tokens';
import { useLiquidityStore } from '../../../store/slices/liquiditySlice';
import { useRootStore } from '../../../store/root';
import { calculateMinAmount } from '../../../utils/transaction/calculateMinAmounts';
import { ethers } from 'ethers';
import { testErc20Abi } from '../../../constants/abis/testErc20';
import { useTokenAllowance } from '../../../hooks/useTokenAllowance';
import contractAddresses from '../../../constants/contract-address/address';
import { GlobalButton } from '../../common';
import { getDeadline } from '../../../utils/transaction/getDeadline';
import {
  formatAmounts,
  parseAmounts,
} from '../../../utils/transaction/parseAmounts';
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

interface SidebarProps {
  isLoading: boolean;
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
  graph: Graph;
}

const Sidebar: React.FC<SidebarProps> = ({
  isLoading,
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
  graph,
}) => {
  //const [isUnsafeTradesAllowed, setIsUnsafeTradesAllowed] = useState(false);
  const [isTokenAllow, setIsTokenAllow] = useState(false);
  const { address } = useAccount();
  const {
    swapExactTokensForTokens,
    swapExactTokensForETH,
    swapExactETHForTokens,
    getAmountsOut,
  } = useRouterContract();
  const { deadLineValue } = useLiquidityStore();
  const { selectedTolerance } = useRootStore();
  const [minAmountOut, setMinAmountOut] = useState('');
  const [isSwapped, setIsSwapped] = useState(false);
  const [isVisibleSlippage, setVisibleSlippage] = useState(false);
  const [isVisibleDeadline, setVisibleDealine] = useState(false);

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
    if (minAmountOutWei) {
      const formattedMinAmount = ethers.formatUnits(
        minAmountOutWei.toString(),
        token2?.decimals
      );
      setMinAmountOut(formattedMinAmount);
    }
  }, [minAmountOutWei, token2?.decimals]);

  const { approveAllowance: approveAllowance1, checkAllowance } =
    useTokenAllowance(token1?.address, testErc20Abi);

  useEffect(() => {
    async function fetchAllowance() {
      if (address && tokenInput1 && token1) {
        try {
          const allowance = await checkAllowance(
            address,
            contractAddresses.Router
          );
          const formattedAllowance = formatAmounts(allowance, token1?.decimals);
          setIsTokenAllow(Number(formattedAllowance) >= Number(tokenInput1));
        } catch (error) {
          console.error('Error checking allowance:', error);
          setIsTokenAllow(false);
        }
      }
    }
    if (tokenInput1 && token1) {
      void fetchAllowance();
    }
  }, [tokenInput1, token1?.decimals, address, checkAllowance]);

  const handleAllowToken1 = async () => {
    try {
      const amount1InWei =
        tokenInput1 &&
        ethers.parseUnits(tokenInput1.toString(), token1?.decimals);
      if (amount1InWei && token1?.address) {
        await approveAllowance1(
          contractAddresses.Router,
          amount1InWei.toString()
        );
        setIsTokenAllow(true);
      }
    } catch (error) {
      console.error('Error during token approval', error);
    }
  };

  const inputTimeout = useRef<NodeJS.Timeout | null>(null);

  const delay = 5000; // 5 seconds delay

  const handleRefresh = () => {
    setIsLoading(true);
    setTokenInput2('');

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
        setIsLoading
      );
    }, delay);
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
          handleAdjust('Slippage');
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
      icon: token2.logoURI,
      descriptions: {
        labels: `Minimum received ${Number(minAmountOut).toFixed(5)} ${token2.symbol}`,
      },
    },
    // {
    //   step: 4,
    //   icon: InformationIcon,
    //   unSafe: {
    //     visible: true,
    //     onClick: handleUnsafeAllowence,
    //   },
    //   descriptions: {
    //     labels: 'Estimated price impact is too high 22.67% ',
    //   },
    // },
    {
      step: 5,
      icon: !isTokenAllow ? RedLockIcon : UnLockIcon,
      descriptions: {
        labels:
          isTokenAllow || token1.symbol === 'ETH'
            ? 'Allowed the contracts to access ' + token1?.symbol
            : 'Allowance not granted for ' + token1?.symbol,
      },
      buttons:
        !isTokenAllow && token1.symbol !== 'ETH'
          ? {
              label: 'Allow ' + token1?.symbol,
              icon: LockIcon,
              onClick: handleAllowToken1,
              tooltip: `Click to allow ${token1.symbol} transactions`,
              disabled: false,
            }
          : undefined,
    },
    {
      step: 6,
      icon: !isSwapped ? SearchIcon : SucessDepositIcon,
      descriptions: {
        labels: isSwapped ? 'Swap confirmed' : 'Waiting for next actions...',
      },
      actionCompleted: !isSwapped,
    },
  ];

  // const [SwapDepositData, setSwapDepositData] = useState<StepperDataProps[]>(
  //   SwapDepositInitialData
  // );

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
      descriptions: {
        labels:
          isTokenAllow || token1.symbol === 'ETH'
            ? 'Allowed the contracts to access ' + token1?.symbol
            : 'Allowance not granted for ' + token1?.symbol,
      },
      buttons:
        !isTokenAllow && token1.symbol !== 'ETH'
          ? {
              label: 'Allow ' + token1?.symbol,
              icon: LockIcon,
              onClick: handleAllowToken1,
              tooltip: `Click to allow ${token1.symbol} transactions`,
              disabled: false,
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
    if (adjustbuttonName === 'Slippage') {
      setVisibleSlippage(true);
    } else if (adjustbuttonName === 'deadline') {
      setVisibleDealine(true);
    }
  };

  const handleSwap = async () => {
    try {
      const amountInWei = parseAmounts(Number(tokenInput1), token1?.decimals);

      const deadline = getDeadline(deadLineValue);

      if (
        amountInWei &&
        token1?.address &&
        address &&
        tokenInput2 &&
        routes &&
        selectedTolerance
      ) {
        const minAmountOutWei = calculateMinAmount(
          Number(tokenInput2) ?? 0,
          parseFloat(selectedTolerance) ?? 1,
          token2?.decimals ?? 18
        );
        if (token2.symbol === 'ETH') {
          const tx = await swapExactTokensForETH(
            amountInWei,
            minAmountOutWei,
            routes,
            address,
            deadline
          );
          console.log('Swap added:', tx);
        } else if (token1.symbol === 'ETH') {
          const tx = await swapExactETHForTokens(
            amountInWei,
            minAmountOutWei,
            routes,
            address,
            deadline
          );
          console.log('Swap added:', tx);
        } else {
          const tx = await swapExactTokensForTokens(
            amountInWei,
            minAmountOutWei,
            routes,
            address,
            deadline
          );
          console.log('Swap added:', tx);
        }

        setIsSwapped(true);
        setTimeout(() => {
          setTokenInput1('');
          setTokenInput2('');
        }, 1000);
      }
    } catch (error) {
      console.error('Error swapping:', error);
    }
  };
  return (
    <>
      <SidebarInner>
        <SidebarTitle fontSize={24}>Instructions</SidebarTitle>
        <SidebarList>
          {isLoading ? (
            <Stepper data={SwapLoadingData} />
          ) : exchangeRate > 0 && tokenInput1 ? (
            <>
              <Stepper data={SwapDepositData} />
              {!isSwapped && (isTokenAllow || token1.symbol === 'ETH') && (
                <GlobalButton
                  width="100%"
                  height="48px"
                  margin="0px"
                  onClick={() => void handleSwap()}
                >
                  Swap
                </GlobalButton>
              )}

              {isVisibleSlippage && (
                <PopupScreen
                  isVisible={isVisibleSlippage}
                  onClose={() => setVisibleSlippage(false)}
                >
                  <PopupWrapper>
                    <SlippageTolerance />
                  </PopupWrapper>
                </PopupScreen>
              )}

              {isVisibleDeadline && (
                <PopupScreen
                  isVisible={isVisibleDeadline}
                  onClose={() => setVisibleDealine(false)}
                >
                  <PopupWrapper>
                    <TransactionDeadline />
                  </PopupWrapper>
                </PopupScreen>
              )}
            </>
          ) : (
            <Stepper data={SwapInstructData} />
          )}
        </SidebarList>
      </SidebarInner>
    </>
  );
};

export default Sidebar;
