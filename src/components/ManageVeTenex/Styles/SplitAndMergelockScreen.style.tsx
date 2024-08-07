import { DefaultTheme } from '../../../styles/Theme';
import styled from 'styled-components';

export const SplitContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.main};
`;
export const SplitDatacontain = styled.div<{ theme: DefaultTheme }>`
  display: block;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
export const SplitCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  gap: 10px;
`;
/* merge and Split screen tyle */

export const CardContainsLockScreen = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.cardLight};
  padding: 10px 15px;

  border-radius: 15px;
`;

export const Tokenstyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
export const ImgStyleSplit = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;
export const Labeltoken = styled.label<{
  theme: DefaultTheme;
  fontSize: number;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const TokenDate = styled.div<{ theme: DefaultTheme; fontSize: number }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.greyDark};
`;

export const CheckBoxContainer = styled.div`
  display: flex;

  margin-left: 10px;
  align-items: center;
`;
export const CheckBoxMerge = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  cursor: pointer;
  appearance: none;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border: 1.5px solid #5dea9c;
  border-radius: 4px;
  &:checked {
    background: transparent;
    border: 1.5px solid #5dea9c;
  }
  &:checked::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 3px;
    height: 7px;
    border: solid #5dea9c;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
