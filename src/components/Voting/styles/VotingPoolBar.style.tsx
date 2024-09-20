import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const VotingPoolContainer = styled.div<{ theme: DefaultTheme }>`
  margin-top: 29px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PoolTitleBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  line-height: 29.9px;

  @media (max-width: 768px) {
    justify-content: left;
    font-size: 16px;
    margin-top: -25px;
  }
`;

export const Title = styled.p<{ fontsize?: string; theme: DefaultTheme }>`
  font-size: ${({ fontsize }) => fontsize};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    font-size: ${({ fontsize }) => fontsize};
  }
`;

export const VotingBarBox = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const VotingTabBar = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const VotingTabBar2 = styled(VotingTabBar)`
  display: flex;
  gap: 20px;
  justify-content: left;
  margin-left: 140px;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    margin-left: 0;
    margin-top: 1rem;
  }
`;

export const VotingAllPoolsTabs = styled.button<{
  isconnected?: string;
  theme: DefaultTheme;
  Width: string;
  isactive?: boolean;
}>`
  padding: 4px 16px;
  justify-content: center;
  display: flex;
  height: auto;
  width: ${({ Width }) => Width};
  border: 2px solid ${({ isactive }) => (isactive ? 'transparent' : 'white')};
  border-radius: 12px;
  background: ${({ isactive }) =>
    isactive
      ? 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)'
      : 'transparent'};
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${({ isactive }) => (isactive ? 'transparent' : 'white')};
  background-clip: ${({ isactive }) => (isactive ? 'text' : 'border-box')};
  -webkit-background-clip: ${({ isactive }) =>
    isactive ? 'text' : 'border-box'};
  -webkit-text-fill-color: ${({ isactive }) =>
    isactive ? 'transparent' : 'white'};
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(188.32deg, #47ff99 -7.09%, #3eacfc 99.48%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-color: transparent;
  }

  @media (max-width: 768px) {
    width: 50%;
    padding: 10px 30px;
    font-size: 18px;
  }
`;

export const VotingActiveTabs = styled.button<{
  isconnected?: string;
  theme: DefaultTheme;
  Width: string;
}>`
  padding: 4px 16px;
  justify-content: center;
  display: flex;
  height: auto;
  width: ${({ Width }) => Width};
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.buttonBackground
        : theme.colors.background},
    ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.background
        : theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;

  color: ${({ theme, isconnected }) =>
    isconnected === 'true' ? theme.colors.text : theme.colors.buttonBackground};
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover span {
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    width: 50%;
    padding: 10px 30px;
    font-size: 18px;
  }
`;

export const SearchBarWrapper = styled.div`
  flex-grow: 1;

  @media (max-width: 768px) {
    width: 50%;
    max-width: 100%;
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;
