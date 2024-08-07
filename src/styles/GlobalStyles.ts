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

@media (min-width: 600px) {
  body {
   
    padding: 20px;
  }
}

/* Large screens (desktop) */
@media (min-width: 992px) {
  body {
    
    padding: 30px;
  }
  }
`;

export default GlobalStyles;
