import React, { useState } from 'react';
import Stepper from '../../../common/Stepper';
import { StyledDepositContainer } from '../../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import { LockHeaderTitle } from '../../Styles/ManageVetenex.style';
import LockIcon from '../../../../assets/lock.png';
import SearchIcon from '../../../../assets/search.png';
import Lock1Icon from '../../../../assets/Lock1.svg';
import { StepperDataProps } from '../../../../types/Stepper';
import { ethers } from 'ethers';
import contractAddress from '../../../../constants/contract-address/address';

import { useTokenAllowance } from '../../../../hooks/useTokenAllowance';
import { testErc20Abi } from '../../../../constants/abis/testErc20';

interface LockDepositeProps {
  LockTokenValue: number;
  LockTokenSymbol: string;
  LocTokenAddress: string;
  LockTokenDecimal: number;
}

const LockDeposite: React.FC<LockDepositeProps> = ({
  LockTokenValue,
  LockTokenSymbol,
  LocTokenAddress,
  LockTokenDecimal,
}) => {
  const [isTokenAllowed, setIsTokenAllowed] = useState(false);
  const routerAddress = contractAddress.Router;
  const { approveAllowance: approveAllowance } = useTokenAllowance(
    LocTokenAddress as `0x${string}`,
    testErc20Abi
  );
  const handleAllowToken = async () => {
    try {
      const amount1InWei =
        LockTokenValue &&
        ethers.parseUnits(LockTokenValue.toString(), LockTokenDecimal);
      if (amount1InWei && LocTokenAddress) {
        await approveAllowance(routerAddress, amount1InWei.toString());
        setIsTokenAllowed(true);
      }
    } catch (error) {
      console.error('Error during token approval', error);
    }
  };

  const LockInstructionData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: {
        labels: 'Select the amount of TENEX you want to lock.',
      },
    },
    {
      step: 2,
      descriptions: {
        labels:
          'Select the number of weeks. The minimum lock time is one week, and the maximum lock time is 4 years.',
      },
    },
    {
      step: 3,
      descriptions: { labels: 'Confirm the locking!' },
    },
    {
      step: 4,
      descriptions: {
        labels: 'Your lock will be available in the dashboard.',
      },
    },
  ];

  const LockData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: 'Allowance not granted for TENEX' },
      icon: LockIcon,
      buttons: !isTokenAllowed
        ? {
            label: 'Allow ' + LockTokenSymbol,
            icon: Lock1Icon,
            onClick: handleAllowToken,
            tooltip: 'Click to allow USDT transactions',
          }
        : undefined,
    },
    {
      step: 2,
      descriptions: { labels: 'Waiting for next actions...' },
      icon: SearchIcon,
    },
    {
      step: 3,
      descriptions: { labels: '' },
      buttons: isTokenAllowed
        ? {
            label: 'Lock ' + LockTokenSymbol,
            icon: Lock1Icon,
            onClick: handleAllowToken,
          }
        : undefined,
    },
  ];
  return (
    <StyledDepositContainer>
      <LockHeaderTitle fontSize={24}>New Deposit</LockHeaderTitle>
      <Stepper data={!LockTokenValue ? LockInstructionData : LockData} />
    </StyledDepositContainer>
  );
};

export default LockDeposite;
