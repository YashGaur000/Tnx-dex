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
        Incentives are usually provided by the protocols. By continuing with the
        next steps you acknowledge that you understand the mechanics of the
        protocol and that after depositing any rewards as incentives you
        won&apos;t be able to withdraw them.
      </IncentivesBox2Paragraph>
      <IncentivesBox2Paragraph>
        By providing an incentive, you may draw more liquidity providers. Votes
        are a decisive factor on how much emissions a liquidity pool will get
        next epoch. The more emissions are flowing to a liquidity pool, the more
        rewards for those who provide liquidity for the pool.
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
