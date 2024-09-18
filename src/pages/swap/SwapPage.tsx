import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import SwapForm from '../../components/Swap/modules/SwapForm';
//import SwapForm from '../../components/common/InputForm';

const SwapContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 140px;
  padding-top: 40px;
  left: 100px;
  border: 2px red;
  gap: 20px;
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
  @media (max-width: 1024px) {
    display: inline;
    text-align: -webkit-center;
  }
`;

const SwapPage: React.FC = () => {
  return (
    <SwapContainer>
      <SwapForm />
    </SwapContainer>
  );
};

export default SwapPage;
