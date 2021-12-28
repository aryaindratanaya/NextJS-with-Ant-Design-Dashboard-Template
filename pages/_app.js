import 'styles/antd.less'
import 'styles/globals.css'

import Head from 'next/head'

import { AuthProvider } from 'libs/contexts/auth'

import { BackTop } from 'antd'

import TheLayout from 'components/_App/TheLayout'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Rentalann - Put slogan here</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Rentalann - Put slogan here" />
        <meta
          name="og:title"
          property="og:title"
          content="Mibix - Put slogan here"
        ></meta>
        <meta name="twitter:card" content="Mibix - Put slogan here"></meta>
        <link rel="canonical" href="https://mibix-react.envytheme.com/"></link>
      </Head>

      <AuthProvider>
        {router.route == '/' ? (
          <Component {...pageProps} />
        ) : (
          <TheLayout>
            <Component {...pageProps} />
            <BackTop />
          </TheLayout>
        )}
      </AuthProvider>
    </>
  )
}

export default MyApp
