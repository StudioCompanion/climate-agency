import React from 'react'
import { useRouter } from 'next/router'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { NavLink, NavLinkProps } from '../Links/NavLink'

interface NavBarProps {
  menuOpen: MediaImageProps
  menuClose: MediaImageProps
  links: NavLinkProps[]
  logoDesktop: MediaImageProps
  logoMobile: MediaImageProps
  state?: 'open' | 'closed' | 'desktop'
}

export const NavBar = ({
  menuOpen,
  menuClose,
  links,
  logoDesktop,
  logoMobile,
  state,
}: NavBarProps) => {
  const router = useRouter()
  return (
    <header>
      <NavBarWrap>
        <TopRow>
          <CloseWrap>
            <MediaImage {...menuClose} />
          </CloseWrap>
          <LogoMobileWrap>
            {logoMobile ? <MediaImage {...logoMobile} /> : null}
          </LogoMobileWrap>
        </TopRow>

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
        <LogoDesktopWrap>
          {logoDesktop ? <MediaImage {...logoDesktop} /> : null}
        </LogoDesktopWrap>
      </NavBarWrap>
    </header>
  )
}

const NavBarWrap = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$green',
  p: '$16',
  mb: '$24',

  '@tabletUp': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '$white',
    p: '$20',
  },
})

const TopRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mt: '$16',
  mb: '$8',

  '@tabletUp': {
    display: 'none',
  },
})

const CloseWrap = styled('div', {
  width: '15px',
})

const LogoMobileWrap = styled('div', {
  width: '22px',
})

const LinksWrap = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

const ListItem = styled('li', {
  color: '$grey',
  '&:before': {
    content: '•',
    color: 'transparent',
    mr: '$8',
  },

  variants: {
    isActive: {
      true: {
        color: '$black',
        '&:before': {
          content: '•',
          color: '$black',
          mr: '$8',
          fontSize: '$XS',
          lineHeight: '$XS',

          '@tabletUp': {
            fontSize: '$XXS',
            lineHeight: '$XXS',
          },
        },
      },
    },
  },
})

const LogoDesktopWrap = styled('div', {
  display: 'none',

  '@tabletUp': {
    display: 'unset',
    width: '109px',
  },
})
