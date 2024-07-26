import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import SwitchComponent from './SwitchComponent';
import {
  SidebarContainer,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
  SlippageWrapper,
  SliderContainer,
  Slider,
  ToleranceButtons,
  InfoButton,
  Align,
  Text,
} from '../../common';

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
        <SidebarTitle fontSize={16}>Slippage Tolerance</SidebarTitle>
        <ToleranceButtons>
          <InfoButton>0.1%</InfoButton>
          <InfoButton>0.5%</InfoButton>
          <InfoButton>1.0%</InfoButton>
          <InfoButton>2.0%</InfoButton>
          <InfoButton>5.0%</InfoButton>
        </ToleranceButtons>
      </SlippageWrapper>
      <SlippageWrapper display="flow">
        <Align>
          <SidebarTitle fontSize={16}>Transaction Deadline</SidebarTitle>
          <InfoButton>30 mins</InfoButton>
        </Align>
        <SliderContainer>
          <Slider type="range" min="0" max="60" />
        </SliderContainer>
        <Text>
          <FontAwesomeIcon icon={faInfoCircle} /> Max: 1 hour
        </Text>
      </SlippageWrapper>
      <SlippageWrapper display="flex">
        <SidebarTitle fontSize={16}>Allow unsafe trades</SidebarTitle>
        <SidebarListItem>
          Enabling this will allow trading on high quotes with high price impact
          and could lead to loss of funds.
        </SidebarListItem>

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
