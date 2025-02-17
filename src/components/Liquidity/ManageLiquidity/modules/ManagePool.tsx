import LiquidityForm from './LiquidityForm';
import DepositeComponent from './DepositeComponent';
import { useState } from 'react';
import TokenDeposite from './TokenDeposite';
import { MainContainerStyle } from '../../../common/MainContainerStyle';

import {
  CreateFormWrapper,
  CreateMainContainer,
} from '../styles/Managepool.style';
import CreateNewLiquidity from './CreateNewLiquidity';
import { ethers } from 'ethers';

const ManagePool = () => {
  const [token1Value, setToken1Value] = useState<ethers.Numeric>(0);
  const [token2Value, setToken2Value] = useState<ethers.Numeric>(0);
  const [totalBalanceToken1, setTotalBalanceToken1] =
    useState<ethers.Numeric>(0);
  const [totalBalanceToken2, setTotalBalanceToken2] =
    useState<ethers.Numeric>(0);

  const queryParams = new URLSearchParams(location.search);

  const exists = queryParams.get('exists') === 'true' ? true : false;

  // const title = exists ? 'Manage Pool' : 'Create your Liquidity Pool';
  // const description = exists
  //   ? 'Manage your position'
  //   : 'Create your LP position';

  const handleTokenValueChange = (
    token1: ethers.Numeric,
    token2: ethers.Numeric,
    totalBalancetoken1: ethers.Numeric,
    totalBalancetoken2: ethers.Numeric
  ) => {
    setToken1Value(token1);
    setToken2Value(token2);
    setTotalBalanceToken1(totalBalancetoken1);
    setTotalBalanceToken2(totalBalancetoken2);
  };
  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <CreateFormWrapper>
          {!exists && <CreateNewLiquidity />}
          {exists && <TokenDeposite />}
          <LiquidityForm
            totalBalanceToken1={totalBalanceToken1}
            totalBalanceToken2={totalBalanceToken2}
            onTokenValueChange={handleTokenValueChange}
          />
        </CreateFormWrapper>

        <DepositeComponent
          token1Value={token1Value}
          token2Value={token2Value}
          totalBalanceToken1={totalBalanceToken1}
          totalBalanceToken2={totalBalanceToken2}
        />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default ManagePool;
