import React from 'react';

import LiquidityPool from '../../components/Liquidity/LiquidityHomePage/modules/LiquidityPool';
import { MainContainerStyle } from '../../components/common/MainContainerStyle';

const LiquidityPage: React.FC = () => {
  return (
    <MainContainerStyle>
      <LiquidityPool />
    </MainContainerStyle>
  );
};

export default LiquidityPage;
