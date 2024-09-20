import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const ToolTipSection = styled.section<{
  theme: DefaultTheme;
  fontsize: number;
}>`
  display: flex;
  flex-direction: column;

  padding: 5px;
  gap: 20px;
  font-size: ${({ theme }) => theme.fontsize.medium}px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
export const UnorderListStyle = styled.ul`
  margin-left: 20px;
`;

export const ToolTipsMainContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;

  gap: 20px;
  font-size: ${({ theme }) => theme.fontsize.medium}px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
export const ToolTipsconentCard = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.cardLight};
  padding: 20px;
  border-radius: 12px;
  font-size: 14px;
`;
