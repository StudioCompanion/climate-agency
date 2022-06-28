import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'

export const useDisableScroll = (isDisabled: boolean) => {
  useIsomorphicLayoutEffect(() => {
    document.body.style.overflow = isDisabled ? 'hidden' : ''
    document.documentElement.style.overflow = isDisabled ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isDisabled])

  return null
}
