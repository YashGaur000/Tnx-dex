import { styled } from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside<{
  theme: DefaultTheme;
  isopen: string;
}>`
  width: 20%;
  padding-top: 10px;
  padding-right: 10px;
  height: 650px;
  position: fixed;
  overflow-y: auto;
  padding-bottom: 20px;
  display: fixed;
  // border-right: 1px solid ${({ theme }) => theme.colors.grey};
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (max-width: 900px) {
    width: 50%;
    padding: 20px;
    background: ${({ theme, isopen }) =>
      isopen === 'true' ? theme.colors.card : 'transparent'};
    transition:
      transform 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    display: ${({ isopen }) => (isopen === 'true' ? 'block' : 'none')};
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3<{ theme: DefaultTheme; isOpen: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 20px;
  line-height: 29.9px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

export const SectionLink = styled(Link)<{ theme: DefaultTheme }>`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-bottom: 10px;
  // margin-left: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 14px;
  width: fit-content;
  padding: 7px;
  border-radius: 4px;
  line-height: 20.93px;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  &.active {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const NestedSectionLinks = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  margin-left: 5px;
`;

export const HamburgerIcon = styled.div<{ theme: DefaultTheme }>`
  display: none;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  top: 50%;
  left: 20px;
  z-index: 1000;
  cursor: pointer;
  transform: translateY(-50%);

  @media (max-width: 900px) {
    display: block;
  }
`;

// Main Content

export const MainContentContainer = styled.main<{ theme: DefaultTheme }>`
  padding: 20px;
  margin-left: 22%;
  margin-bottom: 15%;
  width: 80%;
  border-left: 1px solid ${({ theme }) => theme.colors.grey};

  @media (max-width: 900px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const Banner = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  // position: sticky;
  // top: 10px;
  // z-index: 100;
`;
