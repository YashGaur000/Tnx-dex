import { DefaultTheme, styled } from 'styled-components';
import theme from '../../styles/Theme';

export const AmountLabel = styled.label<{ theme: DefaultTheme }>`
  color: silver;
  &:hover {
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeights.regular};
  }
`;
