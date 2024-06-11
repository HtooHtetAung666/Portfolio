import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
