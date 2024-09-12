import { styled } from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

interface InputProps {
  theme: DefaultTheme;
  width?: string;
  height?: string;
  fontSize?: string;
}

export const InputWrapper = styled.div<{ theme: DefaultTheme }>`
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input<InputProps>`
  border-color: ${({ theme }) => theme.colors.greyBorder};
  width: ${({ width }) => width ?? '75%'};
  height: ${({ height }) => height ?? 'auto'};
  padding: 10px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-right: 1%;

  /* Hide spin buttons */
  -moz-appearance: textfield; /* Firefox */
  appearance: textfield; /* Chrome, Safari, Edge */
  /* Remove inner padding and search cancel button */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.greyBorder};
    text-align: center;
  }

  &:focus {
    outline: none;
  }
`;
