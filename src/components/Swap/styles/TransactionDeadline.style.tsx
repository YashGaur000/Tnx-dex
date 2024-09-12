import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const TransactionWrapper = styled.div<{
  display: string;
  theme: DefaultTheme;
}>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.cardLight};
  padding: 24px;
  width: 360px;
  height: 118px;

  border-radius: 12px;
`;

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 12px;

  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const Align = styled.div`
  display: flex;
  justify-content: space-between;
  height: 25px;
`;

export const TimerButton = styled.button<{ theme: DefaultTheme }>`
  width: 67px;
  height: 25px;
  padding: 2px, 12px, 2px, 12px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  background: ${({ theme }) => theme.colors.cardLight},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  border-radius: 8px;
  cursor: pointer;
`;

export const SliderContainer = styled.div<{ margin?: string }>`
  margin-left: ${({ margin }) => margin ?? '0px'};
`;

export const Slider = styled.input<{ theme: DefaultTheme }>`
  width: 100%;
  height: 2px;
  accent-color: darkcyan;
`;

export const TdText = styled.div<{ theme: DefaultTheme }>`
  font-size: 12px;
  margin-top: 5px;
  float: right;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
`;
