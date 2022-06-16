import React, { ReactNode } from 'react'

import { styled } from 'styles/stitches.config'

interface LinkContainerProps {
  className?: string
  children: ReactNode
  color: 'green' | 'stone'
  href?: string
}

export const LinkContainer = ({
  className,
  children,
  color,
  href,
}: LinkContainerProps) => {
  return (
    <LinkWrap className={className} color={color} href={href}>
      {children}
    </LinkWrap>
  )
}

const LinkWrap = styled('a', {
  variants: {
    color: {
      green: {
        backgroundColor: '$green',
      },
      stone: {
        backgroundColor: '$stone',
      },
    },
  },
  display: 'inline-flex',
  color: '$black',
  border: 'none',
  fontFamily: '$workSans',
  fontWeight: '$semiBold',
  fontSize: '$XXS',
  lineHeight: '$XXXS',
  p: '$12',
  cursor: 'pointer',
  textDecoration: 'none',

  '@motion': {
    transition: 'opacity 250ms ease-out',
  },

  '& > *': {
    color: '$black',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '&:hover': {
    opacity: '50%',
  },

  '&:active': {
    opacity: '50%',
  },
})
