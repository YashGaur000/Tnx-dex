import React from 'react';

import VotingPoolBar from '../../components/Voting/modules/VotingPoolBar';
import VoteBanner from '../../components/Voting/modules/VoteBanner';
import VotePoolTable from '../../components/Voting/modules/VotePoolTable';
import { MainContainerStyle } from '../../components/common/MainContainerStyle';

const Vote: React.FC = () => {
  return (
    <MainContainerStyle>
      <VoteBanner />
      <VotingPoolBar />
      <VotePoolTable />
    </MainContainerStyle>
  );
};

export default Vote;
