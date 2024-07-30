import React from 'react';
import incentiveIcon from '../../../assets/incentiveIcon.png'; // Replace with the correct path to your icon image
import { Card } from '../../common';
import {
  Subtitle,
  TopVoteIncentivesContainer,
  TopVoteIncentivesTitle,
  CardsContainer,
  CardAmount,
  CardIcon,
  CardText,
  CardSubtext,
} from '../styles/TopVoteIncentives.style';

const TopVoteIncentives: React.FC = () => (
  <TopVoteIncentivesContainer>
    <TopVoteIncentivesTitle>Top Vote Incentives</TopVoteIncentivesTitle>
    <Subtitle>
      Fees & Bribes accrue through the epoch and drive revenue to veTENEX
      holders.
    </Subtitle>
    <CardsContainer>
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index}>
          <CardAmount>$8,402.24</CardAmount>
          <CardIcon src={incentiveIcon} alt="Incentive Icon" />
          <CardText>SOL/SUI</CardText>
          <CardSubtext>Classic Constant Product AMM</CardSubtext>
          <CardSubtext>20.54%</CardSubtext>
        </Card>
      ))}
    </CardsContainer>
  </TopVoteIncentivesContainer>
);

export default TopVoteIncentives;
