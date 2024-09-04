import React, { useEffect, useState } from 'react';
import CalIcon from '../../../assets/phone.png';
import PlusIcon from '../../../assets/plusminus.png';
import SolIcon from '../../../assets/sol.png';
//import InformationIcon from '../../../assets/redInformation.svg';
import SucessDepositIcon from '../../../assets/gradient-party-poper.svg';

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
import { parseAmounts } from '../../../utils/transaction/parseAmounts';
import { useAccount } from '../../../hooks/useAccount';
import { useRouterContract } from '../../../hooks/useRouterContract';
import { Route } from '../../../utils/generateAllRoutes';

interface SidebarProps {
  isLoading: boolean;
  exchangeRate: number;
  token1: TokenInfo;
  token2: TokenInfo;
  tokenInput1: string;
  tokenInput2: string;
  routes: Route[] | null;
}

const Sidebar: React.FC<SidebarProps> = ({
  isLoading,
  exchangeRate,
  token1,
  token2,
  tokenInput1,
  tokenInput2,
  routes,
}) => {
  //const [isUnsafeTradesAllowed, setIsUnsafeTradesAllowed] = useState(false);
  const [isTokenAllow, setIsTokenAllow] = useState(false);
  const { address } = useAccount();
  const { swapExactTokensForTokens } = useRouterContract();
  const { deadLineValue } = useLiquidityStore();
  const { selectedTolerance } = useRootStore();
  const [minAmountOut, setMinAmountOut] = useState('');
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    if (tokenInput2 && selectedTolerance) {
      const minAmountOutWei = calculateMinAmount(
        Number(tokenInput2) ?? 0,
        parseFloat(selectedTolerance) ?? 1,
        token2?.decimals ?? 18
      );

      const formattedMinAmount = ethers.formatUnits(
        minAmountOutWei,
        token2?.decimals
      );

      setMinAmountOut(formattedMinAmount);
    }
  }, [tokenInput2, selectedTolerance, token2]);
  // const handleUnsafeAllowence = () => {
  //   setTokenAllow(false); //temperory writing this statement
  //   setIsUnsafeTradesAllowed(!isUnsafeTradesAllowed);
  // };
  const { approveAllowance: approveAllowance1 } = useTokenAllowance(
    token1.address,
    testErc20Abi
  );

  const handleAllowToken1 = async () => {
    try {
      const amount1InWei =
        tokenInput1 &&
        ethers.parseUnits(tokenInput1.toString(), token1?.decimals);
      if (amount1InWei && token1?.address) {
        if (token1?.symbol === 'WETH') {
          setIsTokenAllow(true);
        } else {
          await approveAllowance1(
            contractAddresses.Router,
            amount1InWei.toString()
          );
          setIsTokenAllow(true);
        }
      }
    } catch (error) {
      console.error('Error during token approval', error);
    }
  };

  const SwapDepositInitialData: StepperDataProps[] = [
    {
      step: 1,
      icon: CalIcon,
      descriptions: {
        labels: 'Exchange Rate Found',
        adjust: 'Refresh',
        token1: `1 ${token1.symbol}`,
        token2: `${exchangeRate.toFixed(4)} ${token2.symbol}`,
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
      icon: SolIcon,
      descriptions: {
        labels: `Minimum received ${Number(minAmountOut).toFixed(4)} ${token2.symbol}`,
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
        labels: isTokenAllow
          ? 'Allowed the contracts to access ' + token1?.symbol
          : 'Allowance not granted for ' + token1?.symbol,
      },
      buttons: !isTokenAllow
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
      step: 5,
      icon: !isSwapped ? SearchIcon : SucessDepositIcon,
      descriptions: {
        labels: isSwapped ? 'Swap confirmed' : 'Waiting for next actions...',
      },
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
      descriptions: {
        labels: 'Getting the Exchange Rate ...',
      },
    },
    {
      step: 2,
      icon: !isTokenAllow ? RedLockIcon : UnLockIcon,
      descriptions: {
        labels: isTokenAllow
          ? 'Allowed the contracts to access ' + token1?.symbol
          : 'Allowance not granted for ' + token1?.symbol,
      },
      buttons: !isTokenAllow
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
      descriptions: {
        labels: 'Waiting for next actions ...',
      },
    },
  ];

  const handleAdjust = (adjustbuttonName: string) => {
    if (adjustbuttonName === 'Slippage') {
      console.log('Slippage');
    } else if (adjustbuttonName === 'deadline') {
      {
        console.log('Deadline');
      }
    } else {
      console.log('wrong button');
    }
  };

  // const handleToggleChange = () => {
  //   setIsUnsafeTradesAllowed(!isUnsafeTradesAllowed);
  // };
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
        const tx = await swapExactTokensForTokens(
          amountInWei,
          minAmountOutWei,
          routes,
          address,
          deadline
        );
        console.log('Swap added:', tx);
        setIsSwapped(true);
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
              <Stepper data={SwapDepositInitialData} />
              {!isSwapped && isTokenAllow && (
                <GlobalButton
                  width="100%"
                  height="48px"
                  margin="0px"
                  onClick={() => void handleSwap()}
                >
                  Swap
                </GlobalButton>
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
