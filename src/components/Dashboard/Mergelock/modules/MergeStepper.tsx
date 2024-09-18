import { StepperDataProps } from '../../../../types/Stepper';
import { GlobalButton } from '../../../common';
import Stepper from '../../../common/Stepper';
import { StyledDepositContainer } from '../../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';

import {
  SteperWrapper,
  TransferLockTitle,
} from '../../Extendlock/styles/Extendlock.style';
import { MergeStepperContainer } from '../styles/MergeLock.style';
import DateTimeIcon from '../../../../assets/date-time.svg';
// import DateTimeIconGradient from '../../../../assets/date-time-gradient.svg';
import WaitingIcon from '../../../../assets/search.png';
// import VotingPowerIconGradient from '../../../../assets/star-gradient.svg';
import VotingPowerIcon from '../../../../assets/star.svg';
import Lock from '../../../../assets/lock.png';
import { useState } from 'react';
import MergeLockSidebar from './MergeLockSidebar';
// import MergeLockSidebar from "./MergeLockSidebar"

const MergeStepper = () => {
  const [isvisblemergeStepper, setvisiblemergeStepper] =
    useState<boolean>(false);
  const handleMerge = () => {
    setvisiblemergeStepper(true);
  };
  const MergeStepperData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: 'Select the locks to merge first. ' },
      icon: Lock,
    },
    {
      step: 2,
      descriptions: { labels: 'New estimated lock time is 10 days.' },
      icon: DateTimeIcon,
    },
    {
      step: 3,
      descriptions: { labels: 'No Locks selected.' },
      icon: VotingPowerIcon,
    },
    {
      step: 4,
      descriptions: { labels: 'Waiting for next actions...' },
      icon: WaitingIcon,
    },
  ];

  return (
    <StyledDepositContainer>
      <MergeStepperContainer>
        <SteperWrapper gap={24}>
          <TransferLockTitle
            fontsize={24}
            color={isvisblemergeStepper ? '#FFFFFF' : '#EB5540'}
          >
            Merge
          </TransferLockTitle>

          {isvisblemergeStepper ? (
            <Stepper data={MergeStepperData} />
          ) : (
            <MergeLockSidebar />
          )}
        </SteperWrapper>
        <GlobalButton margin="0px" onClick={handleMerge}>
          {' '}
          {isvisblemergeStepper ? 'Merge' : 'Continue'}{' '}
        </GlobalButton>
      </MergeStepperContainer>
    </StyledDepositContainer>
  );
};

export default MergeStepper;
