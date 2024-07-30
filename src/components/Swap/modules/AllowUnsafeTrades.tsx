import React from 'react';
import SwitchComponent from './SwitchComponent';
import {
  ContentWrapper,
  SidebarListDes,
  SidebarTitle,
  SlippageWrapper,
} from '../styles/AllowUnsafeTrades.style';

const AllowUnsafeTrades: React.FC<{
  isChecked: boolean;
  handleToggle: () => void;
}> = ({ isChecked, handleToggle }) => (
  <SlippageWrapper display="flex">
    <ContentWrapper>
      <SidebarTitle fontSize={16}>Allow unsafe trades</SidebarTitle>
      <SidebarListDes>
        Enabling this will allow trading on high quotes with high price impact
        and could lead to loss of funds.
      </SidebarListDes>
    </ContentWrapper>
    <SwitchComponent
      isChecked={isChecked}
      handleToggle={handleToggle}
      onText=""
      offText=""
      isDisabled={false}
    />
  </SlippageWrapper>
);

export default AllowUnsafeTrades;
