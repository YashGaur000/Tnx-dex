import styled from 'styled-components';
import DepositeInstruction from './DepositeInstruction';
import Deposite from './Deposite';

// Rename interface to avoid naming conflict with styled component
interface DepositComponentProps {
  tokenValue: number;
}

// Styled section for H1
const H1 = styled.section`
  font-family: Kanit;
  font-size: 30px;
  font-weight: 300;
  line-height: 53.82px;
  text-align: left;
`;

// Styled container for Deposit
const StyledDepositContainer = styled.div`
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);

  width: 40%;
  border-radius: 15px;
  padding: 20px;

  @media only screen and (max-width: 1100px) {
    width: 50%;
    gap: 10px;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

// Use renamed interface for props typing
const DepositeComponent: React.FC<DepositComponentProps> = ({ tokenValue }) => {
  return (
    <StyledDepositContainer>
      <H1>New Deposit</H1>
      {tokenValue > 100 ? <Deposite /> : <DepositeInstruction />}
    </StyledDepositContainer>
  );
};

export default DepositeComponent;
