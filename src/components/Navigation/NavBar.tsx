import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { styled } from 'styles/stitches.config'

import IconClose from '../../assets/IconClose.svg'
import IconOpen from '../../assets/IconOpen.svg'
import MobileLogo from '../../assets/MobileLogo.svg'
import DesktopLogo from '../../assets/DesktopLogo.svg'

import { NavLink, NavLinkProps } from '../Links/NavLink'

const links = [
  {
    href: `/our-mission`,
    children: `Our Mission`,
  },
  {
    href: `/what-we-do`,
    children: `What We Do`,
  },
  {
    href: `/contact-us`,
    children: `Contact Us`,
  },
] as NavLinkProps[]

export const NavBar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  const openMenu = () => {
    setIsOpen(true)
  }
  return (
    <header>
      <NavBarWrap isOpen={isOpen}>
        <TopRow>
          <MenuButton>
            {isOpen ? (
              <IconClose onClick={closeMenu} />
            ) : (
              <IconOpen onClick={openMenu} />
            )}
          </MenuButton>
          <LogoMobileWrap>
            <MobileLogo />
          </LogoMobileWrap>
        </TopRow>

        <LinksWrap isOpen={isOpen}>
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
          <DesktopLogo />
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

  variants: {
    isOpen: {
      false: {
        backgroundColor: '$white',
      },
    },
  },

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

const MenuButton = styled('button', {
  maxWidth: '18px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
})

const LogoMobileWrap = styled('div', {
  width: '22px',
})

const LinksWrap = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  variants: {
    isOpen: {
      false: {
        display: 'none',

        '@tabletUp': {
          display: 'unset',
        },
      },
    },
  },
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
          color: '$black',
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
