import { DefaultTheme } from '../../../styles/Theme';
import styled from 'styled-components';

export const SplitContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  width: 100%;

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
  padding: 20px;

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
  margin-top: 2px;
`;
export const Labeltoken = styled.label<{
  theme: DefaultTheme;
  fontsize: number;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontsize }) => fontsize}px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const TokenDate = styled.div<{ theme: DefaultTheme; fontsize: number }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontsize }) => fontsize}px;
  color: ${({ theme }) => theme.colors.greyDark};
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const TipsIconWrapper = styled.div`
  padding: 0px;
`;
export const CheckBoxContainer = styled.div`
  display: flex;

  margin-left: 10px;
  align-items: center;
`;
export const CheckBoxStyle = styled.input.attrs({ type: 'checkbox' })<{
  theme: DefaultTheme;
}>`
  position: relative;
  cursor: pointer;
  appearance: none;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border: 1.5px solid ${({ theme }) => theme.colors.checkboxGrayBorder};
  border-radius: 2px;
  &:checked {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.checkboxBorder};
  }
  &:checked::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 3px;
    height: 7px;
    border: 1px solid ${({ theme }) => theme.colors.checkboxBorder};
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
