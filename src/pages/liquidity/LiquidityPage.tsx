import React from 'react';
// import CommingSoonComponent from '../../components/ComingsoonComponent';

import { DefaultTheme } from '../../styles/Theme';
import styled from 'styled-components';
import ManagePool from '../../components/ManageLiquidity/ManagePool';

const LiquidityContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
  @media (max-width: 900px) {
    display: inline;
    text-align: -webkit-center;
  }
`;
const LiquidityPage: React.FC = () => {
  return (
    <LiquidityContainer>
      <ManagePool />
    </LiquidityContainer>
  );
};

export default LiquidityPage;
