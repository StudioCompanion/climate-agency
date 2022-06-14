import React from 'react'

import { styled } from 'styles/stitches.config'

interface TextCaptionProps {
  caption: string
  color: 'black' | 'white'
  className?: string
}

export const TextCaption = ({
  caption,
  color,
  className,
}: TextCaptionProps) => {
  return (
    <CaptionContainer className={className} color={color}>
      {caption}
    </CaptionContainer>
  )
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
})
