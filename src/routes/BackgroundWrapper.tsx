import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalStyles from './../styles/GlobalStyles';
import theme from './../styles/Theme';

interface BackgroundWrapperProps {
  children: ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  const location = useLocation();

  let background = theme.colors.background; // Default background

  switch (location.pathname) {
    case '/':
      background = theme.colors.backgroundHome;
      break;
    case '/stake':
      background = theme.colors.backgroundCreateLiquidity;
      break;
    case '/swap':
      background = theme.colors.backgroundSwap;
      break;
    case '/dashboard':
      background = theme.colors.backgroundLiquidity;
      break;
    case '/documentation':
      background = theme.colors.backgroundDocs;
      break;
    case '/liquidity':
      background = theme.colors.backgroundLiquidity;
      break;
    case '/liquidity/manage':
      background = theme.colors.backgroundLiquidity;
      break;
    case '/liquidity/create':
      background = theme.colors.backgroundCreateLiquidity;
      break;
    case '/governance':
      background = theme.colors.backgroundLiquidity;
      break;
    case '/vote':
      background = theme.colors.backgroundLiquidity;
      break;
    case '/governance/create':
      background = theme.colors.backgroundLiquidity;
      break;
    case '/incentives':
      background = theme.colors.backgroundIncentive;
      break;
    case '/analytics':
      background = theme.colors.backgroundAnalytics;
      break;
    default:
      if (location.pathname.startsWith('/documentation')) {
        background = theme.colors.backgroundDocs;
      } else {
        background = theme.colors.background; // Fallback background
      }
  }

  return (
    <>
      <GlobalStyles theme={theme} background={background} />
      {children}
    </>
  );
};

export default BackgroundWrapper;
