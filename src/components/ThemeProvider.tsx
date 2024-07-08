import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './../styles/Theme';
import GlobalStyles from '../styles/GlobalStyles';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles theme={theme} />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
