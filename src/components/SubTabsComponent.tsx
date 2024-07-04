import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SubTabItem {
  to: string;
  label: string;
  description: string;
}

interface SubTabsProps {
  items: SubTabItem[];
}

const SubTabsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 250px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  padding: 10px;
`;

const SubTabItemContainer = styled.div`
  padding: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const SubTabLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

const SubTabLabel = styled.div`
  font-weight: bold;
`;

const SubTabDescription = styled.div`
  font-size: 14px;
`;

const SubTabs: React.FC<SubTabsProps> = ({ items }) => (
  <SubTabsContainer>
    {items.map((item, index) => (
      <SubTabItemContainer key={index}>
        <SubTabLink to={item.to}>
          <SubTabLabel>{item.label}</SubTabLabel>
          <SubTabDescription>{item.description}</SubTabDescription>
        </SubTabLink>
      </SubTabItemContainer>
    ))}
  </SubTabsContainer>
);

export default SubTabs;
