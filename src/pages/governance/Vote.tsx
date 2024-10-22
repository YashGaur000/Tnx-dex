import React, { Suspense, useEffect } from 'react';

import { MainContainerStyle } from '../../components/common/MainContainerStyle';
import PageLoader from '../../components/common/PageLoader';
import { id } from 'ethers';

const VoteHomeSection = React.lazy(
  () => import('../../components/Voting/modules/VoteHomeSection')
);

const Vote: React.FC = () => {
  useEffect(() => {
    document.title = 'Tenex-vote';
  }, []);
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
        <VoteHomeSection />
      </MainContainerStyle>
    </Suspense>
  );
};

export default Vote;
