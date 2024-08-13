import React from 'react';

import Deposite from './Deposite';

import DepositeInstruction from './DepositeInstruction';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import { StyledDepositContainer } from '../styles/LiquidityDeposit.style';

interface DepositComponentProps {
  tokenValue: number;
}

const DepositeComponent: React.FC<DepositComponentProps> = ({ tokenValue }) => {
  return (
    <StyledDepositContainer>
      <LiquidityHeaderTitle fontSize={24}>New Deposit</LiquidityHeaderTitle>
      {tokenValue > 100 ? <Deposite /> : <DepositeInstruction />}
    </StyledDepositContainer>
  );
};

export default DepositeComponent;
