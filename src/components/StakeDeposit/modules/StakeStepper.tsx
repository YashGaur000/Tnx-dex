import Stepper from '../../common/Stepper';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';
import LockIcon from '../../../assets/Lock1.svg';
import RedLockIcon from '../../../assets/lock.png';
import LoadingIcon from '../../../assets/search.png';
import DepositedIcon from '../../../assets/deposit-logo.svg';
import TimerIcon from '../../../assets/timer-red-logo.svg';
import useQueryParams from '../../../hooks/useQueryParams';
import { useEffect, useState } from 'react';
import { usePoolContract } from '../../../hooks/usePoolContract';
import { TokenInfo } from '../../../constants/tokens';
import { Metadata } from '../../../types/Pool';
import { getTokenInfo } from '../../../utils/transaction/getTokenInfo';
import { useNavigate } from 'react-router-dom';
import { useVoterContract } from '../../../hooks/useVoterContract';
import { Address } from 'viem';
interface StakeStepperProps {
  selectedStakeValue: number;
}

const StakeStepper: React.FC<StakeStepperProps> = ({ selectedStakeValue }) => {
  const [selectedToken1, setSelectedToken1] = useState<TokenInfo | undefined>(
    undefined
  );
  const [selectedToken2, setSelectedToken2] = useState<TokenInfo | undefined>(
    undefined
  );
  const [gaugeExists, setGaugeExists] = useState(false);

  const getParam = useQueryParams();
  const poolId = getParam('pool');
  const { metadata } = usePoolContract(poolId ?? '');

  const { gauges } = useVoterContract();

  useEffect(() => {
    metadata()
      .then((data: Metadata | undefined) => {
        if (data) {
          setSelectedToken1(getTokenInfo(data.t0));
          setSelectedToken2(getTokenInfo(data.t1));
        }
      })
      .catch((error) => {
        console.log('error loading metadata', error);
      });
    // to check if a gauge exists or needs to be created
    poolId &&
      gauges(poolId as Address)
        .then((gaugeAddress: `0x${string}` | undefined) => {
          if (
            gaugeAddress != '0x0000000000000000000000000000000000000000' &&
            gaugeAddress != undefined
          ) {
            console.log('gauge found :', gaugeAddress);
            setGaugeExists(true);
          }
        })
        .catch((error) => {
          console.log('Error finding gauge:', error);
        });
  }, [poolId, metadata]);

  const Navigate = useNavigate();

  const handleIncentive = () => {
    const queryParams = new URLSearchParams(location.search);
    Navigate({
      pathname: '/incentives',
      search: `?${queryParams.toString()}`,
    });
  };

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
        labels: !gaugeExists
          ? 'Create the gauge by incentivizing first'
          : `Gauge found for ${selectedToken1?.symbol} - ${selectedToken2?.symbol}`,
      },
      buttons: !gaugeExists
        ? {
            label:
              'Incentivize ' +
              selectedToken1?.symbol +
              '-' +
              selectedToken2?.symbol,
            onClick: handleIncentive,
          }
        : undefined,
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
        disabled: !gaugeExists,
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
