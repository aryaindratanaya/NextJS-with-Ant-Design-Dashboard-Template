import { CookiesProvider } from 'react-cookie'

import 'styles/antd.less'
import 'styles/globals.css'

import Head from 'next/head'

import { BackTop } from 'antd'

import TheLayout from 'components/_App/TheLayout'

import { AuthProvider } from 'libs/contexts/auth'
import ProtectedRoute from 'libs/utils/ProtectedRoute'

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

      <CookiesProvider>
        <AuthProvider>
          {!router.pathname.startsWith('/dashboard') ? (
            // not inside the dashboard directory
            // return the actual component
            <Component {...pageProps} />
          ) : (
            // inside the dashboard directory
            // return the component with a dashboard layout
            <ProtectedRoute>
              <TheLayout>
                <Component {...pageProps} />
                <BackTop />
              </TheLayout>
            </ProtectedRoute>
          )}
        </AuthProvider>
      </CookiesProvider>
    </>
  )
}

export default MyApp
