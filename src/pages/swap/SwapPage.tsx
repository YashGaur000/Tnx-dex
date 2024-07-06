import React from 'react';
import styled from 'styled-components';
import SwapForm from '../../components/Swap/SwapForm';
import Sidebar from '../../components/Swap/Sidebar';

const SwapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SwapPage: React.FC = () => {
  return (
    <SwapContainer>
      <SwapForm />
      <Sidebar />
    </SwapContainer>
  );
};

export default SwapPage;
