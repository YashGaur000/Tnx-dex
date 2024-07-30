import React from 'react';
import { CardTitle, GlobalButton, CardDescription } from '../../common';
import {
  Card,
  ContentContainer,
  CoreSectionContainer,
  Description,
  SubTitle,
  Title,
} from '../styles/CoreSection.style';

const CoreSection: React.FC = () => (
  <CoreSectionContainer>
    <SubTitle>Sustainable Revenue</SubTitle>
    <Title>Unveiling the Core of our TenEx System</Title>
    <Description>
      TenEx products are carefully designed to drive revenue to veTENEX holders.
    </Description>
    <ContentContainer>
      <Card>
        <CardTitle>TENEX</CardTitle>
        <CardDescription>
          TENEX is the beating heart of our Ecosystem, it can be bought, farmed,
          staked, locked and earned.
        </CardDescription>
        <GlobalButton padding="10px 20px">Buy TENEX</GlobalButton>
      </Card>
      <Card>
        <CardTitle>veTENEX</CardTitle>
        <CardDescription>
          veTENEX holders earn 100% of trading fees across both of our
          platforms.
        </CardDescription>
        <GlobalButton padding="10px 20px">Create veTENEX</GlobalButton>
      </Card>
    </ContentContainer>
  </CoreSectionContainer>
);

export default CoreSection;
