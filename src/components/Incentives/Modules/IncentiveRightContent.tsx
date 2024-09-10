import {
  IncentiveleftBarBox1,
  IncentivesBox2,
  IncentivesBox2Paragraph,
} from '../Styles/IncentiveSection.style';
import Stepper from '../../common/Stepper';
import { StepperDataProps } from '../../../types/Stepper';
import LockIcon from '../../../assets/lock.png';
import SearchIcon from '../../../assets/search.png';
import Lock1Icon from '../../../assets/Lock1.svg';
import { TokenInfo } from '../../../constants/tokens';
import { useEffect, useState } from 'react';
import contractAddresses from '../../../constants/contract-address/address';
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';
import { useVoterContract } from '../../../hooks/useVoterContract';
import { Address } from 'viem';

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

  // const { approveAllowance: approveAllowance1 } = useTokenAllowance(
  //   tokenSymbol!.address,
  //   abi
  // );

  const { createGauge, gauges } = useVoterContract();
  console.log(gaugeAddress);

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
        console.log('gauge found :', gaugeAddress);
        setGaugeAddress(gaugeAddress);
        setIsGaugeCreated(true);
      }
    } catch (error) {
      console.error('Error creating gauge:', error);
    }
  };

  useEffect(() => {
    void getGaugeAddress();
  }, [InsentiveFormValue]);

  // const handleAllowance = () => {
  // setIsAllowingToken(true);
  // try {
  //   console.log("allowance",tokenSymbol)
  //   const amount1InWei =
  //   InsentiveFormValue &&
  //     ethers.parseUnits(InsentiveFormValue.toString(), tokenSymbol?.decimals);
  //   if (amount1InWei && tokenSymbol?.address) {
  //     if (tokenSymbol?.symbol === 'WETH') {
  //       console.log("not allowed ")
  //     } else {
  //       await approveAllowance1(contractAddresses.VotingRewardsFactory, amount1InWei.toString());
  //       setIsTokenAllowed(true);
  //     }
  //   }
  // } catch (error) {
  //   console.error('Error during token approval', error);
  // } finally {
  //   setIsAllowingToken(false); // Re-enable the button after the operation completes
  // }
  // };
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
      icon: LockIcon,
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
        labels: `Allowance not granted for ${tokenSymbol?.symbol}`,
      },
      icon: LockIcon,
      buttons: {
        label: `Allow ${tokenSymbol?.symbol}`,
        icon: Lock1Icon,
        // onClick: handleAllowance,
        tooltip: `Click to allow ${tokenSymbol?.symbol} transactions`,
      },
    },
    {
      step: 2,
      descriptions: { labels: 'Waiting for next actions...' },
      icon: SearchIcon,
    },
  ];

  return (
    <IncentiveleftBarBox1>
      <IncentivesBox2>Incentivize</IncentivesBox2>
      <IncentivesBox2Paragraph>
        Voting and adding incentives for this epoch ends in 3 days and there
        will be 8,984,340.1 TENEX distributed to all liquidity providers. By
        providing an incentive, you draw more liquidity providers to this pool.
      </IncentivesBox2Paragraph>
      <Stepper
        data={InsentiveFormValue < 100 ? LockInstructionData : IncentiveData}
      />
    </IncentiveleftBarBox1>
  );
};

export default IncentiveRightContent;
