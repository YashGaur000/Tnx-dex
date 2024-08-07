import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const AnlyticsContainer33 = styled.section<{ theme: DefaultTheme }>`
  padding-bottom: 50px;
  padding: 0 50px;
  width: auto;
  background-color: ${({ theme }) => theme.colors.card};

  @media (max-width: 1200px) {
    justify-content: center;
    padding: 0 30px;
    width: auto;
  }

  @media (max-width: 900px) {
    justify-content: center;
    padding: 0 25px;
    margin-left: 22px;
    width: auto;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 20px;
    margin-left: 22px;
    width: auto;
  }
`;

export const AnalyticsContainer = styled.section<{ theme: DefaultTheme }>`
 background-color: ${({ theme }) => theme.colors.card}; // Adjust the color according to your theme
  border-radius: 16px;
  padding: 20px;
  margin: 20px auto;
  max-width: 1050px;
  text-align: center;
  /*box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);*/

  @media (max-width: 768px) {
    padding: 15px;
    width:100%
    margin: 10px auto;
  }
  

  @media (max-width: 480px) {
    padding: 10px;
    width:100%
    margin: 5px auto;
  }
`;

export const AnalyticsCard = styled.div<{
  theme: DefaultTheme;
  height?: string;
  width?: string;
  tag?: string;
  margin?: string;
  Radius?: string;
}>`
  background: ${({ theme, tag }) =>
    tag === 'top' ? theme.colors.cardDark : theme.colors.card};
  border-radius: 10px;
  padding: 20px;
  margin: ${({ margin }) => (margin ? margin : '0px')};
  radius: ${({ Radius }) => (Radius ? Radius : '0px')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '')};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    width: 80%;
    grid-template-columns: none;
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`;

export const AnalyticsTitle = styled.h2<{ theme: DefaultTheme }>`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const AnalyticsContent = styled.p<{ theme: DefaultTheme }>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ChartTitle = styled.h2<{ theme: DefaultTheme }>`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 60.76px;
  text-align: center;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 48px;
  }
`;

export const CardText = styled.p<{ theme: DefaultTheme }>`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 53.82px;
  margin-right: 30px;
  height: 54px;
  text-align: center;
  top: 164px;
  left: 508.5px;

  @media (max-width: 1200px) {
    font-size: 36px;
    margin-bottom: 30px;
    width: auto;
  }
  @media (max-width: 900px) {
    justify-content: center;
    padding: 0 10px;
    font-size: 18px;
    width: auto;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 10px;
    margin-bottom: 20px;
    width: auto;
  }
`;

export const SmallText = styled.p<{ theme: DefaultTheme }>`
  text-align: center;
  height: 36px;
  margin-top: 30px;
  color: #cccccc;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;

  @media (max-width: 1200px) {
    font-size: 18px;
    margin-top: 20px;
    width: auto;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 15px;
    width: auto;
  }
`;
