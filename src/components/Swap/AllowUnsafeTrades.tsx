import React from 'react';
import styled from 'styled-components';
import SwitchComponent from './SwitchComponent';
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
  color: ${({ theme }) => theme.colors.text};
`;

const ContentWrapper = styled.div``;

const SidebarListDes = styled.div<{ theme: DefaultTheme }>`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
  margin-bottom: 20px;
  position: relative;
  padding-left: 30px;
`;

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
