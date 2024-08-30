import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

interface InputboxStyledProps {
  width?: string;
  height?: string;
  border?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  isValid?: boolean;
  theme?: DefaultTheme;
}

export const InputBox = styled.input<InputboxStyledProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  margin: ${({ margin }) => margin ?? '0'};
  padding: ${({ padding }) => padding ?? '8px'};
  border: ${({ border, isValid }) =>
    border ?? `1px solid ${isValid ? 'green' : 'red'}`};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  background: none;
  color: white;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  & {
    -moz-appearance: textfield;
  }
`;
