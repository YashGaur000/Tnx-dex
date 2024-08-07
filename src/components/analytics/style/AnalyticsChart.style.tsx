import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import { ResponsiveContainer } from 'recharts';

export const ChartContainer = styled.section<{ theme: DefaultTheme }>`
  width: 100%;

  margin: 0 auto;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
  @media (max-width: 900px) {
    padding: 40px 10px;
  }
`;

export const Title = styled.h2<{ theme: DefaultTheme }>`
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
    font-size: 32px;
    line-height: 48px;
  }
`;

export const ResponsiveWrapper = styled(ResponsiveContainer)`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px 0px;
  }
`;

/////////////////////////////////

export const ClasificationContainer = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 40px 0px;
  }

  @media (max-width: 900px) {
    padding: 30px 0px;
  }
`;

export const ClasificationTitle = styled.h2<{ theme: DefaultTheme }>`
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
`;

export const ClasificationSection = styled.div<{ theme: DefaultTheme }>`
  margin-bottom: 20px;
  margin-left: 54px;
`;

export const ClasificationColorBox = styled.span<{
  color: string;
  theme: DefaultTheme;
}>`
  display: inline-block;
  width: 36px;
  height: 20px;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  border-radius: 3px;
`;

export const ClasificationCosHead = styled.span<{ theme: DefaultTheme }>`
  font-size: 24px;
  line-height: 35.88px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: #ffffff;
  width: 115px;
  height: 36px;
`;

export const ClasificationDescription = styled.span<{ theme: DefaultTheme }>`
  font-size: 16px;
  line-height:29.9px
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  color:#CCCCCC;
`;
