import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const LiquidityHeaderTitle = styled.p<{
  theme: DefaultTheme;
  fontSize: number;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color:${({ theme }) => theme.colors.whiteBorder}
  text-align: left;

`;
