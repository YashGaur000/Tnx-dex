import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const HeroSectionTitle = styled.h1`
  font-weight: 300;
  line-height: 1.5;
  text-align: left;
  font-size: 36px;
  @media (max-width: 400px) {
    font-size: 1.5em;
  }
`;

export const Title = styled.p<{ fontSize: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 60px;
`;

export const Label = styled.label`
  font-family: Kanit;
  line-height: 1.75;
  text-align: left;
  font-size: 16px;
  font-weight: 300;
`;

export const HeroSection = styled.main`
  display: flex;
  height: auto;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 40px;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const HeroSectionContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #cccccc;
  padding-top: 10px;
  width: 50%;
  @media (max-width: 1250px) {
    width: 60%;
  }
  @media (max-width: 1100px) {
    font-size: 15px;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
