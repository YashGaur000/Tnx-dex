import React, { Suspense, useEffect } from 'react';
import PageLoader from '../../components/common/PageLoader';

const AnalyticsSection = React.lazy(
  () => import('../../components/analytics/modules/AnalyticsSection')
);
const ToolsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Tenex-Analytics';
  }, []);

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <AnalyticsSection />
      </Suspense>
    </>
  );
};

export default ToolsPage;
