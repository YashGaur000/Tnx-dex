const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1c1c1e',
    background:
      'linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%)',
    text: '#ffffff',
    buttonBackground:
      'linear-gradient(90deg, rgba(9,173,251,1) 0%, rgba(0,242,150,1) 100%)',
    buttonHover:
      'linear-gradient(90deg, rgba(0,242,150,1) 0%, rgba(9,173,251,1) 100%)',
    card: 'linear-gradient(180deg, #18264C 0%, #1F305F 100%);',
  },
  fonts: {
    main: 'Helvetica, Arial, sans-serif',
  },
};

export type ThemeType = typeof theme;
export default theme;
