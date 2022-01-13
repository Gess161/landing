import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#FBD784',
      light: "#FFF",
      dark: '#FFF'
    },
    background: {
      default: "#0B1D26",
      paper: "transparent"
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Roboto", "Helvetica", "Arial", "Noto-Sans", "Playfair-Display", sans-serif',
    fontSize: 18,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      '@media (min-width:2100px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      lineHeight: "32px",
      fontWeight: 600,
      fontSize: "2rem",
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:2100px)': {
        fontSize: '3rem',
        lineHeight: "40px"
      },
    },
    h2: {
      fontWeight: 500,
      color: "#FFF",
      fontSize: "4rem",
      fontFamily: '"Playfair-Display"',
      lineHeight: "76.8px",
      '@media (max-width:600px)': {
        fontSize: "3rem",
      },
      '@media (min-width:2100px)': {
        fontSize: '6rem',
      },
    },
    h6: {
      fontWeight: 800,
      letterSpacing: "6px",
      textTransform: "uppercase",
      fontSize: "18px",
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
      '@media (min-width:2100px)': {
        fontSize: '1.75rem',
      },
    },
    body1: {
      lineHeight: "32px",
      fontWeight: 600,
      fontSize: "18px",
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:2100px)': {
        fontSize: '1.75rem',
        lineHeight: "40px"
      },
    },
  }
});

export default theme;