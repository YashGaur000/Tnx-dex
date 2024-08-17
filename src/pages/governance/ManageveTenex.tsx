import React, { useEffect } from 'react';

import Main from '../../components/ManageVeTenex/Modules/Main';
import { MainContainerStyle } from '../../components/common/MainContainerStyle';

const ManageveTenex: React.FC = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainContainerStyle>
      <Main />
    </MainContainerStyle>
  );
};

export default ManageveTenex;
