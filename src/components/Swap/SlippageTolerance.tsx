import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

const SlippageWrapper = styled.div<{ display: string; theme: DefaultTheme }>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.card};
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  margin: 15px 0px;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const SidebarTitle = styled.h2<{ fontSize: number; theme: DefaultTheme }>`
  font-family: 'Kanit', sans-serif;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

const ToleranceButtons = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
`;

const ToleranceButton = styled.button<{ theme: DefaultTheme }>`
  flex: 1;
  padding: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.greyDark};
  border: 1px solid ${({ theme }) => theme.colors.whiteBorder};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.hover};
  }
`;

const SlippageTolerance: React.FC = () => (
  <SlippageWrapper display="flow">
    <SidebarTitle fontSize={16}>Slippage Tolerance</SidebarTitle>
    <ToleranceButtons>
      <ToleranceButton>0.1%</ToleranceButton>
      <ToleranceButton>0.5%</ToleranceButton>
      <ToleranceButton>1.0%</ToleranceButton>
      <ToleranceButton>2.0%</ToleranceButton>
      <ToleranceButton>5.0%</ToleranceButton>
    </ToleranceButtons>
  </SlippageWrapper>
);

export default SlippageTolerance;
