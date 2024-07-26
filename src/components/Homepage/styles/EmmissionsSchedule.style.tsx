import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const EmissionsContainer = styled.section<{ theme: DefaultTheme }>`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;

  @media (max-width: 1200px) {
    padding: 30px 15px;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const Title = styled.h2<{ theme: DefaultTheme }>`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 71.76px;
  text-align: center;

  color: ${({ theme }) => theme.colors.text};
  background: linear-gradient(
    90deg,
    rgba(71, 255, 153, 1),
    rgba(62, 172, 252, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export const Description = styled.p<{ theme: DefaultTheme }>`
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: center;

  margin-bottom: 40px;

  @media (max-width: 1200px) {
    font-size: 1.1em;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 20px;
  }
`;
