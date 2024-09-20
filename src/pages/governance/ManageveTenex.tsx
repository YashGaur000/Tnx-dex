import React, { Suspense, useEffect } from 'react';
import { MainContainerStyle } from '../../components/common/MainContainerStyle';
import PageLoader from '../../components/common/PageLoader';
const Main = React.lazy(
  () => import('../../components/ManageVeTenex/Modules/Main')
);
const ManageveTenex: React.FC = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<PageLoader />}>
      <MainContainerStyle>
        <Main />
      </MainContainerStyle>
    </Suspense>
  );
};

export default ManageveTenex;
