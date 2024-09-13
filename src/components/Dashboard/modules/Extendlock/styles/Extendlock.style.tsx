import styled from 'styled-components';
import { DefaultTheme } from '../../../../../styles/Theme';

export const LockHeaderWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const SliderMainContainer = styled.div<{ theme: DefaultTheme }>`
  margin: 0px;
  pading: 0px;
`;
export const LockleftSection = styled.div<{
  theme: DefaultTheme;
  height?: number;
}>`
  width: 55%;
  display: flex;
  height: ${({ height }) => height ?? '484'}px;

  flex-direction: column;
  background: ${({ theme }) => theme.colors.card};
  gap: 24px;
  border-radius: 18px;
  padding: 40px;
  @media only screen and (max-width: 1100px) {
    width: 45%;
    gap: 20px;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const MaxLoadContainer = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.cardLight};
  height: 160px;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const AutoMaxLoaderWrapper = styled.div`
  width: 327px;
`;
export const HeaderWithImgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;
export const SteperWrapper = styled.div<{ theme: DefaultTheme }>``;
export const TipsContainer = styled.div`
  display: flex;
  gap: 16px;
`;
export const WalletAdressConainer = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const TransferLockTitle = styled.p<{
  theme: DefaultTheme;
  fontsize: number;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontsize }) => fontsize}px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.redToggle};
`;
export const UnderlineText = styled.span<{
  theme: DefaultTheme;
  fontsize: number;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontsize }) => fontsize}px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.whiteBorder};
  text-decoration: underline;
  margin-left: 3px;
`;
