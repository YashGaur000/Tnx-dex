import { Suspense, useEffect } from 'react';
import { MainContainerStyle } from '../../components/common/MainContainerStyle';
import PageLoader from '../../components/common/PageLoader';
import React from 'react';

const DashBoard = React.lazy(
  () => import('../../components/Dashboard/Index/modules/DashBoard')
);
const DashboardPage = () => {
  useEffect(() => {
    document.title = 'Tenex-Dashboard';
  }, []);
  return (
    <Suspense fallback={<PageLoader />}>
      <MainContainerStyle>
        <DashBoard />
      </MainContainerStyle>
    </Suspense>
  );
};

export default DashboardPage;
