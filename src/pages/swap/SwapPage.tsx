import React from 'react';
import styled from 'styled-components';
import SwapForm from '../../components/Swap/modules/SwapForm';

import { DefaultTheme } from '../../styles/Theme';

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

const SwapPage: React.FC = () => {
  return (
    <SwapContainer>
      <SwapForm />
    </SwapContainer>
  );
};

export default SwapPage;
