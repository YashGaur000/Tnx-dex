import React, { useState } from 'react';
import CalIcon from '../../../assets/phone.png';
import PlusIcon from '../../../assets/plusminus.png';
import SolIcon from '../../../assets/sol.png';
import InformationIcon from '../../../assets/redInformation.svg';
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

interface SidebarProps {
  isLoading: boolean;
  exchangeRate: number;
  token1: TokenInfo;
  token2: TokenInfo;
}

const Sidebar: React.FC<SidebarProps> = ({
  isLoading,
  exchangeRate,
  token1,
  token2,
}) => {
  const [isUnsafeTradesAllowed, setIsUnsafeTradesAllowed] = useState(false);
  const [isTokenAllow, setTokenAllow] = useState(false);
  const handleUnsafeAllowence = () => {
    setTokenAllow(false); //temperory writing this statement
    setIsUnsafeTradesAllowed(!isUnsafeTradesAllowed);
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
        labels: '1.0 % slippage applied...',
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
        labels: 'Minimum received 5.86 SOL',
      },
    },
    {
      step: 4,
      icon: InformationIcon,
      unSafe: {
        visible: true,
        onClick: handleUnsafeAllowence,
      },
      descriptions: {
        labels: 'Estimated price impact is too high 22.67% ',
      },
    },
    {
      step: 5,
      icon: LockIcon,
      descriptions: {
        labels: `Allowance not granted for ${token1.symbol}`,
      },
      buttons: !isTokenAllow
        ? {
            label: 'Allow ' + token1?.symbol,
            icon: LockIcon,
            onClick: undefined,
            tooltip: `Click to allow ${token1.symbol} transactions`,
            disabled: false,
          }
        : undefined,
    },
    {
      step: 6,
      icon: SearchIcon,
      descriptions: {
        labels: 'Waiting for next actions ...',
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
      descriptions: {
        labels: `Allowance not granted for ${token1.symbol}`,
      },
      buttons: !isTokenAllow
        ? {
            label: 'Allow ' + token1?.symbol,
            icon: LockIcon,
            onClick: undefined,
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
  return (
    <>
      <SidebarInner>
        <SidebarTitle fontSize={24}>Instructions</SidebarTitle>
        <SidebarList>
          {isLoading ? (
            <Stepper data={SwapLoadingData} />
          ) : exchangeRate > 0 ? (
            <Stepper data={SwapDepositInitialData} />
          ) : (
            <Stepper data={SwapInstructData} />
          )}
        </SidebarList>
      </SidebarInner>
    </>
  );
};

export default Sidebar;
