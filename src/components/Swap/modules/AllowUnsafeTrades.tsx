import React from 'react';
import SwitchComponent from './SwitchComponent';
import {
  AllowUnsafeAlign,
  AllowUnsafeListDes,
  AllowUnsafeWrapper,
  ContentWrapper,
  SelectToggleUnsafe,
  SidebarTitle,
} from '../styles/AllowUnsafeTrades.style';

const AllowUnsafeTrades: React.FC<{
  isChecked: boolean;
  handleToggle: () => void;
}> = ({ isChecked, handleToggle }) => (
  <AllowUnsafeWrapper display="flex">
    <ContentWrapper>
      <AllowUnsafeAlign>
        <SidebarTitle fontSize={16}>Allow unsafe trades</SidebarTitle>
        <SelectToggleUnsafe>
          {' '}
          <SwitchComponent
            isChecked={isChecked}
            handleToggle={handleToggle}
            onText=""
            offText=""
            isDisabled={false}
          />
        </SelectToggleUnsafe>
      </AllowUnsafeAlign>
      <AllowUnsafeListDes>
        Enabling this will allow trading on high quotes with high price impact
        and could lead to loss of funds.
      </AllowUnsafeListDes>
    </ContentWrapper>
  </AllowUnsafeWrapper>
);

export default AllowUnsafeTrades;
