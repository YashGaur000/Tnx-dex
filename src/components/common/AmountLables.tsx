import { DefaultTheme, styled } from 'styled-components';

export const AmountLabel = styled.label<{ theme: DefaultTheme }>`
  color: silver;
  &:hover {
    color: black;
    font-weight: bold;
  }
`;
