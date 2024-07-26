import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import { ResponsiveContainer } from 'recharts';

export const ChartContainer = styled.section<{ theme: DefaultTheme }>`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 40px 0px;
  }
`;

export const Title = styled.h2<{ theme: DefaultTheme }>`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 71.76px;
  text-align: center;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ResponsiveWrapper = styled(ResponsiveContainer)`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px 0px;
  }
`;
