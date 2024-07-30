import React from 'react';
import { Card, CardTitle } from '../../common';
import {
  ParticipantsContainer,
  ParticipantsTitle,
  CardsContainer,
  CardText,
  StatsContainer,
  StatValue,
  Stat,
  StatLabel,
} from '../styles/ParticipantsSection.style';

const ParticipantsSection: React.FC = () => (
  <ParticipantsContainer>
    <ParticipantsTitle>Participants</ParticipantsTitle>
    <CardsContainer>
      <Card>
        <CardTitle>Traders</CardTitle>
        <CardText>
          Swap tokens with minimal slippage and pay some of the lowest fees to
          TENEX lockers.
        </CardText>
      </Card>
      <Card>
        <CardTitle>Liquidity Providers</CardTitle>
        <CardText>
          Deposit the tokens used for trading on TenEx to earn TENEX emissions
          as reward.
        </CardText>
      </Card>
      <Card>
        <CardTitle>Protocols</CardTitle>
        <CardText>
          Offer incentives to veTENEX voters to attract votes / TENEX emissions
          to their pools, facilitating low-cost liquidity building.
        </CardText>
      </Card>
      <Card>
        <CardTitle>veTENEX Voters</CardTitle>
        <CardText>
          veTENEX Voters decide which pools earn TENEX emissions, earning full
          incentives and fees for their chosen pools. Any TENEX holders can
          convert tokens to veTENEX by locking them.
        </CardText>
      </Card>
    </CardsContainer>
    <StatsContainer>
      <Stat>
        <StatValue>62.45%</StatValue>
        <StatLabel>TENEX Locked</StatLabel>
      </Stat>
      <Stat>
        <StatValue>$16.32 million</StatValue>
        <StatLabel>Marketcap</StatLabel>
      </Stat>
      <Stat>
        <StatValue>$0.0240</StatValue>
        <StatLabel>Incentives per vote (Avg)</StatLabel>
      </Stat>
      <Stat>
        <StatValue>12.45%</StatValue>
        <StatLabel>veTENEX APR</StatLabel>
      </Stat>
      <Stat>
        <StatValue>2.64 million</StatValue>
        <StatLabel>TENEX to veTENEX</StatLabel>
      </Stat>
      <Stat>
        <StatValue>$40,432</StatValue>
        <StatLabel>Epoch Incentives</StatLabel>
      </Stat>
    </StatsContainer>
  </ParticipantsContainer>
);

export default ParticipantsSection;
