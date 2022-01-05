import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#FBD784',
    },
    background: {
      default: "#0B1D26"
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
    h2: {
      fontWeight: 500,
      color: "#FFF",
      fontSize: "4rem",
      fontFamily: '"Playfair-Display',
      lineHeight: "76.8px"
    },
    h6: {
      fontWeight: 800,
      letterSpacing: "6px",
      textTransform: "uppercase",
      fontFamily: "Noto-Sans",
      fontSize: "18px"
    },
    body1: {
      lineHeight: "32px",
      fontWeight: 600,
      fontSize: "18px"
    },
  }
});

export default theme;