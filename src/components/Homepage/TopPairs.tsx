import React from 'react';
import styled from 'styled-components';
import solLogo from '../../assets/sol-logo.png'; // Replace with the actual path to your image
import suiLogo from '../../assets/sui-logo.png'; // Replace with the actual path to your image
import { DefaultTheme } from '../../styles/Theme';

const TopPairsContainer = styled.section<{ theme: DefaultTheme }>`
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

const Title = styled.h2<{ theme: DefaultTheme }>`
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

const Description = styled.p<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div<{ theme: DefaultTheme }>`
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

const Card = styled.div<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.cardDark};
  padding: 20px;
  border-radius: 20px;
  width: 300px;
  text-align: center;

  @media (max-width: 1200px) {
    width: 250px;
  }

  @media (max-width: 1024px) {
    width: 210px;
    margin: 10px 0;
  }
`;

const CardValue = styled.div<{ theme: DefaultTheme }>`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const CardIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const CardIcon = styled.img`
  width: 30px;
  height: 30px;
  &:first-child {
    margin-right: -11px;
  }
  &:last-child {
    margin-left: -2px;
  }
`;

const CardTitle = styled.div<{ theme: DefaultTheme }>`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 5px;
`;

const CardDescription = styled.div<{ theme: DefaultTheme }>`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 5px;
`;

const CardPercentage = styled.div<{ theme: DefaultTheme }>`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.grey};
`;

const TopPairs: React.FC = () => (
  <TopPairsContainer>
    <Title>Top Pairs</Title>
    <Description>
      veTENEX holders vote on pairs to determine next epochs emissions.
    </Description>
    <CardsContainer>
      {[1, 2, 3].map((_, index) => (
        <Card key={index}>
          <CardValue>$8,402.24</CardValue>
          <CardIcons>
            <CardIcon src={solLogo} alt="SOL Logo" />
            <CardIcon src={suiLogo} alt="SUI Logo" />
          </CardIcons>
          <CardTitle>SOL/SUI</CardTitle>
          <CardDescription>Classic Constant Product AMM</CardDescription>
          <CardPercentage>20.54%</CardPercentage>
        </Card>
      ))}
    </CardsContainer>
  </TopPairsContainer>
);

export default TopPairs;
