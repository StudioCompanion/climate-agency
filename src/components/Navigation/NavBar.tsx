import { useState } from 'react'
import { useRouter } from 'next/router'
import { animated, useSpring } from '@react-spring/web'

import { styled } from 'styles/stitches.config'

import IconClose from '../../assets/IconCross.svg'
import IconOpen from '../../assets/IconMenu.svg'
import MobileLogo from '../../assets/MobileLogo.svg'
import DesktopLogo from '../../assets/DesktopLogo.svg'

import { NavLink, NavLinkProps } from '../Links/NavLink'
import { Link, LinkProps } from 'components/Links/Link'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'
import { useMedia } from 'hooks/useMedia'

const routes = [
  {
    href: `/`,
    children: `Our Mission`,
  },
  {
    href: `/what-we-do`,
    children: `What We Do`,
  },
] as NavLinkProps[]

const contactLink = {
  href: `mailto:`,
  children: `Contact Us`,
  color: `transparent`,
  isExternal: true,
} as LinkProps

export const NavBar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen((s) => !s)
  }

  const isTabletUp = useMedia('(min-width: 768px)')

  const [styles, api] = useSpring(
    () => ({
      /**
       * This handles responsive behaviour, i.e. when the device
       * is tabletUp then we should have the menu show immediately
       */
      clipPath: isTabletUp
        ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      immediate: true,
    }),
    [isTabletUp]
  )

  useIsomorphicLayoutEffect(() => {
    if (!isTabletUp) {
      /**
       * If we're on mobile, we can have animation
       * abilities handled here
       */
      api.start({
        clipPath: isOpen
          ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
          : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      })
    } else if (isTabletUp && isOpen) {
      /**
       * If we move to tabletUp and the device has the menu open
       * we set it false so the icon correctly changes
       */
      setIsOpen(false)
    }
  }, [isOpen, isTabletUp])

  return (
    <NavBarWrap>
      <NavBarInnerWrap>
        <TopRow>
          <MenuButton type="button" onClick={handleMenuClick}>
            {isOpen ? <IconClose /> : <IconOpen />}
          </MenuButton>
          <LogoMobileWrap>
            <MobileLogo />
          </LogoMobileWrap>
        </TopRow>

        <LinksWrap style={styles}>
          {routes.map((link) => (
            <ListItem
              isActive={router.asPath === link.href}
              key={link.children}
            >
              <NavLink {...link} />
            </ListItem>
          ))}
          <ListItem>
            <ContactLink {...contactLink} />
          </ListItem>
        </LinksWrap>
        <LogoDesktopWrap>
          <DesktopLogo />
        </LogoDesktopWrap>
      </NavBarInnerWrap>
    </NavBarWrap>
  )
}

const NavBarWrap = styled('header', {
  zIndex: 1,

  path: {
    fill: '$white',
  },
})

const NavBarInnerWrap = styled('nav', {
  '@tabletUp': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    p: '$20',

    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: '$3',
    mixBlendMode: 'difference',
  },
})

const TopRow = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: '$3',
  mixBlendMode: 'difference',

  p: '$16',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@tabletUp': {
    display: 'none',
  },
})

const MenuButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  p: 0,
  position: 'relative',
  top: 0,
  left: -11,
})

const LogoMobileWrap = styled('div', {
  width: '22px',
})

const LinksWrap = styled(animated.ul, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '$8',
  p: '$20 $16',
  backgroundColor: '$green',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: 187,
  zIndex: '$2',
  mixBlendMode: 'unset',

  '@tabletUp': {
    backgroundColor: 'transparent',
    position: 'unset',
    height: 'unset',
    width: 'unset',
    p: 'unset',
  },
})

const ListItem = styled('li', {
  color: '$grey',

  '&:before': {
    content: '•',
    color: 'transparent',
    mr: '$8',
    fontSize: '$XS',
    lineHeight: '$XS',

    '@tabletUp': {
      fontSize: '$XXS',
      lineHeight: '$XXS',
    },
  },

  variants: {
    isActive: {
      true: {
        color: '$white',
        '&:before': {
          color: '$white',
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

const ContactLink = styled(Link, {
  color: '$grey',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  p: '0',

  '@tabletUp': {
    fontSize: '$XXS',
    lineHeight: '$XXS',
  },
})
