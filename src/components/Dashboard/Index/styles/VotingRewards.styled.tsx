import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const VotingRewardsMainContainer = styled.div<{
  theme: DefaultTheme;
  height?: string;
}>`
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.card};
  height: ${({ height }) => height ?? '187px'};
`;
export const VotingRewardsdata = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  align-items: center;
`;
export const VotingRewardsButton = styled.button<{
  theme: DefaultTheme;
}>`
  width: 165px;
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  font-weight: 400;
  line-height: 23.92px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 35px;
  gap: 10px;
  border-radius: 12px;
  border: 1px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.swapIconBackground},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

export const DashboardButton = styled.div<{
  theme: DefaultTheme;
  height: string;
  width: string;
}>`
  font-size: 12px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.cardLight};
  padding: 0px 4px;
  border-radius: 4px;
`;
