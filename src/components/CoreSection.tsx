import React from 'react';
import styled from 'styled-components';

const CoreSectionContainer = styled.section`
  padding: 60px 20px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 70px;
  margin: 0 -50px;
  text-align: center;
`;

const SubTitle = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.text};
  background: linear-gradient(
    90deg,
    rgba(71, 255, 153, 1),
    rgba(62, 172, 252, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2em;
  margin-bottom: 40px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: linear-gradient(
    90deg,
    rgba(71, 255, 153, 1),
    rgba(62, 172, 252, 1)
  );
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  width: 100%;
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
        <Button>Buy TENEX</Button>
      </Card>
      <Card>
        <CardTitle>veTENEX</CardTitle>
        <CardDescription>
          veTENEX holders earn 100% of trading fees across both of our
          platforms.
        </CardDescription>
        <Button>Create veTENEX</Button>
      </Card>
    </ContentContainer>
  </CoreSectionContainer>
);

export default CoreSection;
