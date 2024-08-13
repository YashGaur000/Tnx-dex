import LiquidityForm from './LiquidityForm';
import DepositeComponent from './DepositeComponent';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TokenDeposite from './TokenDeposite';
import { MainContainerStyle } from '../../../common/MainContainerStyle';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import { LiquidityTitle } from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  CreateFormWrapper,
  CreateMainContainer,
} from '../styles/Managepool.style';

const ManagePool = () => {
  const [tokenValue, setTokenValue] = useState<number>(0);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const token1 = queryParams.get('token1');
  // const token2 = queryParams.get('token2');
  console.log('token 1 :', token1);

  const handleTokenValueChange = (value: number) => {
    setTokenValue(value);
  };
  return (
    <MainContainerStyle>
      <header>
        <LiquidityHeaderTitle fontSize={36}>Manage Pool</LiquidityHeaderTitle>
        <LiquidityTitle fontSize={16}>Manage your position</LiquidityTitle>
      </header>

      <CreateMainContainer>
        <CreateFormWrapper>
          <TokenDeposite />
          {/* <CreateNewLiquidity/> */}
          <LiquidityForm
            tokenValue={tokenValue}
            onTokenValueChange={handleTokenValueChange}
          />
        </CreateFormWrapper>

        <DepositeComponent tokenValue={tokenValue} />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default ManagePool;
