import {
  IncentiveleftBarBox1,
  IncentivesBox2,
  IncentivesBox2Paragraph,
} from '../Styles/IncentiveSection.style';
import Stepper from '../../common/Stepper';
import { StepperDataProps } from '../../../types/Stepper';
import SearchIcon from '../../../assets/search.png';
import Lock1Icon from '../../../assets/Lock1.svg';
import { TokenInfo } from '../../../constants/tokens/type';
import { useEffect, useState } from 'react';
import contractAddresses from '../../../constants/contract-address/address';
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';
import { useVoterContract } from '../../../hooks/useVoterContract';
import { Address } from 'viem';
import { parseAmounts } from '../../../utils/transaction/parseAmounts';
import { useTokenAllowance } from '../../../hooks/useTokenAllowance';
import { erc20Abi } from '../../../constants/abis/erc20';
import RedLockIcon from '../../../assets/lock.png';
import gaugeFoundIcon from '../../../assets/gaugeFound.svg';
import gaugeNotFoundIcon from '../../../assets/gaugeNotFound.svg';
import UnLockIcon from '../../../assets/lockgradient.png';
import { GlobalButton } from '../../common/index';
import { useBribeVotingReward } from '../../../hooks/useBribeVotingReward';
import SuccessPopup from '../../common/SucessPopup';
import { AddressZero } from '@ethersproject/constants';
import { useIncentiveStore } from '../../../store/slices/useIncentiveStore';
import { useCheckAllowance } from '../../../hooks/useCheckAllowance';
import { useAccount } from '../../../hooks/useAccount';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';
import { useRootStore } from '../../../store/root';
import { LoadingSpinner } from '../../common/Loader';
import SucessDepositIcon from '../../../assets/gradient-party-poper.svg';
import { useNavigate } from 'react-router-dom';
import { calculateTimeLeft } from '../../../utils/common/voteTenex';

interface IncentiveRightContent {
  InsentiveFormValue: string;
  tokenSymbol: TokenInfo | undefined;
  poolData: LiquidityPoolNewType[];
}

const IncentiveRightContent: React.FC<IncentiveRightContent> = ({
  InsentiveFormValue,
  tokenSymbol,
  poolData,
}) => {
  // const [isAllowingToken, setIsAllowingToken] = useState(false);
  // const [isTokenAllowed, setIsTokenAllowed] = useState(false);
  const [isGaugeCreated, setIsGaugeCreated] = useState(false);
  const [isGaugeBeingCreated, setIsGaugeBeingCreated] = useState(false);
  const { address } = useAccount();
  const Navigate = useNavigate();
  const [epochEnd, setEpochEnd] = useState<number | null>(null);
  const { epochVoteEnd } = useVoterContract();
  const timestamp = Math.floor(Date.now() / 1000);
  const { gaugeAddress, bribeAddress, setGaugeAddress, setBribeAddress } =
    useIncentiveStore();

  const [isAllowingToken, setIsAllowingToken] = useState(false);
  const [isTokenAllowed, setIsTokenAllowed] = useState(false);
  const [isIncentiveAdded, setIsIncentiveAdded] = useState(false);

  const { transactionStatus, setTransactionStatus } = useRootStore();

  const { approveAllowance } = useTokenAllowance(
    tokenSymbol!.address,
    erc20Abi
  );

  useEffect(() => {
    const fetchEpochVoteEnd = async () => {
      try {
        const epochEndResult = await epochVoteEnd(timestamp);
        const timeLeft = calculateTimeLeft(Number(epochEndResult));
        if (timeLeft) {
          setEpochEnd(timeLeft.days);
        }
      } catch (error) {
        console.error('Error fetching epoch vote end:', error);
      }
    };

    void fetchEpochVoteEnd();
  }, [timestamp, epochVoteEnd]);

  useCheckAllowance(
    tokenSymbol!,
    InsentiveFormValue.toString(),
    address!,
    bribeAddress,
    setIsTokenAllowed
  );

  const { notifyRewardAmount } = useBribeVotingReward(bribeAddress);

  const { createGauge, gauges, gaugeToBribe } = useVoterContract();

  const handleCreateGauge = async () => {
    try {
      setIsGaugeBeingCreated(true);
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      const tx = await createGauge(
        contractAddresses.PoolFactory,
        poolData[0]?.id as Address
      );
      if (tx) {
        await getGaugeAddress();
        if (isGaugeCreated) {
          setIsGaugeBeingCreated(false);
          setTransactionStatus(TransactionStatus.DONE);
          setTimeout(() => {
            setTransactionStatus(TransactionStatus.IDEAL);
          }, TRANSACTION_DELAY);
        }
      }
    } catch (error) {
      console.error('Error during token approval', error);
      setTransactionStatus(TransactionStatus.IDEAL);
    }
  };

  const getGaugeAddress = async () => {
    try {
      const gaugeAddress = await gauges(poolData[0]?.id as Address);
      if (gaugeAddress != AddressZero && gaugeAddress != undefined) {
        setGaugeAddress(gaugeAddress);
        setIsGaugeCreated(true);
      } else {
        setGaugeAddress(AddressZero);
        setIsGaugeCreated(false);
      }
    } catch (error) {
      setIsGaugeCreated(false);
      console.error('Error creating gauge:', error);
    }
  };

  useEffect(() => {
    void getGaugeAddress();
    if (gaugeAddress != AddressZero && gaugeAddress != undefined) {
      gaugeToBribe(gaugeAddress)
        .then((bribeAddress) => {
          if (bribeAddress) {
            setIsGaugeBeingCreated(false);
            setBribeAddress(bribeAddress);
          }
        })
        .catch((error) => {
          console.log('error loading bribe address', error);
        });
    }
  }, [InsentiveFormValue, gaugeAddress, gaugeToBribe]);

  const handleAllowance = async () => {
    setIsAllowingToken(true);
    setTransactionStatus(TransactionStatus.IN_PROGRESS);
    try {
      const amount = parseAmounts(
        Number(InsentiveFormValue),
        tokenSymbol?.decimals
      );
      if (bribeAddress && amount) {
        const result = await approveAllowance(bribeAddress, amount.toString());
        setIsTokenAllowed(result ? true : false);
      }
      setTransactionStatus(TransactionStatus.DONE);
      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
      }, TRANSACTION_DELAY);
      setIsAllowingToken(false);
    } catch (error) {
      console.error('Error providing allowance for adding incentives');
      setTransactionStatus(TransactionStatus.IDEAL);
      setIsAllowingToken(false);
    }
  };

  const handleAddIncentive = async () => {
    setTransactionStatus(TransactionStatus.IN_PROGRESS);
    const amount = parseAmounts(
      Number(InsentiveFormValue),
      tokenSymbol?.decimals
    );
    if (tokenSymbol && amount) {
      const result = await notifyRewardAmount(tokenSymbol.address, amount);
      if (result) {
        setTransactionStatus(TransactionStatus.DONE);
        setIsIncentiveAdded(true);
      } else {
        setTimeout(
          () => setTransactionStatus(TransactionStatus.IDEAL),
          TRANSACTION_DELAY
        );
      }
    }
  };

  const handleDashboard = () => {
    Navigate('/dashboard');
  };

  const LockInstructionData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: {
        labels: 'Select the liquidity pool to incentivize.',
      },
    },
    {
      step: 2,
      descriptions: {
        labels: 'Select the token you want to use for the incentive.',
      },
    },
    {
      step: 3,
      descriptions: { labels: 'Specify the amount of your incentive.' },
    },
  ];

  const IncentiveData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: {
        labels: !isGaugeCreated
          ? `Create gauge for the ${poolData[0]?.name} pool`
          : `Gauge is created for the ${poolData[0]?.name} pool`,
      },
      icon: !isGaugeCreated ? gaugeNotFoundIcon : gaugeFoundIcon,
      buttons: !isGaugeCreated
        ? {
            label: `Create gauge for ${poolData[0]?.token0.symbol}-${poolData[0]?.token1.symbol}`,
            icon: Lock1Icon,
            onClick: handleCreateGauge,
            tooltip: `Click to allow ${poolData[0]?.token0.symbol}-${poolData[0]?.token1.symbol} transactions`,
            disabled: isGaugeBeingCreated,
            inProgress: isGaugeBeingCreated,
          }
        : undefined,
      actionCompleted: isGaugeBeingCreated && !isGaugeCreated,
    },
    {
      step: 2,
      descriptions: {
        labels: isTokenAllowed
          ? `Allowance granted for ${tokenSymbol?.symbol}`
          : `Allowance not granted for ${tokenSymbol?.symbol}`,
      },
      icon: !isTokenAllowed ? RedLockIcon : UnLockIcon,
      buttons:
        !isTokenAllowed && bribeAddress != AddressZero
          ? {
              label: `Allow ${tokenSymbol?.symbol}`,
              icon: Lock1Icon,
              onClick: handleAllowance,
              tooltip: `Click to allow ${tokenSymbol?.symbol} transactions`,
              inProgress: isAllowingToken,
              disabled: isAllowingToken,
            }
          : undefined,
    },
    {
      step: 2,
      descriptions: {
        labels: isIncentiveAdded
          ? 'Incentive Added'
          : 'Waiting for next actions...',
      },
      icon: !isIncentiveAdded ? SearchIcon : SucessDepositIcon,
      actionCompleted: !isIncentiveAdded,
    },
  ];

  return (
    <IncentiveleftBarBox1 height="528px" width="440px">
      <IncentivesBox2>Incentivize</IncentivesBox2>
      <IncentivesBox2Paragraph>
        Voting and adding incentives for this epoch ends in{' '}
        {epochEnd && epochEnd > 1 ? epochEnd + ' days' : epochEnd + ' day'} and
        there will be 8,984,340.1 TENEX distributed to all liquidity providers.
        By providing an incentive, you draw more liquidity providers to this
        pool.
      </IncentivesBox2Paragraph>
      <Stepper
        data={InsentiveFormValue ? IncentiveData : LockInstructionData}
      />
      {isTokenAllowed &&
        !isIncentiveAdded &&
        isGaugeCreated &&
        InsentiveFormValue != '0' && (
          <GlobalButton
            width="100%"
            height="48px"
            margin="0px"
            onClick={() => {
              handleAddIncentive()
                .then(() => {
                  <SuccessPopup message="Incentive added Successfully" />;
                })
                .catch((error) => {
                  console.error('Error adding Incentive:', error);
                });
            }}
            disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
          >
            {transactionStatus === TransactionStatus.IN_PROGRESS ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center', // Center items horizontally
                  alignItems: 'center', // Center items vertically
                  gap: '15px',
                }}
              >
                <LoadingSpinner width="10px" height="10px" />
                <p>Adding</p>
              </div>
            ) : (
              <p>Add Incentive</p>
            )}
          </GlobalButton>
        )}
      {isIncentiveAdded && (
        <SuccessPopup message="Incentive added Successfully" />
      )}

      {isIncentiveAdded && (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={handleDashboard}
        >
          Go to Dashboard
        </GlobalButton>
      )}
    </IncentiveleftBarBox1>
  );
};

export default IncentiveRightContent;
