import React from 'react';
import { styled } from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import VotingPoolBar from '../../components/Voting/modules/VotingPoolBar';
import VoteBanner from '../../components/Voting/modules/VoteBanner';
import VotePoolTable from '../../components/Voting/modules/VotePoolTable';

const VotingContainer = styled.div<{ theme: DefaultTheme }>`
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
  color: ${({ theme }) => theme.colors.text};
  height: 165vh;
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
      <VotePoolTable />
    </VotingContainer>
  );
};

export default Vote;
