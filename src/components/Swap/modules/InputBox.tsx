import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

interface InputboxStyledProps {
  width?: string;
  height?: string;
  border?: string;
  fontsize?: string;
  margin?: string;
  padding?: string;
  isValid?: boolean;
  borderradius?: number;
  theme?: DefaultTheme;
  errortextcode?: string;
}

export const InputBox = styled.input<InputboxStyledProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  margin: ${({ margin }) => margin ?? '0'};
  padding: ${({ padding }) => padding ?? '8px'};
  border: ${({ border, isValid }) =>
    border ?? `1px solid ${isValid ? 'green' : 'red'}`};
  font-size: ${({ fontsize }) => fontsize ?? '16px'};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  border-radius: ${({ borderradius }) => borderradius ?? '4'}px;
  background: none;
  color: ${({ errortextcode }) => errortextcode ?? '#FFFFFF'};

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.greyBorder};
    text-align: left;
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
