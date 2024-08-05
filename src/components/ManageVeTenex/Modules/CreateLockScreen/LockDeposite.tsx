import styled from 'styled-components';
import DepositeInstruction from '../../../Liquidity/ManageLiquidity/modules/DepositeInstruction';

interface Data {
  step: number;
  descriptions: string[];
}

const H1 = styled.section`
  font-family: Kanit;
  font-size: 30px;
  font-weight: 300;
  line-height: 53.82px;
  text-align: left;
`;

const StyledDepositContainer = styled.div`
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  width: 40%;
  border-radius: 15px;
  padding: 20px;

  @media only screen and (max-width: 1100px) {
    width: 40%;
    gap: 10px;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

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
      <H1>New Deposit</H1>
      <DepositeInstruction data={data} />
    </StyledDepositContainer>
  );
};

export default LockDeposite;
