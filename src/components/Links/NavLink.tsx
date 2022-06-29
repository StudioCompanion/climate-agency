import NextLink from 'next/link'
import { MouseEventHandler } from 'react'

import { styled } from 'styles/stitches.config'

export interface NavLinkProps {
  href: string
  children: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  className?: string
}

export const NavLink = ({
  href,
  children,
  className,
  onClick,
}: NavLinkProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <NextLink href={href} passHref>
      <Anchor className={className} onClick={handleClick}>
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
