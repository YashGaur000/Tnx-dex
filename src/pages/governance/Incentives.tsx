import React, { Suspense, useEffect } from 'react';

import PageLoader from '../../components/common/PageLoader';
import { id } from 'ethers';
const IncentiveSection = React.lazy(
  () => import('../../components/Incentives/Modules/IncentiveSection')
);
const Incentives: React.FC = () => {
  useEffect(() => {
    document.title = 'Tenex-Incentives';
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [id]);
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <IncentiveSection />
      </Suspense>
    </>
  );
};

export default Incentives;
