import React from 'react';

import Deposite from './Deposite';

import DepositeInstruction from './DepositeInstruction';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import { StyledDepositContainer } from '../styles/LiquidityDeposit.style';
import { ethers } from 'ethers';

interface DepositComponentProps {
  token1Value: ethers.Numeric;
  token2Value: ethers.Numeric;
  totalBalanceToken1: ethers.Numeric;
  totalBalanceToken2: ethers.Numeric;
}

const DepositeComponent: React.FC<DepositComponentProps> = ({
  token1Value,
  token2Value,
  totalBalanceToken1,
  totalBalanceToken2,
}) => {
  const checkForToken1 =
    Number(token1Value) <= Number(totalBalanceToken1) && token1Value != 0;
  const checkForToken2 =
    Number(token2Value) <= Number(totalBalanceToken2) && token2Value != 0;
  return (
    <StyledDepositContainer>
      <LiquidityHeaderTitle fontSize={24}>New Deposit</LiquidityHeaderTitle>
      {checkForToken1 || checkForToken2 ? (
        <Deposite
          disabled1={!checkForToken1}
          disabled2={!checkForToken2}
          amount1={token1Value}
          amount2={token2Value}
        />
      ) : (
        <DepositeInstruction />
      )}
    </StyledDepositContainer>
  );
};

export default DepositeComponent;
