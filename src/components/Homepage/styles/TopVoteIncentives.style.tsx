import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const TopVoteIncentivesContainer = styled.section<{
  theme: DefaultTheme;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 70px;
`;

export const TopVoteIncentivesTitle = styled.h2<{ theme: DefaultTheme }>`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 71.76px;
  text-align: left;

  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p<{ theme: DefaultTheme }>`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: left;

  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 110px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (max-width: 1024px) {
    grid-template-columns: none;
    justify-content: center;
  }
`;

export const CardAmount = styled.div<{ theme: DefaultTheme }>`
  font-size: 1.5em;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 10px;
`;

export const CardIcon = styled.img`
  height: 40px;
  margin-bottom: 10px;
`;

export const CardText = styled.div<{ theme: DefaultTheme }>`
  font-size: 1em;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const CardSubtext = styled.div`
  font-size: 0.9em;
  color: #ccc;
`;
