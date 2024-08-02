export interface DefaultTheme {
  colors: Colorpallate;
  fonts: FontType;
  fontWeights: FontWeight;
}

interface Colorpallate {
  primary: string;
  secondary: string;
  background: string;
  backgroundHome: string;
  backgroundSwap: string;
  backgroundDocs: string;
  backgroundLiquidity: string;
  text: string;
  buttonBackground: string;
  buttonHover: string;
  card: string;
  cardLight: string;
  cardDark: string;
  title: string;
  grey: string;
  greyLight: string;
  hover: string;
  whiteBorder: string;
  greyBorder: string;
  swapIconBackground: string;
  redToggle: string;
  green: string;
  greyDark: string;
  navtoggle: string;
  textGreyColor: string;
}

interface FontType {
  main: string;
}

interface FontWeight {
  regular: number;
  bold: number;
}

const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1c1c1e',
    background:
      'linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%)',
    backgroundHome: `radial-gradient(circle at 80% 8%,#43d6cd7a 0%, transparent 10%),
                     radial-gradient(circle at -10% 23%,#43d6cd7a 0%, transparent 15%),
                     radial-gradient(circle at 97% 36%,#43d6cd7a 0%, transparent 15%),
                     radial-gradient(circle at -10% 64%,#43d6cd7a 0%, transparent 15%),
                     radial-gradient(circle at 97% 84%,#43d6cd7a 0%, transparent 12%),
                     radial-gradient(circle at 50% 91%,#43d6cd7a 0%, transparent 12%),
                     linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%)`,
    backgroundSwap: `radial-gradient(circle at 50% 30%,#43d6cd7a 0%, transparent 40%),
                     linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%)`,
    backgroundLiquidity: `radial-gradient(circle at 50% 30%,#09403f 0%, transparent 30%),
                     linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 90%)`,
    backgroundDocs: `radial-gradient(circle at 50% 40%,#43d6cd7a 0%, transparent 40%),
                     linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%)`,
    text: '#ffffff',
    buttonBackground:
      'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)',
    buttonHover: 'linear-gradient(188.32deg, #3EACFC -7.09%, #47FF99 99.48%)',
    card: 'linear-gradient(180deg, #18264C 0%, #1F305F 100%)',
    cardLight: 'linear-gradient(180deg, #273762 0%, #2A3E75 100%);',
    cardDark: 'rgba(16, 28, 59, 1)',
    title: 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)',
    grey: 'rgba(204, 204, 204, 1)',
    greyLight: 'rgba(255, 255, 255, 0.7)',
    hover: 'linear-gradient(180deg, #273762 0%, #2A3E75 100%)',
    greyBorder: '#B8B8B8',
    textGreyColor: '#DBDBDB',
    whiteBorder: '#FFFFFF',
    swapIconBackground:
      'linear-gradient(97.67deg, #0F1B3B 2.6%, #232938 94.56%)',
    redToggle: '#EB5540',
    green: '#16C062',
    greyDark: '#B8B8B8CC',
    navtoggle: 'linear-gradient(180deg, #18264C 0%, #1F305F 100%)',
  },
  fonts: {
    main: 'Kanit, sans-serif',
  },
  fontWeights: {
    regular: 300,
    bold: 400,
  },
};

export default theme;
