import { IncmixProvider } from '@incmix-ui/react'
import FontFace from 'components/font-face'
import Head from 'next/head'
import React from 'react'
import theme from 'theme'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <meta name="theme-color" content="#319795" />
        {process.env.NODE_ENV === 'production' && (
          <script async defer data-domain="incmix-ui.com" src="https://plausible.io/js/plausible.js" />
        )}
      </Head>
      <IncmixProvider theme={theme}>
        <Component {...pageProps} />
      </IncmixProvider>
      <FontFace />
    </>
  )
}

export default App
