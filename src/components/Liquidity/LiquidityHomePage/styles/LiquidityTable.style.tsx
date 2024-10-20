import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const TokenCardContainer = styled.div<{ height?: number }>`
  display: flex;
  gap: 15px;

  justify-content: flex-start;
  height: ${({ height }) => height ?? '74'}px;
  width: fit-content;
`;
export const DepositeButtonWrapper = styled.div`
  margin-bottom: 4px;
  display: inline-block;
`;

export const GroupImgContains = styled.div`
  position: relative;

  width: 64px;
  height: 50px;
  z-index: 9999;
  box-sizing: border-box;
`;
export const TraidingSyleLabel = styled.label<{ theme: DefaultTheme }>`
  font-size: 16px;
  line-height: 23.92px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const IMG1Contains = styled.div<{ top: number; left: number }>`
  display: block;
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  width: 36px;
  height: 36px;
`;
export const IMG2Contains = styled.div<{ top: number; left: number }>`
  position: absolute;
  display: block;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  width: 36px;
  height: 36px;
`;
export const Imgstyle = styled.img`
  width: 36px;
  height: 36px;
`;
export const PairContain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: baseline;
`;

export const SuggestImg = styled.img`
  width: 16px;
  height: 18px;
  position: relative;
`;
export const TokenAmountTitle = styled.label<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;

  gap: 8px;

  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const SugestImgWrapper = styled.div`
  position: relative;
  overflow: visible;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TitleWrapper = styled.p<{
  theme: DefaultTheme;
  fontSize: string;
  lineheight?: string;
}>`
  line-height: ${({ lineheight }) => lineheight ?? '20.93px'};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const LiquidityTokenWrapper = styled.label<{ alignitem?: string }>`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;
export const LiquidityTableWrapper = styled.section<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  padding: 16px 40px 40px;
  margin: 0px;
  width: 100%;
  border-radius: 24px;
  position: relative;
`;
