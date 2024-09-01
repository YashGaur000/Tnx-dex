import React, { useEffect, useState } from 'react';
import CalIcon from '../../../assets/phone.png';
import PlusIcon from '../../../assets/plusminus.png';
import SolIcon from '../../../assets/sol.png';
import InformationIcon from '../../../assets/redInformation.svg';
import RedLockIcon from '../../../assets/lock.png';
import CheckIcon from '../../../assets/check.svg';
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
import { LoadingSpinner } from '../../common/Loader';

interface SidebarProps {
  isLoading: boolean;
  exchangeRate: number;
}

const Sidebar: React.FC<SidebarProps> = ({ isLoading, exchangeRate }) => {
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
        token1: '1 tEnvio',
        token2: `${exchangeRate} tBlast`,
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
  ];
  const [SwapDepositData, setSwapDepositData] = useState<StepperDataProps[]>(
    SwapDepositInitialData
  );

  const SwapInstructData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: {
        labels:
          'Start by selecting the token to Swap from and the amount you want to exchange.',
      },
    },
    {
      step: 2,
      descriptions: {
        labels: 'Pick the token you want to exchange For.',
      },
    },
    {
      step: 3,
      descriptions: {
        labels: 'The quote will be ready in a moment!qzg s',
      },
    },
  ];

  // const handleTokenAllow = ()=>{
  //       try {

  //         console.log(abc);
  //          setTokenAllow(true);
  //       } catch (error) {
  //         console.log(error);

  //       }
  // }

  useEffect(() => {
    const updatedData = [...SwapDepositInitialData];

    if (isUnsafeTradesAllowed) {
      updatedData.pop();
      updatedData.push({
        step: 5,
        icon: CheckIcon,
        descriptions: {
          labels: '22.41% price impact is unsafe',
        },
      });
      updatedData.push({
        step: 6,
        icon: !isTokenAllow ? RedLockIcon : UnLockIcon,

        descriptions: {
          labels: !isTokenAllow
            ? 'Allowance not granted for SUI'
            : 'Allowed the contracts to access SUI',
        },
        buttons: !isTokenAllow
          ? {
              label: 'Allow SUI',
              icon: LockIcon,
              // onClick:handleTokenAllow
            }
          : undefined,
      });
      updatedData.push({
        step: 7,
        icon: SearchIcon,
        descriptions: {
          labels: 'Waiting for next actions...',
        },
      });
    }

    setSwapDepositData(updatedData);
  }, [isUnsafeTradesAllowed, isTokenAllow]);

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
            <LoadingSpinner />
          ) : exchangeRate > 0 ? (
            <Stepper data={SwapDepositData} />
          ) : (
            <Stepper data={SwapInstructData} />
          )}
        </SidebarList>
      </SidebarInner>
    </>
  );
};

export default Sidebar;
