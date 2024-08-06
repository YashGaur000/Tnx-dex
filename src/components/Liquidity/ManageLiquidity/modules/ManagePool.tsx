import LiquidityForm from './LiquidityForm';
import DepositeComponent from './DepositeComponent';
import { useState } from 'react';
import TokenDeposite from './TokenDeposite';
import { MainContainerStyle } from '../../../common/MainContainerStyle';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import { LiquidityTitle } from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  LiquidityFormContainer,
  ManageLiquidityContainer,
} from '../styles/Managepool.style';

const ManagePool = () => {
  const [tokenValue, setTokenValue] = useState<number>(0);

  const handleTokenValueChange = (value: number) => {
    setTokenValue(value);
  };
  return (
    <MainContainerStyle>
      <header>
        <LiquidityHeaderTitle fontSize={36}>Manage Pool</LiquidityHeaderTitle>
        <LiquidityTitle fontSize={16}>Manage your position</LiquidityTitle>
      </header>

      <ManageLiquidityContainer>
        <LiquidityFormContainer>
          <TokenDeposite />

          <LiquidityForm
            tokenValue={tokenValue}
            onTokenValueChange={handleTokenValueChange}
          />
        </LiquidityFormContainer>

        <DepositeComponent tokenValue={tokenValue} />
      </ManageLiquidityContainer>
    </MainContainerStyle>
  );
};

export default ManagePool;
