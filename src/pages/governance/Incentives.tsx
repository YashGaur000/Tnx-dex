import React, { Suspense } from 'react';

import PageLoader from '../../components/common/PageLoader';
const IncentiveSection = React.lazy(
  () => import('../../components/Incentives/Modules/IncentiveSection')
);
const Incentives: React.FC = () => {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <IncentiveSection />
      </Suspense>
    </>
  );
};

export default Incentives;
