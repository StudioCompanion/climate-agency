import React, { ReactNode } from 'react'
import Link from 'next/link'

import { styled } from 'styles/stitches.config'

export interface GreenButtonProps {
  href: string
  children: ReactNode
}

export const GreenButton = ({ href, children }: GreenButtonProps) => {
  return (
    <LinkContainer>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </LinkContainer>
  )
}

const LinkContainer = styled('a', {
  display: 'inline-block',
  backgroundColor: '$green',
  fontFamily: '$workSans',
  fontWeight: '$semiBold',
  fontSize: '$XXS',
  lineHeight: '$XXXS',
  p: '$12',
  cursor: 'pointer',

  '& > *': {
    color: '$black',
    textDecoration: 'none',
  },

  '&:hover': {
    opacity: '50%',
  },
})
