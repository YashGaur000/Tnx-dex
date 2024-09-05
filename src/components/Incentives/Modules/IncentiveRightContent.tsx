import {
  IncentiveLeftBarBox1,
  IncentivesBox2,
  IncentivesBox2Paragraph,
} from '../Styles/IncentiveSection.style';
import Stepper from '../../common/Stepper';
import { StepperDataProps } from '../../../types/Stepper';
import LockIcon from '../../../assets/lock.png';
import SearchIcon from '../../../assets/search.png';
import Lock1Icon from '../../../assets/Lock1.svg';

interface IncentiveRightContent {
  InsentiveFormValue: number;
  tokenSymbol: string;
}

const IncentiveRightContent: React.FC<IncentiveRightContent> = ({
  InsentiveFormValue,
  tokenSymbol,
}) => {
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
      descriptions: { labels: `Allowance not granted for ${tokenSymbol}` },
      icon: LockIcon,
      buttons: {
        label: `Allow ${tokenSymbol}`,
        icon: Lock1Icon,

        tooltip: `Click to allow ${tokenSymbol} transactions`,
      },
    },
    {
      step: 2,
      descriptions: { labels: 'Waiting for next actions...' },
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
        data={InsentiveFormValue < 100 ? LockInstructionData : IncentiveData}
      />
    </IncentiveLeftBarBox1>
  );
};

export default IncentiveRightContent;
