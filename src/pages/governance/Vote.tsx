import React, { Suspense, useEffect } from 'react';

import { MainContainerStyle } from '../../components/common/MainContainerStyle';
import PageLoader from '../../components/common/PageLoader';
import { id } from 'ethers';
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
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [id]);
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
