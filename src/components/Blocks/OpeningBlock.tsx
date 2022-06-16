import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'

interface OpeningBlockProps {
  content: string
  mediaImage: MediaImageProps
  layout: 'default' | 'large'
}

export const OpeningBlock = ({
  content,
  mediaImage,
  layout,
}: OpeningBlockProps) => {
  return (
    <OpeningBlockWrap>
      <TextContainer layout={layout}>{content}</TextContainer>
      <ImageContainer layout={layout}>
        {mediaImage ? <MediaImage {...mediaImage} /> : null}
      </ImageContainer>
    </OpeningBlockWrap>
  )
}

const OpeningBlockWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  p: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    p: '$20',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',
  mt: '$16',

  '@tabletUp': {
    gridRowStart: '1',
    mt: '0',
  },

  variants: {
    layout: {
      default: {
        '@tabletUp': {
          gridColumn: 'span 6',
        },
      },
      large: {
        '@tabletUp': {
          gridColumn: 'span 7',
        },
      },
    },
  },
})

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$inria',
  fontWeight: '$light',

  variants: {
    layout: {
      default: {
        fontSize: '$S',
        lineHeight: '$S',
        gridColumn: 'span 8',

        '@tabletUp': {
          fontSize: '$L',
          lineHeight: '$L',
          gridColumn: '7 / span 6',
        },
      },
      large: {
        fontSize: '$M',
        lineHeight: '$M',
        gridColumn: 'span 8',

        '@tabletUp': {
          fontSize: '$XXL',
          lineHeight: '$XXL',
          gridColumn: '8 / span 5',
        },
      },
    },
  },
})