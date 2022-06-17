import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { styled } from 'styles/stitches.config'

import IconClose from '/images/IconClose.svg'
import IconOpen from '/images/IconOpen.svg'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { NavLink, NavLinkProps } from '../Links/NavLink'

interface NavBarProps {
  links: NavLinkProps[]
  logoDesktop: MediaImageProps
  logoMobile: MediaImageProps
}

export const NavBar = ({ links, logoDesktop, logoMobile }: NavBarProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  //   log
  console.log('OPEN is: ', open)

  return (
    <header>
      <NavBarWrap isOpen={isOpen}>
        <TopRow>
          <CloseButton
            onClick={() => {
              setIsOpen(false)
            }}
            isOpen={isOpen}
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.61143L13.4893 0L7.5 6.38857L1.51071 0L0 1.61143L5.98929 8L0 14.3886L1.51071 16L7.5 9.61143L13.4893 16L15 14.3886L9.01071 8L15 1.61143Z"
                fill="black"
              />
            </svg>
          </CloseButton>

          <OpenButton
            onClick={() => {
              setIsOpen(true)
            }}
            isOpen={isOpen}
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                fill="black"
              />
            </svg>
          </OpenButton>
          <LogoMobileWrap>
            {logoMobile ? <MediaImage {...logoMobile} /> : null}
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

const CloseButton = styled('button', {
  width: '15px',
  backgroundColor: 'transparent',
  border: 'none',

  variants: {
    isOpen: {
      false: {
        display: 'none',
      },
    },
  },
})

const OpenButton = styled('button', {
  width: '18px',
  backgroundColor: 'transparent',
  border: 'none',

  variants: {
    isOpen: {
      true: {
        display: 'none',
      },
    },
  },
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
