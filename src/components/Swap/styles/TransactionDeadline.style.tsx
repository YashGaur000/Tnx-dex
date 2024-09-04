import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const TransactionWrapper = styled.div<{
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
  color: ${({ theme }) => theme.colors.greyLight};
`;

export const Align = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TimerButton = styled.button<{ theme: DefaultTheme }>`
  width: 67px;
  height: 25px;
  padding: 2px, 12px, 2px, 12px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.greyLight};
  background: ${({ theme }) => theme.colors.cardLight},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.greyLight};
    border: 2px solid transparent;
    background: ${({ theme }) => theme.colors.cardLight},
      ${({ theme }) => theme.colors.buttonBackground};
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }
`;

export const SliderContainer = styled.div<{ margin?: string }>`
  margin-left: ${({ margin }) => margin ?? '11px'};
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
  color: ${({ theme }) => theme.colors.text};
`;
