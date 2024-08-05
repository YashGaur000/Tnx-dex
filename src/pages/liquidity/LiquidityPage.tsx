import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import LiquidityPool from '../../components/Liquidity/LiquidityHomePage/Modules/LiquidityPool';

const LiquidityContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;

  color: ${({ theme }) => theme.colors.text};
  height: 180vh;
  @media (max-width: 900px) {
    display: inline;
    text-align: -webkit-center;
  }
`;

const LiquidityPage: React.FC = () => {
  return (
    <LiquidityContainer>
      <LiquidityPool />
    </LiquidityContainer>
  );
};

export default LiquidityPage;
