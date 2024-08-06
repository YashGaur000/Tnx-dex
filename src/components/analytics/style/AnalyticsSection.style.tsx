import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const AnlyticsContainer = styled.section<{ theme: DefaultTheme }>`
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
    width: auto;
  }
  @media (max-width: 768px) {
    font-size: 28px;
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
