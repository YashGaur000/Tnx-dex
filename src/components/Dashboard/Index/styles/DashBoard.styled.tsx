import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const DashBoardMainContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
`;

export const DashboardHeading = styled.p<{
  theme: DefaultTheme;
  fontSize?: string;
}>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontSize }) => fontSize ?? '24px'};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: left;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const TipsIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const DashBoardWrapperHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DashBoardCard = styled.div<{
  height?: number;
  theme: DefaultTheme;
}>`
  background: ${({ theme }) => theme.colors.card};
  width: 100%;
  height: ${({ height }) => height ?? '56'}px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  justify-content: space-between;
  padding: 16px 24px;
`;

export const DashBoardCardData = styled.p<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 16px;
`;

export const DashBoardTitle = styled.div<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 16px;
  line-height: 23.92px;
  height: 24px;
`;

export const DashBoardCardData1 = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 20.93px;
  text-align: left;
  color: ${({ theme }) => theme.colors.titleColor};
  height: 21px;
`;

export const DashBoardCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const DashBoardLock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const DashBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const DashboardNavigation = styled.p<{
  theme: DefaultTheme;
  fontSize?: number;
  margin?: string;
  width?: string;
  disabled?: boolean;
}>`
  background: ${({ theme }) => theme.colors.title};
  font-size: ${({ fontSize }) => fontSize}px;
  margin: ${({ margin }) => margin ?? '0px'};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ width }) => width ?? '100%'};
    height: 1px;

    background: ${({ theme, disabled }) =>
      disabled ? theme.colors.bordercolor : theme.colors.bordercolor};
  }
`;
export const ViewStack = styled.p<{ theme: DefaultTheme }>`
  font-family: Kanit;
  font-size: 16px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: right;
  color: ${({ theme }) => theme.colors.whiteBorder};
  cursor: pointer;
`;
