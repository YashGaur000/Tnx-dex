import React from 'react';
import { styled } from 'styled-components';
import { GradientSpan } from '../common/Buttons/GradientButton';
import { DefaultTheme } from '../../styles/Theme';
// import theme from '../../styles/Theme';

const LiquidityPoolContainer = styled.div<{ theme: DefaultTheme }>`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    width: 94%;
    height: 500px;
    border-radius: 16px;
    padding: 50px 60px 70px 50px;
    text-align: left;
    background: ${({ theme }) => theme.colors.card};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    

     @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
`;

const LiquidityPoolTabsBox = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const LiquidityPoolTitleBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
`;

const LiquidityPoolTitle = styled.p<{ fontSize?: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize}px;
`;

const LiquidityPoolMetricesTitle = styled.p<{
  fontSize?: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  text-align: right;
`;

const PoolTableRow = styled.div<{ theme: DefaultTheme }>`
  display: flex;
`;

// const

const LiquidityPoolTable: React.FC = () => {
  return (
    <LiquidityPoolContainer>
      <LiquidityPoolTabsBox>
        <LiquidityPoolTitleBox>
          <LiquidityPoolTitle fontSize={20}>
            <GradientSpan>Liquidity Pool</GradientSpan>
          </LiquidityPoolTitle>
        </LiquidityPoolTitleBox>
        <LiquidityPoolMetricesTitle fontSize={20}>
          <GradientSpan>APR</GradientSpan>
        </LiquidityPoolMetricesTitle>
        <LiquidityPoolMetricesTitle fontSize={20}>
          <GradientSpan>Volume</GradientSpan>
        </LiquidityPoolMetricesTitle>
        <LiquidityPoolMetricesTitle fontSize={20}>
          <GradientSpan>Fees</GradientSpan>
        </LiquidityPoolMetricesTitle>
        <LiquidityPoolMetricesTitle fontSize={20}>
          <GradientSpan>Pool Balance</GradientSpan>
        </LiquidityPoolMetricesTitle>
      </LiquidityPoolTabsBox>
      <PoolTableRow></PoolTableRow>
    </LiquidityPoolContainer>
  );
};

export default LiquidityPoolTable;
