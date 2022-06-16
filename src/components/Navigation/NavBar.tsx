import React from 'react'
import { useRouter } from 'next/router'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { NavLink, NavLinkProps } from '../Links/NavLink'

interface NavBarProps {
  links: NavLinkProps[]
  logo: MediaImageProps
  state?: 'open' | 'closed'
}

export const NavBar = ({ links, logo, state }: NavBarProps) => {
  const router = useRouter()
  return (
    <header>
      <NavBarWrap>
        <LinksWrap>
          {links &&
            links.map((link) => (
              <ListItem
                isActive={router.asPath === link.href}
                key={link.children}
              >
                <NavLink {...link} />
              </ListItem>
            ))}
        </LinksWrap>
        <LogoWrap>{logo ? <MediaImage {...logo} /> : null}</LogoWrap>
      </NavBarWrap>
    </header>
  )
}

const NavBarWrap = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  justifyItems: 'center',
  p: '$20',
})

const LinksWrap = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

const ListItem = styled('li', {
  color: '$grey',
  '&:before': {
    content: '• ',
    color: 'transparent',
    mr: '$8',
  },

  variants: {
    isActive: {
      true: {
        color: '$black',
        '&:before': {
          content: '• ',
          color: 'purple',
          mr: '$8',
        },
      },
    },
  },
})

const LogoWrap = styled('div', {
  width: '109px',
})
