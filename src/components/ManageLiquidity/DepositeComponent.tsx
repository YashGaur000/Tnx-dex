import styled from 'styled-components';
import DepositeInstruction from './DepositeInstruction';

const H1 = styled.section`
  font-family: Kanit;
  font-size: 30px;
  font-weight: 300;
  line-height: 53.82px;
  text-align: left;
`;

const DepositContainer = styled.div`
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);

  width: 40%;
  border-radius: 15px;
  padding: 20px;

  @media only screen and (max-width: 800px) {
    width: 90%;
    margin: auto;
  }
`;

const DepositeComponent = () => {
  return (
    <DepositContainer>
      <H1>New Deposit</H1>
      <DepositeInstruction />
    </DepositContainer>
  );
};

export default DepositeComponent;
