import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';

export const TokenCardContainer = styled.div`
  display: flex;
  gap: 25px;

  justify-content: center;
  margin-left: 30px;

  width: 200px;
`;

export const GroupImgContains = styled.div`
  display: block;
  position: relative;

  width: 60px;
  height: 50px;
`;
export const TraidingSyleLabel = styled.label<{ theme: DefaultTheme }>`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const IMG1Contains = styled.div<{ Top: number; Left: number }>`
  display: block;
  position: absolute;
  left: ${({ Left }) => Left}px;
  top: ${({ Top }) => Top}px;
`;
export const IMG2Contains = styled.div<{ Top: number; Left: number }>`
  position: absolute;
  left: ${({ Left }) => Left}px;
  top: ${({ Top }) => Top}px;
`;
export const Imgstyle = styled.img`
  width: 40px;
  height: 40px;
`;
export const PairContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const VolumeStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: flex-end;

  width: 60%;
`;
export const SuggestImg = styled.img`
  width: 15px;
  height: 15px;
`;
export const TokenAmountTitle = styled.label<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;

  gap: 8px;

  margin-top: 5px;
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.fontSize.small};
`;
export const LiquidityHeaderColumn = styled.th`
  float: left;
  margin-left: 40px;
`;

export const TableHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
`;
export const AprDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 95px;
`;

export const SugestImgWrapper = styled.div`
  position: relative;
  overflow: visible;
`;
