import React, { ReactNode } from 'react'

import { styled } from 'styles/stitches.config'

interface GridLayoutProps {
  children: ReactNode
  gridFlow: 'initial' | 'dense' | 'revert'
}

export const GridLayout = ({ children, gridFlow }: GridLayoutProps) => {
  return <Wrap gridFlow={gridFlow}>{children}</Wrap>
}

const Wrap = styled('section', {
  variants: {
    gridFlow: {
      initial: {
        gridAutoFlow: 'initial',
      },
      dense: {
        gridAutoFlow: 'dense',
      },
      revert: {
        gridAutoFlow: 'revert',
      },
    },
  },
  display: 'grid',
  gridTemplateColumns: 'repeat(8, minmax(auto, 1fr))',
  columnGap: '$16',
  p: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, minmax(auto, 1fr))',
    columnGap: '$20',
    p: '$20',
  },
})
