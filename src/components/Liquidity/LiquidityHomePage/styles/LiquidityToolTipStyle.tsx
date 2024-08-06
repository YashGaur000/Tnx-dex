import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const LiquidityToolTipSection = styled.section<{
  theme: DefaultTheme;
  fontSize: number;
}>`
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 20px;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
export const UnorderListStyle = styled.ul`
  margin-left: 20px;
`;
