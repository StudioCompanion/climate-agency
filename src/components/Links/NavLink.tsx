import React, { ReactNode } from 'react'
import NextLink from 'next/link'

import { styled } from 'styles/stitches.config'

export interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
  state: 'default' | 'active'
}

export const NavLink = ({ href, children, className, state }: NavLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Anchor className={className} state={state}>
        {children}
      </Anchor>
    </NextLink>
  )
}

const Anchor = styled('a', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',

  cursor: 'pointer',
  textDecoration: 'none',

  '@tabletUp': {
    fontSize: '$XXS',
    lineHeight: '$XXS',
  },
  variants: {
    state: {
      default: {
        color: '$grey',
      },
      active: {
        color: '$black',
        '&:before': {
          content: '•',
          mr: '$8',
        },
      },
    },
  },
})
