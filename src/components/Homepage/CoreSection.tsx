import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import { CardTitle, GlobalButton } from '../common';

const CoreSectionContainer = styled.section<{ theme: DefaultTheme }>`
  padding: 60px 20px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 70px;
  margin: 0 -57px;
  text-align: center;
`;

const SubTitle = styled.h3<{ theme: DefaultTheme }>`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5em;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 10px;
`;

const Title = styled.h2<{ theme: DefaultTheme }>`
  font-size: 2.5em;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.buttonBackground};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const Description = styled.p<{ theme: DefaultTheme }>`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2em;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 40px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
`;

const Card = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: left;
`;

const CardDescription = styled.p<{ theme: DefaultTheme }>`
  font-size: 1em;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
`;

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
