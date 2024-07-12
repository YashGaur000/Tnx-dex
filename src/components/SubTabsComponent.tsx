import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DefaultTheme } from '../styles/Theme';

interface SubTabItem {
  to: string;
  label: string;
  description: string;
}

interface SubTabsProps {
  items: SubTabItem[];
  showTabs: boolean;
  setShowTabs: (showTabs: boolean) => void;
  setNavOpen: (navOpen: boolean) => void;
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
`;

const SubTabLabel = styled.div`
  font-weight: bold;
`;

const SubTabDescription = styled.div`
  font-size: 14px;
`;

const SubTabs: React.FC<SubTabsProps> = ({
  items,
  showTabs,
  setShowTabs,
  setNavOpen,
}) => {
  const navigate = useNavigate();

  if (showTabs)
    return (
      <SubTabsContainer>
        {items.map((item, index) => (
          <SubTabItemContainer key={index}>
            <SubTabLink
              onClick={() => {
                navigate(item.to);
                setShowTabs(!showTabs);
                setNavOpen(false);
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
