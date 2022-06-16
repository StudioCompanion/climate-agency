import React from 'react'

import { styled } from 'styles/stitches.config'

import { Button, ButtonProps } from '../Buttons/Button'

interface CtaBlockProps {
  content: string
  leftLink: ButtonProps
  rightLink: ButtonProps
}

export const CtaBlock = ({ content, leftLink, rightLink }: CtaBlockProps) => {
  return (
    <CtaBlockWrap>
      <TextContainer>{content}</TextContainer>
      <ButtonsWrap>
        <Button href={leftLink.href} color={leftLink.color}>
          {leftLink.children}
        </Button>
        <Button href={rightLink.href} color={rightLink.color}>
          {rightLink.children}
        </Button>
      </ButtonsWrap>
    </CtaBlockWrap>
  )
}

const CtaBlockWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  p: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
    p: '$20',
  },
})

const TextContainer = styled('p', {
  color: '$black',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  gridColumn: 'span 8',
  mt: '$110',
  mb: '$30',

  '@tabletUp': {
    fontSize: '$L',
    lineHeight: '$L',
    gridColumn: 'span 6',
    mt: '$100',
    mb: '$20',
  },
})

const ButtonsWrap = styled('div', {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$8',
  gridColumn: 'span 8',

  '@tabletUp': {
    flexDirection: 'row',
    gridColumn: '1 / span 6',
  },
})
