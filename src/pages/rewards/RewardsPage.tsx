import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import RewardCard from '../../components/Rewards/RewardCard'; // Adjust the import path based on your project structure

const RewardsContainer = styled.div<{ theme: DefaultTheme }>`
  padding: 40px 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1<{ theme: DefaultTheme }>`
  font-size: 38px;
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const Description = styled.p<{ theme: DefaultTheme }>`
  font-size: 20px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const RewardsPage: React.FC = () => {
  return (
    <RewardsContainer>
      <Title>Rewards</Title>
      <Description>
        Claim rewards from locking tokens, emissions, incentives, and fees of
        your voted pools.
      </Description>
      <CardContainer>
        <RewardCard
          title="Emissions"
          positionLabel="LP Position"
          positionValue="0.00"
          valueLabel="Value Earned"
          valueValue="0.00"
        />
        <RewardCard
          title="Fees"
          positionLabel="Tokens Earned"
          positionValue="0.00"
          valueLabel="Value Earned"
          valueValue="0.00"
        />
        <RewardCard
          title="Incentives"
          positionLabel="Tokens Earned"
          positionValue="0.00"
          valueLabel="Value Earned"
          valueValue="0.00"
        />
      </CardContainer>
    </RewardsContainer>
  );
};

export default RewardsPage;
