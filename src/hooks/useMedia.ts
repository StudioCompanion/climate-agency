import { useState } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'

export const useMedia = (query: string) => {
  const [isQueryTrue, setIsQueryTrue] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const mql = window.matchMedia(query)

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsQueryTrue(e.matches)
    }

    setIsQueryTrue(mql.matches)

    mql.addEventListener('change', handleMediaChange)

    return () => {
      mql.removeEventListener('change', handleMediaChange)
    }
  }, [query])

  return isQueryTrue
}
