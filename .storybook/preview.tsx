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
 * https://github.com/vercel/next.js/issues/36417
 *
 * Here is the fix:
 *
 * https://github.com/vercel/next.js/issues/36417#issuecomment-1117360509
 */
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) =>
    typeof props.src === 'string' ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
})

Object.defineProperty(NextImage, '__esModule', {
  configurable: true,
  value: true,
})
