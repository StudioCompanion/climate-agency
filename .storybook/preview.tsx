import * as React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import * as NextImage from 'next/image'

import { globalStyles } from '../src/styles/global'

const { iphonex, iphonese2, ipad } = INITIAL_VIEWPORTS

const custom = {
  '13inch': {
    name: '1366 x 768',
    styles: {
      width: '1366px',
      height: '768px',
    },
    type: 'desktop',
  },
}

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: {
      iphonex,
      iphonese2,
      ipad,
      ...custom,
    },
  },
}

export const decorators = [
  (Story) => {
    globalStyles()
    return (
      <>
        <Story />
      </>
    )
  },
]

/**
 * next/Image component does not work out of the box with Storybook.
 *
 * Here is the issue:
 *
 * https://github.com/vercel/next.js/issues/18393
 *
 * Here is the fix:
 *
 * https://github.com/vercel/next.js/issues/18393#issuecomment-783269086
 */
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})
