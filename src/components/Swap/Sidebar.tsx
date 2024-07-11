import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import SwitchComponent from './SwitchComponent';
import { DefaultTheme } from '../../styles/Theme';

const SidebarContainer = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.cardLight};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  width: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    width: 70%;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
  }
`;

const SidebarTitle = styled.h2<{ fontSize: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.greyDark};
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarListItem = styled.p<{ theme: DefaultTheme }>`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.greyDark};
  margin-bottom: 10px;
`;

const ToleranceButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ToleranceButton = styled.button<{ theme: DefaultTheme }>`
  flex: 1;
  padding: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.greyDark};
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.hover};
  }
`;

const SliderContainer = styled.div`
  margin-bottom: 20px;
`;

const Slider = styled.input`
  width: 100%;
  height: 2px;
  accent-color: darkcyan;
`;

const SlippageWrapper = styled.div<{ display: string; theme: DefaultTheme }>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.card};
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  margin: 15px 0px;
`;
const Text = styled.div<{ theme: DefaultTheme }>`
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.greyDark};
`;

const Align = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TimerButton = styled.button<{ theme: DefaultTheme }>`
  width: 74px;
  height: 32px;
  padding: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.greyDark};
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    &:hover {
      color: ${({ theme }) => theme.colors.text};
      border: 1px solid ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.hover};
    }
  }
`;

const ContentWrapper = styled.div``;

const Sidebar: React.FC = () => {
  const [isUnsafeTradesAllowed, setIsUnsafeTradesAllowed] = useState(false);

  const handleToggleChange = () => {
    setIsUnsafeTradesAllowed(!isUnsafeTradesAllowed);
  };
  return (
    <SidebarContainer>
      <SidebarTitle fontSize={36}>Swap</SidebarTitle>
      <SidebarList>
        <SidebarListItem>
          1. Start by selecting the token to swap from and the amount you want
          to exchange.
        </SidebarListItem>
        <SidebarListItem>
          2. Pick the token you want to exchange for.
        </SidebarListItem>
        <SidebarListItem>
          3. The quote will be ready in a moment!
        </SidebarListItem>
        <SidebarListItem>
          4. Slippage tolerance 0.5% and transaction deadline 30 mins are set.
          To change, please click below.
        </SidebarListItem>
      </SidebarList>
      <SlippageWrapper display="flow">
        <SidebarTitle fontSize={20}>Slippage Tolerance</SidebarTitle>
        <ToleranceButtons>
          <ToleranceButton>0.1%</ToleranceButton>
          <ToleranceButton>0.5%</ToleranceButton>
          <ToleranceButton>1.0%</ToleranceButton>
          <ToleranceButton>2.0%</ToleranceButton>
          <ToleranceButton>5.0%</ToleranceButton>
        </ToleranceButtons>
      </SlippageWrapper>
      <SlippageWrapper display="flow">
        <Align>
          <SidebarTitle fontSize={20}>Transaction Deadline</SidebarTitle>
          <TimerButton>30 mins</TimerButton>
        </Align>
        <SliderContainer>
          <Slider type="range" min="0" max="60" />
        </SliderContainer>
        <Text>
          <FontAwesomeIcon icon={faInfoCircle} /> Max: 1 hour
        </Text>
      </SlippageWrapper>
      <SlippageWrapper display="flex">
        <ContentWrapper>
          <SidebarTitle fontSize={20}>Allow unsafe trades</SidebarTitle>
          <SidebarListItem>
            Enabling this will allow trading on high quotes with high price
            impact and could lead to loss of funds.
          </SidebarListItem>
        </ContentWrapper>
        <SwitchComponent
          isChecked={isUnsafeTradesAllowed}
          handleToggle={handleToggleChange}
          onText=""
          offText=""
          isDisabled={false}
        />
      </SlippageWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
