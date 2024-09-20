import React, { Suspense, useEffect } from 'react';
import { MainContainerStyle } from '../../components/common/MainContainerStyle';
const Main = React.lazy(
  () => import('../../components/ManageVeTenex/Modules/Main')
);
const ManageveTenex: React.FC = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainContainerStyle>
        <Main />
      </MainContainerStyle>
    </Suspense>
  );
};

export default ManageveTenex;
