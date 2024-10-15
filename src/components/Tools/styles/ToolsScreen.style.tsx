import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const ToolsMainContainer = styled.div<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 0px 40px 0px 40px;
`;

export const ToolsDataContainer = styled.div<{ theme: DefaultTheme }>`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
export const ToolsDataHeading = styled.p<{
  theme: DefaultTheme;
  Fontsize?: string;
}>`
  font-size: ${({ Fontsize }) => Fontsize};
  display: flex;
`;

export const ToolsDescriptionData = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  color: rgba(204, 204, 204, 1);

  justify-content: center;
  width: 644px;
  height: 108px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: center;
`;

export const ToolsCard = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  height: 186px;
  top: 635px;
  padding: 20px;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardsTitleData = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 23.92px;
  color: rgba(255, 255, 255, 1);
`;
export const ToolsCardsContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 40px;
`;

export const CardsDescription = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 17.94px;
`;

export const ToolsCardButton = styled.button<{ theme: DefaultTheme }>`
  width: 100%;
  height: 26px;
  text-align: right;
  background: transparent;
  border: none;
`;
export const CardsButton = styled.button<{ theme: DefaultTheme }>`
  background: transparent;
  border: none;
`;

export const ProtocolMainCardContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

export const ProtocolCard = styled.div<{ theme: DefaultTheme }>`
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  width: 100%;
  height: content-fit;
  border-radius: 16px;
  padding: 40px;
`;
export const ProtocolCardHeading = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
`;
export const ProtocolCardsData = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;
