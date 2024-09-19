import Stepper from '../../common/Stepper';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';
import LockIcon from '../../../assets/Lock1.svg';
import RedLockIcon from '../../../assets/lock.png';
import UnLockIcon from '../../../assets/unlock.png';
import SucessDepositIcon from '../../../assets/gradient-party-poper.svg';
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
import { useTokenAllowance } from '../../../hooks/useTokenAllowance';
import poolAbi from '../../../constants/artifacts/contracts/Pool.json';
import { ethers } from 'ethers';
import { GlobalButton } from '../../common/index';
import { useGaugeContract } from '../../../hooks/useGaugeContract';
import SuccessPopup from '../../common/SucessPopup';
import SearchIcon from '../../../assets/search.png';
import { AddressZero } from '@ethersproject/constants';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';
import { useRootStore } from '../../../store/root';

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
  const [amount, setAmount] = useState<bigint>(BigInt(0));
  const [gaugeAddress, setGaugeAddress] = useState<Address>(AddressZero);
  const [isAllowingToken, setIsAllowingToken] = useState(false);
  const [isTokenAllowed, setIsTokenAllowed] = useState(false);
  const [isStaked, setIsStaked] = useState(false);

  const { setTransactionStatus } = useRootStore();

  const getParam = useQueryParams();
  const poolId = getParam('pool');
  const { metadata, balanceOf } = usePoolContract(poolId ?? '');

  const { gauges } = useVoterContract();
  const { deposit } = useGaugeContract(gaugeAddress);

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
          if (gaugeAddress != AddressZero && gaugeAddress != undefined) {
            setGaugeExists(true);
            setGaugeAddress(gaugeAddress);
          }
        })
        .catch((error) => {
          console.log('Error finding gauge:', error);
        });
  }, [poolId, metadata, gaugeAddress, gauges]);

  const Navigate = useNavigate();

  const { approveAllowance } = useTokenAllowance(
    poolId as Address,
    poolAbi.abi
  );

  const handleIncentive = () => {
    const queryParams = new URLSearchParams(location.search);
    Navigate({
      pathname: '/incentives',
      search: `?${queryParams.toString()}`,
    });
  };

  const handleAllowance = async () => {
    setIsAllowingToken(true);
    const balance = await balanceOf();
    if (balance) {
      const amount = (Number(balance.etherBalance) * selectedStakeValue) / 100;
      const amountInWei = ethers.parseUnits(
        amount.toFixed(balance.decimals).toString(),
        balance.decimals
      );
      setAmount(amountInWei);
      const result = await approveAllowance(
        gaugeAddress,
        amountInWei.toString()
      );
      setIsTokenAllowed(result ? true : false);
    }
  };

  const handleStakeDeposit = async () => {
    setTransactionStatus(TransactionStatus.IN_PROGRESS);
    const result = await deposit(amount);

    if (result) {
      setTransactionStatus(TransactionStatus.DONE);
      setIsStaked(true);
    } else {
      setTimeout(
        () => setTransactionStatus(TransactionStatus.IDEAL),
        TRANSACTION_DELAY
      );
    }
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
      buttons: {
        label:
          'Incentivize ' +
          selectedToken1?.symbol +
          '-' +
          selectedToken2?.symbol,
        onClick: handleIncentive,
      },
    },
    {
      step: 3,
      icon: !isTokenAllowed ? RedLockIcon : UnLockIcon,
      descriptions: {
        labels: isTokenAllowed
          ? 'Allowed the contracts to access pool'
          : 'Allowance not granted for pool',
      },
      buttons: !isTokenAllowed
        ? {
            label:
              'Allow ' + selectedToken1?.symbol + '-' + selectedToken2?.symbol,
            icon: LockIcon,
            disabled: !gaugeExists,
            onClick: handleAllowance,
            inProgress: isAllowingToken,
          }
        : undefined,
    },
    {
      step: 4,
      icon: !isStaked ? SearchIcon : SucessDepositIcon,
      descriptions: {
        labels: isStaked
          ? `Staked successfully`
          : 'Waiting for next actions...',
      },
      actionCompleted: !isStaked,
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
      {!isStaked && isTokenAllowed && (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={() => {
            handleStakeDeposit()
              .then(() => {
                setIsStaked(true);
              })
              .catch((error) => {
                console.error('Error staking:', error);
              });
          }}
        >
          Stake your Deposit{' '}
        </GlobalButton>
      )}
      {isStaked && <SuccessPopup message="Staked Successfully" />}
    </>
  );
};

export default StakeStepper;
