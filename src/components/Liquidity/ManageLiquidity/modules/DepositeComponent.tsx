import React from 'react';

import Deposite from './Deposite';

import DepositeInstruction from './DepositeInstruction';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import { StyledDepositContainer } from '../styles/LiquidityDeposit.style';
import { ethers } from 'ethers';
interface DepositComponentProps {
  token1Value: ethers.Numeric;
  token2Value: ethers.Numeric;
}

const DepositeComponent: React.FC<DepositComponentProps> = ({
  token1Value,
  token2Value,
}) => {
  return (
    <StyledDepositContainer>
      <LiquidityHeaderTitle fontSize={36}>New Deposit</LiquidityHeaderTitle>
      {token1Value > 100 && token2Value > 100 ? (
        <Deposite />
      ) : (
        <DepositeInstruction />
      )}
    </StyledDepositContainer>
  );
};

export default DepositeComponent;
