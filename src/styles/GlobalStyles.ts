import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
//    @import url(https://fonts.google.com/share?selection.family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900)  
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background : linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%);
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
  }
`;

export default GlobalStyles;
