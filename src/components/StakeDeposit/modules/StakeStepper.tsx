import Stepper from '../../common/Stepper';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';
import LockIcon from '../../../assets/Lock1.svg';
import RedLockIcon from '../../../assets/lock.png';
import LoadingIcon from '../../../assets/search.png';
import DepositedIcon from '../../../assets/deposit-logo.svg';
import TimerIcon from '../../../assets/timer-red-logo.svg';
import useQueryParams from '../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../hooks/useTokenInfo';

interface StakeStepperProps {
  selectedStakeValue: number;
}

const StakeStepper: React.FC<StakeStepperProps> = ({ selectedStakeValue }) => {
  console.log(selectedStakeValue);
  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));

  const StakeStepperInstructData = [
    {
      step: 1,

      descriptions: {
        labels: 'Verify the deposit and the stake amounts.',
      },
    },
    {
      step: 2,

      descriptions: {
        labels: 'Use the slider to adjust the amount you want to stake.',
      },
    },
    {
      step: 3,

      descriptions: {
        labels: 'Confirm your stake!',
      },
    },
  ];

  const StakeStepperData = [
    {
      step: 1,
      icon: DepositedIcon,
      descriptions: {
        labels: 'Found the deposit available for staking',
      },
    },
    {
      step: 2,
      icon: TimerIcon,
      descriptions: {
        labels: 'Create the gauge by incentivizing first',
      },
      buttons: {
        label:
          'Incentivize ' +
          selectedToken1?.symbol +
          '-' +
          selectedToken2?.symbol,
      },
    },
    {
      step: 3,
      icon: RedLockIcon,
      descriptions: {
        labels: 'Create the gauge by incentivizing first',
      },
      buttons: {
        label: 'Allow ' + selectedToken1?.symbol + '-' + selectedToken2?.symbol,
        icon: LockIcon,
      },
    },
    {
      step: 4,
      icon: LoadingIcon,
      descriptions: {
        labels: 'Waiting for next actions...',
      },
    },
  ];

  return (
    <>
      <LiquidityHeaderTitle fontSize={24}>Staking</LiquidityHeaderTitle>
      <Stepper
        data={
          selectedStakeValue < 1 ? StakeStepperInstructData : StakeStepperData
        }
      />
    </>
  );
};

export default StakeStepper;
