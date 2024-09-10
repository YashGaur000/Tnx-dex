import {
  IncentiveLeftBarBox1,
  IncentivesBox2,
  IncentivesBox2Paragraph,
} from '../Styles/IncentiveSection.style';
import Stepper from '../../common/Stepper';
import { StepperDataProps } from '../../../types/Stepper';
import SearchIcon from '../../../assets/search.png';
import Lock1Icon from '../../../assets/Lock1.svg';
import { TokenInfo } from '../../../constants/tokens';
import { useEffect, useState } from 'react';
import contractAddresses from '../../../constants/contract-address/address';
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';
import { useVoterContract } from '../../../hooks/useVoterContract';
import { Address } from 'viem';
import { parseAmounts } from '../../../utils/transaction/parseAmounts';
import { useTokenAllowance } from '../../../hooks/useTokenAllowance';
import { erc20Abi } from '../../../constants/abis/erc20';
import RedLockIcon from '../../../assets/lock.png';
import UnLockIcon from '../../../assets/unlock.png';
import { GlobalButton } from '../../common/index';
import { useBribeVotingReward } from '../../../hooks/useBribeVotingReward';
import SuccessPopup from '../../common/SucessPopup';

interface IncentiveRightContent {
  InsentiveFormValue: number;
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
  const [gaugeAddress, setGaugeAddress] = useState<Address>();
  const [bribeAddress, setBribeAddress] = useState<string>('');

  const [isAllowingToken, setIsAllowingToken] = useState(false);
  const [isTokenAllowed, setIsTokenAllowed] = useState(false);
  const [isIncentiveAdded, setIsIncentiveAdded] = useState(false);

  const { approveAllowance } = useTokenAllowance(
    tokenSymbol!.address,
    erc20Abi
  );

  const { notifyRewardAmount } = useBribeVotingReward(bribeAddress as Address);

  const { createGauge, gauges, gaugeToBribe } = useVoterContract();

  const handleCreateGauge = async () => {
    const gaugeAddress = await createGauge(
      contractAddresses.PoolFactory,
      poolData[0]?.id as Address
    );
    if (
      gaugeAddress != '0x0000000000000000000000000000000000000000' &&
      gaugeAddress != undefined
    ) {
      setIsGaugeCreated(true);
      setGaugeAddress(gaugeAddress);
    }
  };

  const getGaugeAddress = async () => {
    try {
      const gaugeAddress = await gauges(poolData[0]?.id as Address);
      if (
        gaugeAddress != '0x0000000000000000000000000000000000000000' &&
        gaugeAddress != undefined
      ) {
        setGaugeAddress(gaugeAddress);
        setIsGaugeCreated(true);
      }
    } catch (error) {
      console.error('Error creating gauge:', error);
    }
  };

  useEffect(() => {
    void getGaugeAddress();
    if (
      gaugeAddress != '0x0000000000000000000000000000000000000000' &&
      gaugeAddress != undefined
    ) {
      gaugeToBribe(gaugeAddress)
        .then((bribeAddress) => {
          setBribeAddress(bribeAddress as string);
        })
        .catch((error) => {
          console.log('error loading bribe address', error);
        });
    }
  }, [InsentiveFormValue, gaugeAddress, gaugeToBribe]);

  const handleAllowance = async () => {
    setIsAllowingToken(true);

    const amount = parseAmounts(InsentiveFormValue, tokenSymbol?.decimals);
    if (bribeAddress && amount) {
      const result = await approveAllowance(
        bribeAddress as Address,
        amount.toString()
      );
      setIsTokenAllowed(result ? true : false);
    }
  };

  const handleAddIncentive = async () => {
    const amount = parseAmounts(InsentiveFormValue, tokenSymbol?.decimals);
    if (tokenSymbol && amount) {
      const result = await notifyRewardAmount(tokenSymbol.address, amount);
      console.log(result);
      setIsIncentiveAdded(result ? true : false);
    }
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
          : `Gauge found for this Pool`,
      },
      icon: !isGaugeCreated ? RedLockIcon : UnLockIcon,
      buttons: !isGaugeCreated
        ? {
            label: `Create gauge for ${poolData[0]?.token0.symbol}-${poolData[0]?.token1.symbol}`,
            icon: Lock1Icon,
            onClick: handleCreateGauge,
            tooltip: `Click to allow ${poolData[0]?.token0.symbol}-${poolData[0]?.token1.symbol} transactions`,
          }
        : undefined,
    },
    {
      step: 2,
      descriptions: {
        labels: isTokenAllowed
          ? `Allowance granted for ${tokenSymbol?.symbol}`
          : `Allowance not granted for ${tokenSymbol?.symbol}`,
      },
      icon: !isTokenAllowed ? RedLockIcon : UnLockIcon,
      buttons: !isTokenAllowed
        ? {
            label: `Allow ${tokenSymbol?.symbol}`,
            icon: Lock1Icon,
            onClick: handleAllowance,
            tooltip: `Click to allow ${tokenSymbol?.symbol} transactions`,
            inProgress: isAllowingToken,
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
      icon: SearchIcon,
    },
  ];

  return (
    <IncentiveLeftBarBox1>
      <IncentivesBox2>Incentivize</IncentivesBox2>
      <IncentivesBox2Paragraph>
        Voting and adding incentives for this epoch ends in 3 days and there
        will be 8,984,340.1 TENEX distributed to all liquidity providers. By
        providing an incentive, you draw more liquidity providers to this pool.
      </IncentivesBox2Paragraph>
      <Stepper
        data={InsentiveFormValue <= 0 ? LockInstructionData : IncentiveData}
      />
      {isTokenAllowed && !isIncentiveAdded && (
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
        >
          Add incentive{' '}
        </GlobalButton>
      )}
    </IncentiveLeftBarBox1>
  );
};

export default IncentiveRightContent;
