// SubTabs.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubTabsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
`;

const SubTab = styled(Link)`
  display: block;
  padding: 12px 20px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }
`;

interface SubTabsProps {
  items: { to: string; label: string; description: string }[];
}

const SubTabs: React.FC<SubTabsProps> = ({ items }) => (
  <SubTabsContainer>
    {items.map((item, index) => (
      <SubTab to={item.to} key={index}>
        <strong>{item.label}</strong>
        <br />
        {item.description}
      </SubTab>
    ))}
  </SubTabsContainer>
);

export default SubTabs;
