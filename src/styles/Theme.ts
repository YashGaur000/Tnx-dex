export interface DefaultTheme {
  colors: Colorpallate;
  fonts: FontType;
  fontWeights: FontWeight;
}

interface Colorpallate {
  primary: string;

  secondary: string;
  background: string;
  text: string;
  buttonBackground: string;
  buttonHover: string;
  card: string;
  cardLight: string;
  cardDark: string;
  title: string;
  grey: string;
  hover: string;
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
    text: '#ffffff',
    buttonBackground:
      'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)',
    buttonHover: 'linear-gradient(188.32deg, #3EACFC -7.09%, #47FF99 99.48%)',
    card: 'linear-gradient(180deg, #18264C 0%, #1F305F 100%)',
    cardLight: 'linear-gradient(180deg, #273762 0%, #2A3E75 100%);',
    cardDark: 'rgba(16, 28, 59, 1)',
    title: 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)',
    grey: 'rgba(204, 204, 204, 1)',
    hover: '#ffffff5e',
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
