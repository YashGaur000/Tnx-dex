import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardLight};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  width: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
  }
`;

const SidebarTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarListItem = styled.li`
  font-size: 14px;
  color: #7a8aa0;
  margin-bottom: 10px;
`;

const ToleranceButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ToleranceButton = styled.button`
  flex: 1;
  padding: 10px;
  background-color: #1b2b42;
  color: #ffffff;
  border: 1px solid #2d3e50;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #2d3e50;
  }
`;

const SliderContainer = styled.div`
  margin-bottom: 20px;
`;

const Slider = styled.input`
  width: 100%;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Swap</SidebarTitle>
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
      <SidebarTitle>Slippage Tolerance</SidebarTitle>
      <ToleranceButtons>
        <ToleranceButton>0.1%</ToleranceButton>
        <ToleranceButton>0.5%</ToleranceButton>
        <ToleranceButton>1.0%</ToleranceButton>
        <ToleranceButton>2.0%</ToleranceButton>
        <ToleranceButton>5.0%</ToleranceButton>
      </ToleranceButtons>
      <SidebarTitle>Transaction Deadline</SidebarTitle>
      <SliderContainer>
        <Slider type="range" min="0" max="60" />
      </SliderContainer>
      <SidebarListItem>
        <FontAwesomeIcon icon={faInfoCircle} /> Max: 1 hour
      </SidebarListItem>
      <SidebarTitle>Allow unsafe trades</SidebarTitle>
      <SidebarListItem>
        Enabling this will allow trading on high quotes with high price impact
        and could lead to loss of funds.
      </SidebarListItem>
    </SidebarContainer>
  );
};

export default Sidebar;
