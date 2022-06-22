import { Globals } from '@react-spring/web'

import { useMedia } from './useMedia'

export const useReducedMotion = () => {
  const reducedMotion = useMedia('(prefers-reduced-motion)', (isReduced) => {
    if (Globals.skipAnimation !== isReduced) {
      Globals.assign({
        skipAnimation: isReduced,
      })
    }
  })

  return reducedMotion
}
