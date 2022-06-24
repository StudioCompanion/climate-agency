import * as React from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import { globalStyles } from 'styles/global'

import { NavBar } from '../components/Navigation/NavBar'
import { Footer } from '../components/Navigation/Footer'

globalStyles()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
