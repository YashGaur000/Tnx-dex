import React from 'react';
import Stepper from '../../../common/Stepper';
import { StyledDepositContainer } from '../../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import { LockHeaderTitle } from '../../Styles/ManageVetenex.style';
import LockIcon from '../../../../assets/lock.png';
import SearchIcon from '../../../../assets/search.png';
import Lock1Icon from '../../../../assets/Lock1.svg';
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

interface LockDepositeProps {
  LockTokenValue: number;
}

const LockDeposite: React.FC<LockDepositeProps> = ({ LockTokenValue }) => {
  function handleAllowTenex() {
    console.log('unlock Tenex');
  }
  const LockInstructionData: Data[] = [
    {
      step: 1,
      descriptions: ['Select the amount of TENEX you want to lock.'],
    },
    {
      step: 2,
      descriptions: [
        'Select the number of weeks. The minimum lock time is one week, and the maximum lock time is 4 years.',
      ],
    },
    {
      step: 3,
      descriptions: ['Confirm the locking!'],
    },
    {
      step: 4,
      descriptions: ['Your lock will be available in the dashboard.'],
    },
  ];

  const LockData: Data[] = [
    {
      step: 1,
      descriptions: ['Allowance not granted for TENEX'],
      icon: LockIcon,
      buttons: [
        {
          label: 'Allow TENEX',
          icon: Lock1Icon,
          onClick: handleAllowTenex,
          tooltip: 'Click to allow USDT transactions',
        },
      ],
    },
    {
      step: 2,
      descriptions: ['Waiting for next actions...'],
      icon: SearchIcon,
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
