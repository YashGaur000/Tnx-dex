import React from 'react';
import styled from 'styled-components';
import { GradientSpan } from '../common/Buttons/GradientButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar';
import { DefaultTheme } from '../../styles/Theme';

const LiquidityPoolContainer = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  margin-top: -90px;
`;

const PoolTitleBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  line-height: 40px;
  padding: 10px;
`;

export const Title = styled.p<{ fontSize: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

// const LiquidityPoolBox = styled.div<{ theme: DefaultTheme}>`
//     display: flex;
// `;

const LiquidityBarBox = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
`;

const LiquidityTabBar = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 20px;
`;

const LiquidityTabBar2 = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 20px;
  justify-content: left;
  margin-left: 140px;
`;

export const LiquidityAllPoolsTabs = styled.button<{
  isconnected?: string;
  theme: DefaultTheme;
  Width: number;
}>`
  padding: 4px;
  justify-content: center;
  display: flex;
  width: ${({ Width }) => Width}%;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.buttonBackground
        : theme.colors.background},
    ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.background
        : theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;

  color: ${({ theme, isconnected }) =>
    isconnected === 'true' ? theme.colors.text : theme.colors.buttonBackground};
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.text};
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

  &:hover span {
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
  }
`;

const LiquidityPoolBar: React.FC = () => {
  return (
    <LiquidityPoolContainer>
      <PoolTitleBox>
        <Title fontSize={24}>Liquidity Pools</Title>
      </PoolTitleBox>
      <LiquidityBarBox>
        <LiquidityTabBar>
          <LiquidityAllPoolsTabs Width={12}>
            <GradientSpan>All Pools</GradientSpan>
          </LiquidityAllPoolsTabs>
          <LiquidityAllPoolsTabs Width={12}>
            <GradientSpan>Stable</GradientSpan>
          </LiquidityAllPoolsTabs>
          <LiquidityAllPoolsTabs Width={12}>
            <GradientSpan>Volatile</GradientSpan>
          </LiquidityAllPoolsTabs>
          <LiquidityAllPoolsTabs Width={15}>
            <GradientSpan>Concentrated</GradientSpan>
          </LiquidityAllPoolsTabs>
          <LiquidityAllPoolsTabs Width={12}>
            <GradientSpan>Low TVL</GradientSpan>
          </LiquidityAllPoolsTabs>
        </LiquidityTabBar>
        <LiquidityTabBar2>
          <LiquidityAllPoolsTabs Width={15}>
            <GradientSpan>
              Active <FontAwesomeIcon icon={faChevronDown} />
            </GradientSpan>
          </LiquidityAllPoolsTabs>
          <SearchBar></SearchBar>
        </LiquidityTabBar2>
      </LiquidityBarBox>
    </LiquidityPoolContainer>
  );
};

export default LiquidityPoolBar;
