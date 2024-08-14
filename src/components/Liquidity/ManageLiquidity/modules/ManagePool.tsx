import LiquidityForm from './LiquidityForm';
import DepositeComponent from './DepositeComponent';
import { useState } from 'react';
import TokenDeposite from './TokenDeposite';
import { MainContainerStyle } from '../../../common/MainContainerStyle';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import { LiquidityTitle } from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  CreateFormWrapper,
  CreateMainContainer,
} from '../styles/Managepool.style';
import CreateNewLiquidity from './CreateNewLiquidity';
import { ethers } from 'ethers';

const ManagePool = () => {
  const [token1Value, setToken1Value] = useState<ethers.Numeric>(0);
  const [token2Value, setToken2Value] = useState<ethers.Numeric>(0);

  // const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // const token1 = queryParams.get('token1');
  // const token2 = queryParams.get('token2');
  // console.log('token 1 :', token1);

  // Navigate('/liquidity/manage');
  const exists = queryParams.get('exists') === 'true' ? true : false;

  const title = exists ? 'Manage Pool' : 'Create New Pool';
  const description = exists
    ? 'Manage your position'
    : 'Create your LP position';

  const handleTokenValueChange = (
    token1: ethers.Numeric,
    token2: ethers.Numeric
  ) => {
    setToken1Value(token1);
    setToken2Value(token2);
  };
  return (
    <MainContainerStyle>
      <header>
        <LiquidityHeaderTitle fontSize={36}>{title}</LiquidityHeaderTitle>
        <LiquidityTitle fontSize={16}>{description}</LiquidityTitle>
      </header>

      <CreateMainContainer>
        <CreateFormWrapper>
          {!exists && <CreateNewLiquidity />}
          <TokenDeposite />
          <LiquidityForm onTokenValueChange={handleTokenValueChange} />
        </CreateFormWrapper>

        <DepositeComponent
          token1Value={token1Value}
          token2Value={token2Value}
        />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default ManagePool;
