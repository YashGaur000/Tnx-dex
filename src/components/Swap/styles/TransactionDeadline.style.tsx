import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SlippageWrapper = styled.div<{
  display: string;
  theme: DefaultTheme;
}>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.cardLight};
  padding: 16px;
  width: 360px;
  height: 118px;

  border-radius: 20px;
  margin: 32px 40px;
`;

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  text-align: justify;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 20px;
  margin-left: 11px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const Align = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TimerButton = styled.button<{ theme: DefaultTheme }>`
  width: 67px;
  height: 25px;
  padding: 2px, 12px, 2px, 12px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.whiteBorder};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const SliderContainer = styled.div`
  margin-left: 11px;
`;

export const Slider = styled.input`
  width: 100%;
  height: 2px;
  accent-color: darkcyan;
`;

export const TdText = styled.div<{ theme: DefaultTheme }>`
  font-size: 12px;
  margin-top: 5px;
  float: right;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text};
`;
