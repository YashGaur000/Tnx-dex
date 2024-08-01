import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useHeaderStore } from '../store/root';
import { DefaultTheme } from '../styles/Theme';

interface SubTabItem {
  main: string;
  to: string;
  label: string;
  description: string;
}

interface SubTabsProps {
  items: SubTabItem[];
  showTabs: boolean;
  setShowTabs: (showTabs: boolean) => void;
  setNavOpen?: (navOpen: boolean) => void;
}

const SubTabsContainer = styled.div<{ theme: DefaultTheme }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 250px;
  background: ${({ theme }) => theme.colors.navtoggle};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  padding: 10px;
`;

const SubTabItemContainer = styled.div<{ theme: DefaultTheme }>`
  padding: 10px;
  border-radius: 4px;
  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

const SubTabLink = styled.div<{ theme: DefaultTheme }>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const SubTabLabel = styled.div<{ theme: DefaultTheme }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const SubTabDescription = styled.div<{ theme: DefaultTheme }>`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const SubTabs: React.FC<SubTabsProps> = ({
  items,
  showTabs,
  setShowTabs,
  setNavOpen,
}: SubTabsProps) => {
  const navigate = useNavigate();
  const { setActiveMainTab } = useHeaderStore();

  if (!showTabs) return null;

  return (
    <SubTabsContainer>
      {items.map((item: SubTabItem, index: number) => (
        <SubTabItemContainer key={index}>
          <SubTabLink
            onClick={() => {
              navigate(item.to);
              setShowTabs(false);
              if (setNavOpen) setNavOpen(false);
              setActiveMainTab(item.main);
            }}
          >
            <SubTabLabel>{item.label}</SubTabLabel>
            <SubTabDescription>{item.description}</SubTabDescription>
          </SubTabLink>
        </SubTabItemContainer>
      ))}
    </SubTabsContainer>
  );
};

export default SubTabs;
