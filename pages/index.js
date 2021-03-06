import Head from 'next/head'
import theme from '../styles/theme'
import { Box, ThemeProvider } from '@mui/system'
import Footer from '../components/Footer'
import Background from '../components/Background'
import Header from '../components/Header'
import Body from '../components/Body'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          width: '100%',
          height: "100%",
        }}
      >
        <Background />
        <Header />
        <Body />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
