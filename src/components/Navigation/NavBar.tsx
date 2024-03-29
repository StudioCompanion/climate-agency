import { useState } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { animated, useSpring } from '@react-spring/web'

import { styled } from 'styles/stitches.config'

import IconClose from '../../assets/IconCross.svg'
import IconOpen from '../../assets/IconMenu.svg'
import CALogo from '../../assets/CALogo.svg'

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
  {
    href: `/case-studies`,
    children: `Case Studies`,
  }
] as NavLinkProps[]

const contactLink = {
  href: `mailto:sophie@climateagency.net`,
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

  const handleLinkClick = () => {
    if (!isTabletUp) {
      api.start({
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        immediate: true,
      })

      setIsOpen(false)
    }
  }

  return (
    <NavBarWrap>
      <NavBarInnerWrap>
        <HiddenH1>The Climate Agency</HiddenH1>
        <TopRow isOpen={isOpen}>
          <NextLink passHref href="/">
            <LogoMobileWrap>
              <CALogo />
            </LogoMobileWrap>
          </NextLink>
          <MenuButton type="button" onClick={handleMenuClick}>
            {isOpen ? <IconClose /> : <IconOpen />}
          </MenuButton>
        </TopRow>

        <NextLink passHref href="/">
          <LogoDesktopWrap>
            <CALogo fill="white" />
          </LogoDesktopWrap>
        </NextLink>
        <LinksWrap style={styles}>
          {routes.map((link) => (
            <ListItem
              isActive={router.pathname === link.href}
              key={link.children}
            >
              <NavLink {...link} onClick={handleLinkClick} />
            </ListItem>
          ))}
          <ListItem>
            <ContactLink {...contactLink} />
          </ListItem>
        </LinksWrap>
      </NavBarInnerWrap>
    </NavBarWrap>
  )
}

const NavBarWrap = styled('header', {
  zIndex: 1,
})

const HiddenH1 = styled('h1', {
  visuallyHidden: '',
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
  path: {
    fill: '$white',
  },

  p: '$16',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  variants: {
    isOpen: {
      true: {
        mixBlendMode: 'unset',

        path: {
          fill: '$black',
        },
      },
    },
  },

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
  // left: -11,
  right: -11,
})

const LogoMobileWrap = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
})

const LinksWrap = styled(animated.ul, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'end',
  gap: '$3',
  p: '$20 $16',
  backgroundColor: '$green',
  position: 'fixed',
  top: 0,
  width: '100%',
  height: 187,
  zIndex: '$2',

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
      fontSize: '$X_S',
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

        '@tabletUp': {
          color: '$white',

          '&:before': {
            color: '$white',
          },
        },
      },
    },
  },
})

const LogoDesktopWrap = styled('a', {
  display: 'none',

  '@tabletUp': {
    display: 'unset',
    width: '109px',
  },
})

const ContactLink = styled(Link, {
  color: '$grey',
  fontWeight: '$medium',
  fontSize: '$XS',
  lineHeight: '$XS',
  p: '0',

  '@tabletUp': {
    fontSize: '$X_S',
    lineHeight: '$XXS',
  },
})
