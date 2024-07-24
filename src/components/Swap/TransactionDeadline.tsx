import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { DefaultTheme } from '../../styles/Theme';

const SlippageWrapper = styled.div<{ display: string; theme: DefaultTheme }>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.card};
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  margin: 15px 0px;
`;

const SidebarTitle = styled.h2<{ fontSize: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.whiteBorder};
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
  border: 1px solid ${({ theme }) => theme.colors.whiteBorder};
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

const Text = styled.div<{ theme: DefaultTheme }>`
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.greyDark};
`;

const TransactionDeadline: React.FC = () => (
  <SlippageWrapper display="flow">
    <Align>
      <SidebarTitle fontSize={16}>Transaction Deadline</SidebarTitle>
      <TimerButton>30 mins</TimerButton>
    </Align>
    <SliderContainer>
      <Slider type="range" min="0" max="60" />
    </SliderContainer>
    <Text>
      <FontAwesomeIcon icon={faInfoCircle} /> Max: 1 hour
    </Text>
  </SlippageWrapper>
);

export default TransactionDeadline;
