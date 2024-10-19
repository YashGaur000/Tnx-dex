import React, { Suspense, useEffect } from 'react';
import { MainContainerStyle } from '../../components/common/MainContainerStyle';
import PageLoader from '../../components/common/PageLoader';
import { id } from 'ethers';
const Main = React.lazy(
  () => import('../../components/ManageVeTenex/Modules/Main')
);
const ManageveTenex: React.FC = () => {
  useEffect(() => {
    document.title = 'Tenex-governance';
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
        <Main />
      </MainContainerStyle>
    </Suspense>
  );
};

export default ManageveTenex;
