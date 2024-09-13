import { StepperDataProps } from '../../../../../types/Stepper';
import Stepper from '../../../../common/Stepper';
import { StyledDepositContainer } from '../../../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import {
  ImageContainer,
  LockHeaderTitle,
} from '../../../../ManageVeTenex/Styles/ManageVetenex.style';
import DateTimeIcon from '../../../../../assets/date-time.svg';
import WaitingIcon from '../../../../../assets/search.png';
import VotingPowerIcon from '../../../../../assets/star.svg';
import InformIcon from '../../../../../assets/information.svg';
import { GlobalButton } from '../../../../common';
import { SteperWrapper, TipsContainer } from '../styles/Extendlock.style';
const ExtendStepper = () => {
  const ExtendStepperData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: 'New lock time Tue, 08 Aug 2028 00:00:00 GMT ' },
      icon: DateTimeIcon,
    },
    {
      step: 2,
      descriptions: { labels: 'New estimated voting power 50.0 veTENEX' },
      icon: VotingPowerIcon,
    },
    {
      step: 3,
      descriptions: { labels: 'Waiting for next actions...' },
      icon: WaitingIcon,
    },
  ];
  return (
    <StyledDepositContainer>
      <LockHeaderTitle fontSize={24}>Extend Lock</LockHeaderTitle>
      <SteperWrapper>
        <Stepper data={ExtendStepperData} />
        <GlobalButton>Extend</GlobalButton>
      </SteperWrapper>
      <TipsContainer>
        <ImageContainer width="24px" height="24px" src={InformIcon} />
        <LockHeaderTitle fontSize={14}>
          You can extend the lock or increase the lock amount. These actions
          will increase your voting power. The maximum lock time is 4 years!
        </LockHeaderTitle>
      </TipsContainer>
    </StyledDepositContainer>
  );
};

export default ExtendStepper;
