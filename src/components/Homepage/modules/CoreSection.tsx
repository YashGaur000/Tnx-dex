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
import { useNavigate } from 'react-router-dom';

const CoreSection: React.FC = () => {
  const Navigate = useNavigate();

  function handleManageveTenex() {
    Navigate('/governance/managevetenex');
  }

  function handleButtonClick() {
    Navigate('/swap');
  }
  return (
    <CoreSectionContainer>
      <SubTitle>Sustainable Revenue</SubTitle>
      <Title>Unveiling the Core of our TenEx System</Title>
      <Description>
        TenEx products are carefully designed to drive revenue to veTENEX
        holders.
      </Description>
      <ContentContainer>
        <Card>
          <CardTitle>TENEX</CardTitle>
          <CardDescription>
            TENEX is the beating heart of our Ecosystem, it can be bought,
            farmed, staked, locked and earned.
          </CardDescription>
          <GlobalButton padding="10px 20px" onClick={handleButtonClick}>
            Buy TENEX
          </GlobalButton>
        </Card>
        <Card>
          <CardTitle>veTENEX</CardTitle>
          <CardDescription>
            veTENEX holders earn 100% of trading fees across both of our
            platforms.
          </CardDescription>
          <GlobalButton padding="10px 20px" onClick={handleManageveTenex}>
            Create veTENEX
          </GlobalButton>
        </Card>
      </ContentContainer>
    </CoreSectionContainer>
  );
};
export default CoreSection;
