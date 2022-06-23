import NextLink from 'next/link'

import { styled } from 'styles/stitches.config'

export interface NavLinkProps {
  href: string
  children: string
  className?: string
  rel?: 'noopener noreferrer'
  target?: '_blank'
}

export const NavLink = ({
  href,
  children,
  className,
  rel,
  target,
}: NavLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Anchor className={className} rel={rel} target={target}>
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
  color: 'inherit',

  '@tabletUp': {
    fontSize: '$XXS',
    lineHeight: '$XXS',
  },
})
