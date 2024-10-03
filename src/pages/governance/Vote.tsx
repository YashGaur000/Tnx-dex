import React, { Suspense } from 'react';

import { MainContainerStyle } from '../../components/common/MainContainerStyle';
import PageLoader from '../../components/common/PageLoader';
const VoteBanner = React.lazy(
  () => import('../../components/Voting/modules/VoteBanner')
);
const VotingPoolBar = React.lazy(
  () => import('../../components/Voting/modules/VotingPoolBar')
);
const VotePoolTable = React.lazy(
  () => import('../../components/Voting/modules/VotePoolTable')
);
const Vote: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <MainContainerStyle>
        <VoteBanner />
        <VotingPoolBar />
        <VotePoolTable />
      </MainContainerStyle>
    </Suspense>
  );
};

export default Vote;
