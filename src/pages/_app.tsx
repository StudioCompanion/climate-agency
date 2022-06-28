import { useState } from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import { globalStyles } from 'styles/global'

import { NavBar } from '../components/Navigation/NavBar'
import { Footer } from '../components/Navigation/Footer'
import { WidgetMarker } from 'components/Widgets/WidgetMarker'
import { SplashPage } from 'components/SplashPage'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'

globalStyles()

const App = ({ Component, pageProps }: AppProps) => {
  const [showSplash, setShowSplash] = useState(true)

  useIsomorphicLayoutEffect(() => {
    const shown = sessionStorage.getItem('splash_shown')
    if (Boolean(shown)) {
      setShowSplash(false)
    } else {
      sessionStorage.setItem('splash_shown', 'true')
    }
  }, [])

  return (
    <>
      <WidgetMarker />
      <DefaultSeo {...SEO} />
      {showSplash && <SplashPage />}
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
