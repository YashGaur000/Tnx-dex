import CalIcon from '../../../../assets/phone.png';
import PlusIcon from '../../../../assets/plusminus.png';
import UnLockIcon from '../../../../assets/unlock.png';
import SearchIcon from '../../../../assets/search.png';
import LockIcon from '../../../../assets/lock.png';
import Stepper from '../../../common/Stepper';

interface Data {
  step: number;
  icon?: string;
  descriptions: string[];
  buttons?: {
    label: string;
    icon: string;
    onClick: () => void;
    tooltip?: string;
  }[];
}
const Deposite = () => {
  function handleAllowUSDT() {
    console.log('usdt button');
  }

  function handleAllowFTM() {
    console.log('ftm button');
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
      descriptions: ['Allowance not granted for USDT'],
      buttons: [
        {
          label: 'Allow USDT',
          icon: LockIcon,
          onClick: handleAllowUSDT,
          tooltip: 'Click to allow USDT transactions',
        },
      ],
    },
    {
      step: 4,
      icon: UnLockIcon,
      descriptions: ['Allowance not granted for USDT'],
      buttons: [
        {
          label: 'Allow FTM',
          icon: LockIcon,
          onClick: handleAllowFTM,
          tooltip: 'Click to allow FTM transactions',
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
