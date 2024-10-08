import styled from 'styled-components';
import theme, { DefaultTheme } from '../../styles/Theme';

export const AmountLabel = styled.label<{
  theme: DefaultTheme;
  disabled: boolean;
}>`
  color: silver;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  &:hover {
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeights.bold};
  }
`;
