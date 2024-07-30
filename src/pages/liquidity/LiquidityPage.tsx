import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
import LiquidityHeader from '../../components/Liquidity/LiquidityHeader';
// import LiquidityPools from '../../components/Liquidity/LiquidityPools';
import LiquidityPoolBar from '../../components/Liquidity/LiquidityPoolBar';
import LiquidityPoolTable from '../../components/Liquidity/LiquidityPoolTable';

const LiquidityContainer = styled.div<{ theme: DefaultTheme }>`
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
  @media (max-width: 900px) {
    display: inline;
    text-align: -webkit-center;
  }
`;

// import { DefaultTheme } from '../../styles/Theme';
// import styled from 'styled-components';
// import ManagePool from '../../components/ManageLiquidity/ManagePool';

// const LiquidityContainer = styled.div<{ theme: DefaultTheme }>`
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
//   gap: 20px;
//   padding: 40px;
//   padding-top: 30px;
//   color: ${({ theme }) => theme.colors.text};
//   height: 100vh;
//   @media (max-width: 900px) {
//     display: inline;
//     text-align: -webkit-center;
//   }
// `;

const LiquidityPage: React.FC = () => {
  return (
    <LiquidityContainer>
      <LiquidityHeader />
      <LiquidityPoolBar />
      <LiquidityPoolTable />
      {/* <LiquidityPools/> */}
    </LiquidityContainer>
  );
};

export default LiquidityPage;
