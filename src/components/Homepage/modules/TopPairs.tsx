import React from 'react';
import solLogo from '../../../assets/sol-logo.png'; // Replace with the actual path to your image
import suiLogo from '../../../assets/sui-logo.png'; // Replace with the actual path to your image
import { Card, CardTitle } from '../../common';
import {
  TopPairsContainer,
  Title,
  Description,
  CardsContainer,
  CardDescription,
  CardIcons,
  CardIcon,
  CardPercentage,
  CardValue,
} from '../styles/TopPairs.styles';

const TopPairs: React.FC = () => (
  <TopPairsContainer>
    <Title>Top Pairs</Title>
    <Description>
      veTENEX holders vote on pairs to determine next epochs emissions.
    </Description>
    <CardsContainer>
      {[1, 2, 3].map((_, index) => (
        <Card key={index} tag="top" width="300px">
          <CardValue>$8,402.24</CardValue>
          <CardIcons>
            <CardIcon src={solLogo} alt="SOL Logo" />
            <CardIcon src={suiLogo} alt="SUI Logo" />
          </CardIcons>
          <CardTitle tag="top">SOL/SUI</CardTitle>
          <CardDescription>Classic Constant Product AMM</CardDescription>
          <CardPercentage>20.54%</CardPercentage>
        </Card>
      ))}
    </CardsContainer>
  </TopPairsContainer>
);

export default TopPairs;
