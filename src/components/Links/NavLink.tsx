import NextLink from 'next/link'

import { styled } from 'styles/stitches.config'

export interface NavLinkProps {
  href: string
  children: string
  className?: string
}

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Anchor className={className}>{children}</Anchor>
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
  color: 'inherit',

  '@tabletUp': {
    fontSize: '$XXS',
    lineHeight: '$XXS',
  },
})
