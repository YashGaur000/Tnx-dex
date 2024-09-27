import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const DepositMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 163px;
  border-radius: 16px;
  padding: 24px;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
`;

export const PoolContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.whiteBorder};
  height: 115px;
  gap: 24px;
`;

export const TotalPoolData = styled.div<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 17.94px;
`;

export const USDTHeading = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
export const USDTData = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const Stable = styled.p<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const UnstackedContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  gap: 8px;
`;
export const UnstackedHeading = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const UnstackedData = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 4px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const UnstackedData1 = styled.div`
  display: flex;
  gap: 24px;
`;

export const StakedContainer = styled.div<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 6px;
`;

export const DepositeStakedHeading = styled.div<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  display: flex;
  justify-content: flex-end;
`;

export const DepositeStakedData = styled.div<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 4px;
`;
export const Withdraw = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  font-family: Kanit;
  font-weight: 300;

  -webkit-background-clip: text;
  background-clip: text;
  color: ${({ theme }) => theme.colors.titleColor};
  position: relative;
  display: inline-block;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.titleColor};
  }
`;
export const DashBoardParagraph = styled.p``;
export const WalletContainer = styled.div<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 8px;
`;
export const PoolContainerData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
export const CardLogo = styled.div`
  width: 36px;
  height: 36px;
`;
