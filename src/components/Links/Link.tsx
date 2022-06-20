import { ReactNode } from 'react'
import NextLink from 'next/link'

import { styled } from 'styles/stitches.config'

export interface LinkProps {
  href: string
  children: ReactNode
  color: 'green' | 'stone' | 'transparent'
  className?: string
  isExternal: boolean
}

export const Link = ({
  href,
  children,
  color,
  className,
  isExternal,
}: LinkProps) => {
  if (isExternal)
    return (
      <Anchor
        href={href}
        className={className}
        color={color}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </Anchor>
    )
  else
    return (
      <NextLink href={href} passHref>
        <Anchor className={className} color={color}>
          {children}
        </Anchor>
      </NextLink>
    )
}

const Anchor = styled('a', {
  variants: {
    color: {
      green: {
        backgroundColor: '$green',
      },
      stone: {
        backgroundColor: '$stone',
      },
      transparent: {
        backgroundColor: 'transparent',
      },
    },
  },
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
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

  '&:hover': {
    opacity: '50%',
  },

  '&:active': {
    opacity: '50%',
  },
})
