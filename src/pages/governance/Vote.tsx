import React from 'react';
import { styled } from 'styled-components';
import VoteBanner from '../../components/Voting/VoteBanner';
import VotePool from '../../components/Voting/VotePool';
import VotingPoolBar from '../../components/Voting/VotingPoolBar';
import { DefaultTheme } from '../../styles/Theme';
import VotePoolTable from '../../components/Voting/VotePool';

const VotingContainer = styled.div<{ theme: DefaultTheme }>`
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
  @media (max-width: 900px) {
    display: inline;
    text-align: -webkit-center;
  }
`;

const Vote: React.FC = () => {
  return (
    <VotingContainer>
      <VoteBanner />
      <VotingPoolBar />
      <VotePool />
      <VotePoolTable />
    </VotingContainer>
  );
};

export default Vote;
