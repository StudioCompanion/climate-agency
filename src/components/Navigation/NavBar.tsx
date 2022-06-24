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
      clipPath: isTabletUp
        ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      immediate: true,
    }),
    [isTabletUp]
  )

  useIsomorphicLayoutEffect(() => {
    api.start({
      clipPath: isOpen
        ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    })
  }, [isOpen])

  return (
    <header>
      <NavBarWrap>
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
      </NavBarWrap>
    </header>
  )
}

const NavBarWrap = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  p: '$16',
  mb: '$24',
  backgroundColor: '$white',
  position: 'relative',
  zIndex: 0,

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
  mb: '$8',

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
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 187,
  zIndex: -1,

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
        color: '$black',
        '&:before': {
          color: '$black',
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
