import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const VotingPoolContainer = styled.div<{ theme: DefaultTheme }>`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PoolTitleBox = styled.div<{ theme: DefaultTheme }>`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Title = styled.p<{ fontSize?: string; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 768px) {
    font-size: ${({ fontSize }) => fontSize};
  }
`;

export const VotingBarBox = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const VotingTabBar = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: left;
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

export const VotingPoolsTooltip = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-top: 7px;
`;

export const SearchBarWrapper = styled.div`
  flex-grow: 1;
  max-width: 300px;

  @media (max-width: 768px) {
    width: 50%;
    max-width: none;
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TriggerElement = styled.div<{ theme: DefaultTheme }>`
  padding: 10px;
  // background-color: #004466; /* Example background color */
  color: #fff;
  //
  border-radius: 4px;
`;

export const TooltipBox = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  // flex-template-rows: repeat(2, 1fr);
  visibility: hidden;
  width: 868px;
  height: 400px;
  background: ${({ theme }) => theme.colors.card};
  color: #fff;
  text-align: left;
  border-radius: 8px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  // bottom: 100%; /* Position the tooltip above the trigger element */
  top: 50%;
  left: 480px;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  box-shadow: 5px 5px 5px rgba(19, 29, 60, 1);
`;

export const VotingTimelineBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const InstructionRewardsBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 10px;
`;

export const TooltipContainerHover = styled(TooltipContainer)`
  &:hover ${TooltipBox} {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipsQuadrant1 = styled.div<{ theme: DefaultTheme }>``;

export const TooltipsQuadrant2 = styled.div<{ theme: DefaultTheme }>`
  margin-left: 55px;
`;

export const TooltipsQuadrant3 = styled.div<{ theme: DefaultTheme }>``;

export const TooltipsQuadrant4 = styled.div<{ theme: DefaultTheme }>`
  margin-right: 100px;
`;

export const TooltipText = styled.p<{
  fontSize?: string;
  fontWeight?: string;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding: 8px;

  @media (max-width: 768px) {
    font-size: ${({ fontSize }) => fontSize};
  }
`;
