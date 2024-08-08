import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

const H1 = styled.h4`
  font-size: 2.4em;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;
  @media (max-width: 400px) {
    font-size: 1.5em;
  }
`;

export const Title = styled.p<{ fontSize: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const Section = styled.section`
  width: 100%;
`;

const Label = styled.label`
  font-family: Kanit;
  line-height: 1.75;
  text-align: left;
  font-size: 24px;
`;

const HeroSection = styled.main`
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

const HeroSectionContent = styled.article`
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

const IncentiveBanner: React.FC = () => {
  return (
    <Section>
      <HeroSection>
        <HeroSectionContent>
          <H1>Incentives</H1>
          <Label>
            Incentivize voting on a specific liquidity pair by bribing veTENEX
            holders
          </Label>
        </HeroSectionContent>
      </HeroSection>
    </Section>
  );
};

export default IncentiveBanner;
