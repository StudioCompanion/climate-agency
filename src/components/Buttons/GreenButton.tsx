import React, { ReactNode } from 'react'
import Link from 'next/link'

import { styled } from 'styles/stitches.config'

export interface GreenButtonProps {
  href: string
  children: ReactNode
  className?: string
}

export const GreenButton = ({
  href,
  children,
  className,
}: GreenButtonProps) => {
  return (
    <Link href={href} passHref>
      <LinkContainer className={className}>{children}</LinkContainer>
    </Link>
  )
}

const LinkContainer = styled('a', {
  display: 'inline-flex',
  backgroundColor: '$green',
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
