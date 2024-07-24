import React, { useState } from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import TransactionDeadline from './TransactionDeadline';
import SlippageTolerance from './SlippageTolerance';
import AllowUnsafeTrades from './AllowUnsafeTrades';

const SidebarContainer = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.cardLight};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  width: 440px;
  margin-left: 24px;
  height: 840px;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
    margin-left: 0px;
  }
`;

const SidebarTitle = styled.h2<{ fontSize: number; theme: DefaultTheme }>`
  font-family: 'Kanit', sans-serif;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

const SidebarList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: step-counter;
`;

const SidebarListItem = styled.li<{ theme: DefaultTheme }>`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.whiteBorder};
  margin-bottom: 20px;
  position: relative;
  padding-left: 30px;
  weight: 300;
  line-height: 20.93px;

  &:before {
    content: counter(step-counter);
    counter-increment: step-counter;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 14px;
    font-weight: bold;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
  }

  &:not(:last-child):after {
    content: '';
    position: absolute;
    left: 11px;
    top: 22px;
    width: 1px;
    height: calc(100% - 0px);
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.greyDark} 50%,
      transparent 50%
    );
    background-size: 1px 5px;
  }
`;

const Sidebar: React.FC = () => {
  const [isUnsafeTradesAllowed, setIsUnsafeTradesAllowed] = useState(false);

  const handleToggleChange = () => {
    setIsUnsafeTradesAllowed(!isUnsafeTradesAllowed);
  };

  return (
    <SidebarContainer>
      <SidebarTitle fontSize={24}>Instructions</SidebarTitle>
      <SidebarList>
        <SidebarListItem>
          Start by selecting the token to swap from and the amount you want to
          exchange.
        </SidebarListItem>
        <SidebarListItem>
          Pick the token you want to exchange for.
        </SidebarListItem>
        <SidebarListItem>The quote will be ready in a moment!</SidebarListItem>
        <SidebarListItem>
          Slippage tolerance 0.5% and transaction deadline 30 mins are set. To
          change, please click below.
        </SidebarListItem>
      </SidebarList>
      <SlippageTolerance />
      <TransactionDeadline />
      <AllowUnsafeTrades
        isChecked={isUnsafeTradesAllowed}
        handleToggle={handleToggleChange}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
