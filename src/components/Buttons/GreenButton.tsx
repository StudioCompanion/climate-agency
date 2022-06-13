import React, { ReactNode } from 'react'
import Link from 'next/link'

import { styled } from 'styles/stitches.config'

export interface GreenButtonProps {
  href: string
  children: ReactNode
}

export const GreenButton = ({ href, children }: GreenButtonProps) => {
  return (
    <Link href={href}>
      <LinkContainer>{children}</LinkContainer>
    </Link>
  )
}

const LinkContainer = styled('a', {
  display: 'inline-flex',
  backgroundColor: '$green',
  border: 'none',
  fontFamily: '$workSans',
  fontWeight: '$semiBold',
  fontSize: '$XXS',
  lineHeight: '$XXXS',
  p: '$12',
  cursor: 'pointer',

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
