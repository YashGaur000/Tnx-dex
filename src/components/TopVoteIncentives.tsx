import React from 'react';
import styled from 'styled-components';
import incentiveIcon from '../assets/incentiveIcon.png'; // Replace with the correct path to your icon image

const TopVoteIncentivesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 70px;
`;

const TopVoteIncentivesTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 71.76px;
  text-align: left;

  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 35.88px;
  text-align: left;

  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 110px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardAmount = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardIcon = styled.img`
  height: 40px;
  margin-bottom: 10px;
`;

const CardText = styled.div`
  font-size: 1em;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.grey};
`;

const CardSubtext = styled.div`
  font-size: 0.9em;
  color: #ccc;
`;

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
