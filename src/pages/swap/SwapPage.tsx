import React, { Suspense } from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
const SwapForm = React.lazy(
  () => import('../../components/Swap/modules/SwapForm')
);
import PageLoader from '../../components/common/PageLoader';

const SwapContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 140px;
  padding-top: 40px;
  left: 100px;
  border: 2px red;
  gap: 20px;
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
  @media (max-width: 1024px) {
    display: inline;
    text-align: -webkit-center;
  }
`;

const SwapPage: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <SwapContainer>
        <SwapForm />
      </SwapContainer>
    </Suspense>
  );
};

export default SwapPage;
