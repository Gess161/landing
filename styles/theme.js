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
      typography: {
          htmlFontSize: 16,
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: 18,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
          fontWeightBold: 700,
          h1: {
              fontWeight: 600,
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontSize: "3.5rem",
              lineHeight: 1.167,
              letterSpacing: "0"
          },
          body1: {
              fontWeight: 700,
              fontSize: "18px"
          },
      }
    },
  });

  export default theme;