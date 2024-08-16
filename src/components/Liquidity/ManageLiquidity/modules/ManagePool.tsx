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

const ManagePool = () => {
  const [tokenValue, setTokenValue] = useState<number>(0);

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

  const handleTokenValueChange = (value: number) => {
    setTokenValue(value);
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
