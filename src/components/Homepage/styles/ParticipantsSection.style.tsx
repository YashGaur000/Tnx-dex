import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const ParticipantsContainer = styled.section<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  margin: 0 -57px;
  margin-top: 70px;
`;

export const ParticipantsTitle = styled.h2<{ theme: DefaultTheme }>`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 71.76px;
  text-align: left;

  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 70px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 110px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;

export const CardText = styled.p<{ theme: DefaultTheme }>`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 23.92px;
  text-align: left;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Stat = styled.div<{ theme: DefaultTheme }>`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const StatValue = styled.h4<{ theme: DefaultTheme }>`
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 95.68px;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 54px;
    line-height: 1.3;
  }

  @media (max-width: 1024px) {
    font-size: 44px;
    line-height: 1.3;
  }
`;

export const StatLabel = styled.p<{ theme: DefaultTheme }>`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;
