import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from './Theme';

const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background : linear-gradient(97.67deg, #0F1B3B 2.6%, #232938 94.56%);    ;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Kanit', sans-serif;
    padding:0px 55px;
  }
`;

export default GlobalStyles;
