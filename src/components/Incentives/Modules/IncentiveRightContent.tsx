import {
  IncentiveLeftBarBox1,
  IncentivesBox2,
  IncentivesBox2Paragraph,
  IncentivizeOrderedList,
  IncentivizeListItem,
  IncentivizeText,
  IncentivizeTextCircle,
} from '../Styles/IncentiveSection.style';
import { GlobalButton } from '../../common';

const IncentiveRightContent: React.FC = () => {
  return (
    <IncentiveLeftBarBox1>
      <IncentivesBox2>Incentivize</IncentivesBox2>
      <IncentivesBox2Paragraph>
        Voting and adding incentives for this epoch ends in 3 days and there
        will be 8,984,340.1 TENEX distributed to all liquidity providers. By
        providing an incentive, you draw more liquidity providers to this pool.
      </IncentivesBox2Paragraph>
      <IncentivizeOrderedList>
        <IncentivizeListItem>
          <IncentivizeTextCircle>1</IncentivizeTextCircle>
          <IncentivizeText>
            Select the liquidity pool to incentivize.
          </IncentivizeText>
        </IncentivizeListItem>
        <IncentivizeListItem>
          <IncentivizeTextCircle>2</IncentivizeTextCircle>
          <IncentivizeText>
            Select the token you want to use for the incentive.
          </IncentivizeText>
        </IncentivizeListItem>
        <IncentivizeListItem>
          <IncentivizeTextCircle>3</IncentivizeTextCircle>
          <IncentivizeText>
            Specify the amount of your incentive.
          </IncentivizeText>
        </IncentivizeListItem>
      </IncentivizeOrderedList>
      <GlobalButton>Add Incentive</GlobalButton>
    </IncentiveLeftBarBox1>
  );
};

export default IncentiveRightContent;
