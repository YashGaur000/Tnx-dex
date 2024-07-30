import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from './Theme';

const GlobalStyles = createGlobalStyle<{
  theme: DefaultTheme;
  background: string;
}>`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ background }) => background}; 
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Kanit', sans-serif;
    padding:0px 55px;
  }
`;

export default GlobalStyles;
