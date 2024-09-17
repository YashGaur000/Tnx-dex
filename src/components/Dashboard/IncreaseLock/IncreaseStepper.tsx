import { StepperDataProps } from '../../../types/Stepper';
import Stepper from '../../common/Stepper';
import { StyledDepositContainer } from '../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import { LockHeaderTitle } from '../../ManageVeTenex/Styles/ManageVetenex.style';
import VotingPowerIcon from '../../../assets/star-gradient.svg';
import LockIcon from '../../../assets/LockSucess.svg';
import WaitingIcon from '../../../assets/search.png';
import { GlobalButton } from '../../common';
const IncreaseStepper = () => {
  const IncreaseStepperData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: { labels: 'Depositing TENEX ' },
      icon: LockIcon,
    },
    {
      step: 2,
      descriptions: { labels: 'New estimated voting power 50.0 veTENEX' },
      icon: VotingPowerIcon,
    },
    {
      step: 3,
      descriptions: { labels: 'Allowed the contracts to access TENEX' },
      icon: LockIcon,
    },
    {
      step: 4,
      descriptions: { labels: 'Waiting for next actions...' },
      icon: WaitingIcon,
    },
  ];

  return (
    <StyledDepositContainer>
      <LockHeaderTitle fontSize={24}>Increase lock</LockHeaderTitle>
      <Stepper data={IncreaseStepperData} />
      <GlobalButton margin="0px">Merge </GlobalButton>
    </StyledDepositContainer>
  );
};

export default IncreaseStepper;
