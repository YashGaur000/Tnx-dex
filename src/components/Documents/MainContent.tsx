import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
// import { Logo } from '../Header';
// import logoImage from '../../assets/logo.svg';
import { Outlet } from 'react-router-dom';

const MainContentContainer = styled.main<{ theme: DefaultTheme }>`
  padding: 10px;
  margin-left: 15%;
  margin-bottom: 15%;
  width: 90%;
  // border-left: 1px solid ${({ theme }) => theme.colors.grey};

  @media (max-width: 900px) {
    margin-left: 0;
    width: 100%;
  }
`;

// const Banner = styled.div<{ theme: DefaultTheme }>`
//   background: ${({ theme }) => theme.colors.card};
//   color: ${({ theme }) => theme.colors.text};
//   padding: 20px;
//   text-align: center;
//   margin-bottom: 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   border-radius: 20px;
//   // position: sticky;
//   // top: 10px;
//   // z-index: 100;
// `;

const MainContent: React.FC = () => {
  return (
    <MainContentContainer>
      {/* <Banner>
        <Logo src={logoImage} />
        Premier Trading and Liquidity Market Place of DeFi
      </Banner> */}
      <Outlet />
    </MainContentContainer>
  );
};

export default MainContent;
