export interface DefaultTheme {
  colors: Colorpallate;
  fonts: FontType;
  fontWeights: FontWeight;
  screenSizes: ScreenSizes;
  fontSize: FontSize;
}

interface ScreenSizes {
  small: string;
  medium: string;
  custom900: string;
  large: string;
  extraLarge: string;
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
  loaderBackground: string;
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
  black: string;
  white: string;
  green: string;
  greyDark: string;
  navtoggle: string;
  textGreyColor: string;
  bordercolor: string;
  titleColor: string;
  stepperColor: string;
  backgroundAnalytics: string;
  separator: string;
  checkboxBorder: string;
  checkboxGrayBorder: string;
  backgroundCreateLiquidity: string;
}

interface FontType {
  main: string;
}

interface FontWeight {
  light: number;
  regular: number;
  bold: number;
}
interface FontSize {
  large: string;
  medium: string;
  small: string;
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

    backgroundLiquidity: `radial-gradient(circle at 50% 20%,#43d6cd3a 0%, transparent 30%),
                     linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%)`,
    backgroundCreateLiquidity: `radial-gradient(circle at 50% 30%,#43d6cd2a 0%, transparent 60%),
                     linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%)`,
    backgroundDocs: `radial-gradient(circle at 60% 30%,#43d6cd3a 0%, transparent 40%),
                     linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%)`,
    backgroundAnalytics: `radial-gradient(circle at 50% 2%,#43d6cd7a 0%, transparent 8%),
                         radial-gradient(circle at -25% 23%,#43d6cd7a 0%, transparent 12%),
                         radial-gradient(circle at 79% 40%,#43d6cd7a 0%, transparent 12%),
                         radial-gradient(circle at -10% 23%,#43d6cd7a 0%, transparent 15%),
                         radial-gradient(circle at -13% 54%,#43d6cd7a -3%, transparent 15%),
                         radial-gradient(circle at 97% 0%,#43d6cd7a 0%, transparent 0%),
                         radial-gradient(circle at 50% 100%,#43d6cd7a -10%, transparent 9%),
                         linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%)`,
    text: '#ffffff',
    buttonBackground:
      'linear-gradient(190.3deg, #16C062 7.44%, #3EACFC 86.34%)',
    loaderBackground:
      'linear-gradient(90deg, rgb(255 255 255), rgb(0 0 0 / 15%), rgb(255 255 255))',
    buttonHover: 'linear-gradient(188.32deg, #3EACFC -7.09%, #47FF99 99.48%)',
    card: 'linear-gradient(180deg, #18264C 0%, #1F305F 100%)',
    cardLight: 'linear-gradient(180deg, #273762 0%, #2A3E75 100%)',
    cardDark: 'rgba(16, 28, 59, 1)',
    title: 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)',
    grey: 'rgba(204, 204, 204, 1)',
    greyLight: 'rgba(255, 255, 255, 1)',
    hover: 'linear-gradient(180deg, #273762 0%, #2A3E75 100%)',
    greyBorder: '#B8B8B899',
    textGreyColor: '#DBDBDB',
    whiteBorder: '#FFFFFF',
    swapIconBackground:
      'linear-gradient(97.67deg, #0F1B3B 2.6%, #232938 94.56%)',
    redToggle: '#EB5540',
    black: '#000000',
    white: '#ffffff',
    green: '#16C062',
    greyDark: '#B8B8B8CC',
    titleColor: '#CCCCCC',
    navtoggle: 'linear-gradient(180deg, #18264C 0%, #1F305F 100%)',
    bordercolor: 'linear-gradient(209.3deg, #16C062 7.44%, #3EACFC 86.34%)',
    stepperColor: '#101C3B',
    checkboxBorder: '#5DEA9C',
    checkboxGrayBorder: '#5a5a5a',
    separator:
      'linear-gradient(90deg, rgba(219, 219, 219, 0.04) 0%, rgba(219, 219, 219, 0.16) 50%, rgba(219, 219, 219, 0.04) 100%)',
  },
  fonts: {
    main: 'Kanit, sans-serif',
  },
  fontWeights: {
    light: 200,
    regular: 300,
    bold: 400,
  },
  screenSizes: {
    small: '480px',
    medium: '768px',
    custom900: '900px',
    large: '1024px',
    extraLarge: '1200px',
  },
  fontSize: {
    large: '36px',
    medium: '16px',
    small: '12px',
  },
};

export default theme;
