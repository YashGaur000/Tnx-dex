import React, { useEffect } from 'react';

import LiquidityPool from '../../components/Liquidity/LiquidityHomePage/Modules/LiquidityPool';
import { MainContainerStyle } from '../../components/common/MainContainerStyle';

const LiquidityPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Tenex-Liquidity';
  }, []);
  return (
    <MainContainerStyle>
      <LiquidityPool />
    </MainContainerStyle>
  );
};

export default LiquidityPage;
