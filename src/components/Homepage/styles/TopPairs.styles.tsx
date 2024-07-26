import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const TopPairsContainer = styled.section<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 70px;
  margin: 0 -57px;
  text-align: center;
  padding: 100px 227px;

  @media (max-width: 1400px) {
    padding: 100px 200px;
  }

  @media (max-width: 1300px) {
    padding: 100px 100px;
  }

  @media (max-width: 1200px) {
    padding: 100px 80px;
  }
`;

export const Title = styled.h2<{ theme: DefaultTheme }>`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 71.76px;
  color: ${({ theme }) => theme.colors.text};
  background: linear-gradient(
    90deg,
    rgba(71, 255, 153, 1),
    rgba(62, 172, 252, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 44px;
  }
`;

export const Description = styled.p<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  margin-bottom: 40px;
`;

export const CardsContainer = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 53.82px;
  text-align: center;

  @media (max-width: 1024px) {
    grid-template-columns: none;
    justify-content: center;
  }
`;

export const CardValue = styled.div<{ theme: DefaultTheme }>`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

export const CardIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const CardIcon = styled.img`
  width: 30px;
  height: 30px;
  &:first-child {
    margin-right: -11px;
  }
  &:last-child {
    margin-left: -2px;
  }
`;

export const CardPercentage = styled.div<{ theme: DefaultTheme }>`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.grey};
`;
