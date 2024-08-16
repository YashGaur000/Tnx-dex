import CalIcon from '../../../../assets/phone.png';
import PlusIcon from '../../../../assets/plusminus.png';
import UnLockIcon from '../../../../assets/unlock.png';
import SearchIcon from '../../../../assets/search.png';
import LockIcon from '../../../../assets/lock.png';
import Stepper from '../../../common/Stepper';
import React from 'react';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';

interface Data {
  step: number;
  icon?: string;
  descriptions: string[];
  buttons?: {
    label: string;
    icon: string;
    onClick: () => void;
    tooltip?: string;
    disabled?: boolean;
  }[];
}

interface DepositProps {
  disabled1?: boolean;
  disabled2?: boolean;
}

const Deposite: React.FC<DepositProps> = ({ disabled1, disabled2 }) => {
  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));

  function handleAllowToken1() {
    console.log('token1 button');
  }

  function handleAllowToken2() {
    console.log('token2 button');
  }

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
