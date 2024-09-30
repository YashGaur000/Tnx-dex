// import { GlobalButton } from "../../common"
import Stepper from '../../common/Stepper';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';

import SearchIcon from '../../../assets/search.png';
import DepositedIcon from '../../../assets/deposit-logo.svg';
import PlusMinusIcon from '../../../assets/plusminus.png';
import RedLockIcon from '../../../assets/lock.png';
import Lock1Icon from '../../../assets/Lock1.svg';
const WithdrawStepper = () => {
  const WithdrawStepperData = [
    {
      step: 1,
      icon: DepositedIcon,
      descriptions: {
        labels: 'Found the staked deposit',
      },
    },

    {
      step: 2,
      icon: PlusMinusIcon,
      descriptions: {
        labels: '1.0% slippage applied...  ',
        adjust: 'Adjust',
      },
    },

    {
      step: 3,
      icon: RedLockIcon,
      descriptions: {
        labels: 'Allowance not granted for SUI',
      },
      buttons: {
        label: 'Allow SUI',
        icon: Lock1Icon,
      },
    },

    {
      step: 4,
      icon: SearchIcon,
      descriptions: {
        labels: 'Waiting for next actions...',
      },
    },
  ];
  return (
    <>
      <LiquidityHeaderTitle fontSize={24}>
        Withdraw Liquidity
      </LiquidityHeaderTitle>
      <Stepper data={WithdrawStepperData}></Stepper>

      {/* Todo: make dynmaic, when allow token then after Withdraw Liquidity active  */}
      {/* <GlobalButton width="100%" height="48px" margin="0px">
        {' '}
        Withdraw Liquidity{' '}
      </GlobalButton> */}
    </>
  );
};

export default WithdrawStepper;
