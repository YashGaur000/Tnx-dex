import CalIcon from '../../../../assets/phone.png';
import PlusIcon from '../../../../assets/plusminus.png';
import UnLockIcon from '../../../../assets/unlock.png';
import SearchIcon from '../../../../assets/search.png';
import LockIcon from '../../../../assets/Lock1.svg';
import Stepper from '../../../common/Stepper';
import React from 'react';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import { testErc20Abi } from './../../../../constants/abis/testErc20';
import { useTokenAllowance } from '../../../../hooks/useTokenAllowance';
import { ethers } from 'ethers';

interface Data {
  step: number;
  icon?: string;
  descriptions: (string | string[])[];
  buttons?: {
    label: string;
    icon: string;
    onClick: () => Promise<void>;
    tooltip?: string;
    disabled?: boolean;
  }[];
}

interface DepositProps {
  disabled1?: boolean;
  disabled2?: boolean;
  amount1?: ethers.Numeric;
  amount2?: ethers.Numeric;
}

const Deposite: React.FC<DepositProps> = ({
  disabled1,
  disabled2,
  amount1,
  amount2,
}) => {
  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));

  const { approveAllowance: approveAllowance1 } = useTokenAllowance(
    selectedToken1!.address,
    testErc20Abi
  );

  const { approveAllowance: approveAllowance2 } = useTokenAllowance(
    selectedToken2!.address,
    testErc20Abi
  );

  const handleAllowToken1 = async () => {
    try {
      const amount1InWei = amount1 && ethers.parseEther(amount1.toString());
      if (amount1InWei && selectedToken1?.address) {
        await approveAllowance1(
          selectedToken1?.address,
          amount1InWei.toString()
        );
      }
    } catch (error) {
      console.error('Error during token approval', error);
    }
  };

  const handleAllowToken2 = async () => {
    try {
      const amount2InWei = amount2 && ethers.parseEther(amount2.toString());
      if (amount2InWei && selectedToken2?.address) {
        await approveAllowance2(
          selectedToken2?.address,
          amount2InWei.toString()
        );
      }
    } catch (error) {
      console.error('Error during token approval', error);
    }
  };

  const data: Data[] = [
    {
      step: 1,
      icon: CalIcon,
      descriptions: ['First deposit into stable pool use 11 rate'],
    },
    {
      step: 2,
      icon: PlusIcon,
      descriptions: ['10% slippage applied...'],
    },
    {
      step: 3,
      icon: UnLockIcon,
      descriptions: [
        'Allowance ' + ' not granted for ' + selectedToken1?.symbol,
      ],
      buttons: [
        {
          label: 'Allow ' + selectedToken1?.symbol,
          icon: LockIcon,
          onClick: handleAllowToken1,
          tooltip: 'Click to allow USDT transactions',
          disabled: disabled1,
        },
      ],
    },
    {
      step: 4,
      icon: UnLockIcon,
      descriptions: [
        'Allowance' + ' not granted for ' + selectedToken1?.symbol,
      ],
      buttons: [
        {
          label: 'Allow ' + selectedToken2?.symbol,
          icon: LockIcon,
          onClick: handleAllowToken2,
          tooltip: 'Click to allow FTM transactions',
          disabled: disabled2,
        },
      ],
    },
    {
      step: 5,
      icon: SearchIcon,
      descriptions: ['Waiting for next actions...'],
    },
  ];

  return (
    <>
      <Stepper data={data} />
    </>
  );
};

export default Deposite;
