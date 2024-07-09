import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

const ParticipantsContainer = styled.section<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 70px;
  margin-left: -50px;
  margin-right: -50px;
`;

const ParticipantsTitle = styled.h2<{ theme: DefaultTheme }>`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 71.76px;
  text-align: left;

  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 70px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 110px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div<{ theme: DefaultTheme }>`
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme.colors.cardLight};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3<{ theme: DefaultTheme }>`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: left;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const CardText = styled.p<{ theme: DefaultTheme }>`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 23.92px;
  text-align: left;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Stat = styled.div<{ theme: DefaultTheme }>`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const StatValue = styled.h4<{ theme: DefaultTheme }>`
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 95.68px;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 54px;
    line-height: 1.3;
  }

  @media (max-width: 1024px) {
    font-size: 44px;
    line-height: 1.3;
  }
`;

const StatLabel = styled.p<{ theme: DefaultTheme }>`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;

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
