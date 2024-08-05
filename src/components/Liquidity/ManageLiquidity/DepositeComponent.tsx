import React from 'react';
import styled from 'styled-components';
import DepositeInstruction from './DepositeInstruction';
import Deposite from './Deposite';

// Rename interface to avoid naming conflict with styled component
interface DepositComponentProps {
  tokenValue: number;
}
interface Data {
  step: number;
  descriptions: string[];
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

const DepositeComponent: React.FC<DepositComponentProps> = ({ tokenValue }) => {
  const data: Data[] = [
    {
      step: 1,
      descriptions: [
        "You are depositing liquidity into a Basic pool. Also known as the constant product pool or AMM, the liquidity in these pools is added over the full price range '(0 to ∞)' and requires little to no maintenance.",
        'The pool liquidity is kept in balance using the formula x*y + y³x ≥ k.',
      ],
    },
    {
      step: 2,
      descriptions: [
        'Fill in the deposit amounts. We calculate the deposit amounts to match the liquidity reserves in the pool. Pools without liquidity will use your deposit for the initial pool price.',
      ],
    },
    {
      step: 3,
      descriptions: ['After you deposit, you can stake the liquidity.'],
    },
  ];

  return (
    <StyledDepositContainer>
      <H1>New Deposit</H1>
      {tokenValue > 100 ? <Deposite /> : <DepositeInstruction data={data} />}
    </StyledDepositContainer>
  );
};

export default DepositeComponent;
