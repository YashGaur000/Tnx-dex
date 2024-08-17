import Stepper from '../../../common/Stepper';

import CalIcon from '../../../../assets/phone.png';
import PlusIcon from '../../../../assets/plusminus.png';

import SearchIcon from '../../../../assets/search.png';
import Lock1Icon from '../../../../assets/Lock1.svg';
import LockIcon from '../../../../assets/lock.png';
import UnLockIcon from '../../../../assets/LockSucess.svg';
import { useState } from 'react';
import { GlobalButton } from '../../../common';
import SucessPopup from '../../../common/SucessPopup';
import CebrationIcon from '../../../../assets/celebration.svg';
interface Data {
  step: number;
  icon?: string;
  descriptions: (string | string[])[];
  buttons?: {
    label: string;
    icon: string;
    onClick: () => void;
    tooltip?: string;
    disabled?: boolean;
  }[];
}
const ManageDeposit = () => {
  const [isAllowbutton2, setAllowbutton2] = useState(false);
  const [isAllowbutton1, setAllowbutton1] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const data: Data[] = [
    {
      step: 1,
      icon: CalIcon,
      descriptions: [
        'Quote for deposit received...  Refresh',
        ['1.0', '0.73546'],
      ],
    },
    {
      step: 2,
      icon: PlusIcon,
      descriptions: ['10% slippage applied... Adjust'],
    },
    {
      step: 3,
      icon: !isAllowbutton1 ? LockIcon : UnLockIcon,
      descriptions: [
        !isAllowbutton1
          ? 'Allowance not granted for USDT'
          : 'Allowed the contracts to access USDT',
      ],
      buttons: !isAllowbutton1
        ? [
            {
              label: 'Allow USDT',
              icon: Lock1Icon,
              onClick: handleAllowToken1,
              tooltip: 'Click to allow USDT transactions',
            },
          ]
        : [],
    },
    {
      step: 4,
      icon: !isAllowbutton2 ? LockIcon : UnLockIcon,
      descriptions: [
        !isAllowbutton2
          ? 'Allowance not granted for FTM'
          : 'Allowed the contracts to access FTM',
      ],
      buttons: !isAllowbutton2
        ? [
            {
              label: 'Allow FTM',
              icon: Lock1Icon,
              onClick: handleAllowToken2,
              tooltip: 'Click to allow FTM transactions',
            },
          ]
        : [],
    },
    {
      step: 5,
      icon: !showSuccess ? SearchIcon : CebrationIcon,
      descriptions: [
        !showSuccess ? 'Waiting for next actions...' : 'Deposit confirmed',
      ],
    },
  ];

  function handleAllowToken1() {
    setAllowbutton1(true);
  }

  function handleAllowToken2() {
    setAllowbutton2(true);
  }

  function handleDeposite() {
    setShowSuccess(true);
  }

  return (
    <>
      <Stepper data={data} />

      {isAllowbutton1 &&
        isAllowbutton2 &&
        (!showSuccess ? (
          <div onClick={handleDeposite}>
            <GlobalButton height="48px">Deposit</GlobalButton>
          </div>
        ) : (
          <div>
            <GlobalButton height="48px">Stake your Deposit</GlobalButton>
          </div>
        ))}

      {showSuccess && <SucessPopup message="Deposit Successfully" />}
    </>
  );
};

export default ManageDeposit;
