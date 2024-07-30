import React from 'react';
import styled from 'styled-components';
import SwapForm from '../../components/Swap/modules/SwapForm';
import Sidebar from '../../components/Swap/modules/Sidebar';
import { DefaultTheme } from '../../styles/Theme';
import LiquityRouting from '../../components/Swap/modules/LiquityRouting';

const SwapContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
  color: ${({ theme }) => theme.colors.text};
  height: 150vh;
  @media (max-width: 1024px) {
    display: inline;
    text-align: -webkit-center;
  }
`;

const SwapFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SwapPage: React.FC = () => {
  return (
    <SwapContainer>
      <SwapFormContainer>
        <SwapForm />
        <LiquityRouting />
      </SwapFormContainer>
      <Sidebar />
    </SwapContainer>
  );
};

export default SwapPage;
