import React from 'react'

import { styled } from 'styles/stitches.config'

interface TextCaptionProps {
  caption: string
  color: 'black' | 'white'
}

export const TextCaption = ({ caption, color }: TextCaptionProps) => {
  return <CaptionContainer color={color}>{caption}</CaptionContainer>
}

const CaptionContainer = styled('figcaption', {
  variants: {
    color: {
      black: {
        color: '$black',
      },
      white: {
        color: '$white',
      },
    },
  },
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: 'span 4',
  },
})
