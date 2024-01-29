import { ReactNode } from 'react'
import NextLink from 'next/link'

import { styled } from 'styles/stitches.config'

export interface LinkProps {
  children: ReactNode
  color?: 'green' | 'stone' | 'transparent' | 'captionBlack' | 'captionWhite'
  className?: string
  isExternal?: boolean
}

export const Link = ({
  children,
  color = 'green',
  className,
  isExternal = false,
}: LinkProps) => {
  if (isExternal)
    return (
      <Anchor
        href="/case-studies"
        className={className}
        color={color}
        rel="noopener noreferrer"
        target="_blank"
      >{children}
      </Anchor>
    )
  else
    return (
      <NextLink href="/case-studies" passHref>
        <Anchor className={className} color={color}>{children}
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
      captionBlack: {
        backgroundColor: 'transparent',
        color: '$black',
        textDecoration: 'underline',
        fontWeight: '$regular',
        p: 0,
      },
      captionWhite: {
        backgroundColor: 'transparent',
        color: '$white',
        textDecoration: 'underline',
        fontWeight: '$regular',
        p: 0,
      },
    },
  },
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$white',
  border: 'none',
  fontFamily: '$workSans',
  fontWeight: '$semiBold',
  fontSize: '$XXS',
  lineHeight: '$XXXS',
  p: '0 0 $30',
  mt: 'auto',
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
