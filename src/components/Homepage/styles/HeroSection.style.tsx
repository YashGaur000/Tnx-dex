import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const HeroContainer = styled.section<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  padding: 0px 40px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    flex-direction: column-reverse;
    padding-top: 20px;
    margin-top: 20%;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.medium}) {
    flex-direction: column-reverse;
    margin-top: 50%;
  }
`;

export const TextContainer = styled.div<{ theme: DefaultTheme }>`
  flex: 1;
  padding: 20px;
  max-width: 50%;

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    padding: 0px;
    max-width: 30%;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    padding: 0px;
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.medium}) {
    padding: 0px 20px;
    max-width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1<{ theme: DefaultTheme }>`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 71.76px;
  letter-spacing: 0.02em;
  text-align: left;

  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5em;

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    font-size: 38px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    font-size: 40px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.screenSizes.medium}) {
    font-size: 30px;
    text-align: center;
  }
`;

export const GradientText = styled.span<{ theme: DefaultTheme }>`
  font-size: 65px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 40px;
  letter-spacing: 0.02em;
  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    font-size: 50px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    font-size: 55px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.medium}) {
    font-size: 43px;
    text-align: center;
  }
`;

export const Description = styled.p<{ theme: DefaultTheme; align: string }>`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: ${({ align }) => align};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.large}) {
    font-size: 18px;
    text-align: center;
  }
`;

export const ImageContainer = styled.div<{ theme: DefaultTheme }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;

  @media (max-width: ${({ theme }) => theme.screenSizes.extraLarge}) {
    max-width: 100%;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.medium}) {
    max-width: 100%;
  }
`;
