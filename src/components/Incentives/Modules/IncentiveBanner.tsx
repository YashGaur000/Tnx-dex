import React from 'react';
import {
  Section,
  HeroSection,
  HeroSectionContent,
  HeroSectionTitle,
  Label,
} from '../Styles/IncentiveBanner.style';

const IncentiveBanner: React.FC = () => {
  return (
    <Section>
      <HeroSection>
        <HeroSectionContent>
          <HeroSectionTitle>Incentives</HeroSectionTitle>
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
