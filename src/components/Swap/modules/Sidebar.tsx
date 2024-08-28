import React, { useState } from 'react';
import TransactionDeadline from './TransactionDeadline';
import SlippageTolerance from './SlippageTolerance';
import AllowUnsafeTrades from './AllowUnsafeTrades';
import {
  SidebarContainer,
  SidebarInner,
  SidebarList,
  SidebarListItem,
  SidebarTitle,
} from '../styles/Sidebar.style';

const Sidebar: React.FC = () => {
  const [isUnsafeTradesAllowed, setIsUnsafeTradesAllowed] = useState(false);

  const handleToggleChange = () => {
    setIsUnsafeTradesAllowed(!isUnsafeTradesAllowed);
  };
  return (
    <SidebarContainer>
      <SidebarInner>
        <SidebarTitle fontSize={24}>Instructions</SidebarTitle>
        <SidebarList>
          <SidebarListItem>
            Start by selecting the token to swap from and the amount you want to
            exchange.
          </SidebarListItem>
          <SidebarListItem>
            Pick the token you want to exchange for.
          </SidebarListItem>
          <SidebarListItem>
            The quote will be ready in a moment!
          </SidebarListItem>
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
      </SidebarInner>
    </SidebarContainer>
  );
};

export default Sidebar;
