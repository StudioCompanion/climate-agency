import { ReactNode } from 'react'

import { styled } from 'styles/stitches.config'

interface TextCaptionProps {
  children: ReactNode
  color: 'black' | 'white'
  className?: string
}

export const TextCaption = ({
  children,
  color,
  className,
}: TextCaptionProps) => {
  return (
    <CaptionContainer className={className} color={color}>
      {children}
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
