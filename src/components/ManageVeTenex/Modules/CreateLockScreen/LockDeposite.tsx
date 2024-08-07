import Stepper from '../../../common/Stepper';
import { StyledDepositContainer } from '../../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import { LockHeaderTitle } from '../../Styles/ManageVetenex.style';

interface Data {
  step: number;
  descriptions: string[];
}

const LockDeposite = () => {
  const data: Data[] = [
    {
      step: 1,
      descriptions: ['Select the amount of TENEX you want to lock.'],
    },
    {
      step: 2,
      descriptions: [
        'Select the number of weeks. The minimum lock time is one week, and the maximum lock time is 4 years.',
      ],
    },
    {
      step: 3,
      descriptions: ['Confirm the locking!'],
    },
    {
      step: 4,
      descriptions: ['Your lock will be available in the dashboard.'],
    },
  ];
  return (
    <StyledDepositContainer>
      <LockHeaderTitle fontSize={36}>New Deposit</LockHeaderTitle>
      <Stepper data={data} />
    </StyledDepositContainer>
  );
};

export default LockDeposite;
