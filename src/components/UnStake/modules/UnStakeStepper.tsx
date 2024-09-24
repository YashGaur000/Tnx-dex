import { GlobalButton } from '../../common';
import Stepper from '../../common/Stepper';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';

import SearchIcon from '../../../assets/search.png';
import DepositedIcon from '../../../assets/deposit-logo.svg';
const UnStakeStepper = () => {
  const UnStakeStepperData = [
    {
      step: 1,
      icon: DepositedIcon,
      descriptions: {
        labels: 'Found the staked deposit',
      },
    },

    {
      step: 2,
      icon: SearchIcon,
      descriptions: {
        labels: 'Waiting for next actions...',
      },
    },
  ];

  return (
    <>
      <LiquidityHeaderTitle fontsize={24}>Unstaking</LiquidityHeaderTitle>
      <Stepper data={UnStakeStepperData}></Stepper>

      <GlobalButton width="100%" height="48px" margin="0px">
        {' '}
        Unstake{' '}
      </GlobalButton>
    </>
  );
};

export default UnStakeStepper;
