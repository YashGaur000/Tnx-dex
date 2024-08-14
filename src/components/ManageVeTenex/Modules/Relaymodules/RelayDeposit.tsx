import Stepper from '../../../common/Stepper';
import { StyledDepositContainer } from '../../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import { LockHeaderTitle } from '../../Styles/ManageVetenex.style';
import LockIcon from '../../../../assets/lock.png';
import SearchIcon from '../../../../assets/search.png';
import CheckIcon from '../../../../assets/check.svg';
interface Data {
  step: number;
  icon?: string;
  descriptions: string[];
}
const RelayDeposit = () => {
  const RelayDepositData: Data[] = [
    {
      step: 1,
      descriptions: ['Select the Lock you want to deposit'],
      icon: LockIcon,
    },
    {
      step: 2,
      descriptions: ['Pool price tick at 75147'],
      icon: CheckIcon,
    },
    {
      step: 3,
      descriptions: ['Waiting for next actions...'],
      icon: SearchIcon,
    },
  ];

  return (
    <StyledDepositContainer>
      <LockHeaderTitle fontSize={24}>New Deposit</LockHeaderTitle>
      <Stepper data={RelayDepositData} />
    </StyledDepositContainer>
  );
};

export default RelayDeposit;
