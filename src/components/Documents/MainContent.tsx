import React from 'react';
import { Logo } from '../Header';
import logoImage from '../../assets/logo.svg';
import { Outlet } from 'react-router-dom';
import { MainContentContainer, Banner } from './style';

const MainContent: React.FC = () => {
  return (
    <MainContentContainer>
      <Banner>
        <Logo src={logoImage} />
        Premier Trading and Liquidity Market Place of DeFi
      </Banner>
      <Outlet />
    </MainContentContainer>
  );
};

export default MainContent;
