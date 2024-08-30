import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const TokenCardContainer = styled.div`
  display: flex;
  gap: 15px;

  justify-content: flex-start;
  height: 74px;
  width: 206px;
`;
export const DepositeButtonWrapper = styled.div`
  margin-top: 4px;

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
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  line-height: 23.92px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const IMG1Contains = styled.div<{ Top: number; Left: number }>`
  display: block;
  position: absolute;
  left: ${({ Left }) => Left}px;
  top: ${({ Top }) => Top}px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  width: 36px;
  height: 36px;
`;
export const IMG2Contains = styled.div<{ Top: number; Left: number }>`
  position: absolute;
  display: block;
  left: ${({ Left }) => Left}px;
  top: ${({ Top }) => Top}px;
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

  align-items: baseline;
`;

export const SuggestImg = styled.img`
  width: 16px;
  height: 18px;
`;
export const TokenAmountTitle = styled.label<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;

  gap: 6px;

  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const SugestImgWrapper = styled.div`
  position: relative;
  overflow: visible;
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.p<{
  theme: DefaultTheme;
  fontSize: string;
  lineHeight?: string;
}>`
  line-height: ${({ lineHeight }) => lineHeight ?? '20.93px'};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const LiquidityTokenWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
