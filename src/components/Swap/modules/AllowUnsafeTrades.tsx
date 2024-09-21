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
}> = ({ isChecked, handleToggle }) => {
  return (
    <AllowUnsafeWrapper display="flex">
      <ContentWrapper>
        <AllowUnsafeAlign>
          <SidebarTitle fontsize={16}>Allow unsafe trades</SidebarTitle>
        </AllowUnsafeAlign>
        <AllowUnsafeListDes>
          Enabling this will allow trading on high quotes with high price impact
          and could lead to loss of funds.
        </AllowUnsafeListDes>
      </ContentWrapper>
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
    </AllowUnsafeWrapper>
  );
};

export default AllowUnsafeTrades;
