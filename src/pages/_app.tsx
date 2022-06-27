import * as React from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import { globalStyles } from 'styles/global'

import { styled } from 'styles/stitches.config'

import { NavBar } from '../components/Navigation/NavBar'
import { Footer } from '../components/Navigation/Footer'
import { WidgetMarker } from 'components/Widgets/WidgetMarker'

globalStyles()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppWrap>
      <WidgetMarker />
      <DefaultSeo {...SEO} />
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </AppWrap>
  )
}

export default App

const AppWrap = styled('body', {
  pt: '$110',
})
