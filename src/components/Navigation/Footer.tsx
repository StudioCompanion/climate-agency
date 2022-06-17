import React from 'react'

import { styled } from 'styles/stitches.config'

import FooterLogo from '../../assets/LogoFooter.svg'

import { TextHeader } from '../Text/TextHeader'
import { Link, LinkProps } from '../Links/Link'

const linksInformation = [
  {
    href: `/our-mission`,
    children: `Our Mission`,
    color: 'transparent',
    isExternal: false,
  },
  {
    href: `/accelerator`,
    children: `The Accelerator`,
    color: 'transparent',
    isExternal: false,
  },
  {
    href: `/contact-us`,
    children: `Contact Us`,
    color: 'transparent',
    isExternal: false,
  },
  {
    href: `/privacy`,
    children: `Privacy Policy`,
    color: 'transparent',
    isExternal: false,
  },
] as LinkProps[]

const linksSocial = [
  {
    href: `www.linkedin.com`,
    children: `LinkedIn`,
    color: 'transparent',
    isExternal: true,
  },
  {
    href: `www.twitter.com`,
    children: `Twitter`,
    color: 'transparent',
    isExternal: true,
  },
] as LinkProps[]

export const Footer = () => {
  return (
    <FooterWrap>
      <LogoContainer>
        <FooterLogo />
      </LogoContainer>

      <InformationContainer>
        <TextHeader>Information</TextHeader>
        <List>
          {linksInformation &&
            linksInformation.map((link) => (
              <li key={link.href}>
                <LinkWrap {...link} />
              </li>
            ))}
        </List>
      </InformationContainer>
      <SocialsContainer>
        <TextHeader>Social Channels</TextHeader>

        <List>
          {linksSocial &&
            linksSocial.map((link) => (
              <li key={link.href}>
                <LinkWrap {...link} />
              </li>
            ))}
        </List>
      </SocialsContainer>
      <LegalContainer>The Climate Agency Limited (14011922)</LegalContainer>
      <CreditsContainer>
        This website was made possible with{' '}
        <LinkCompanion
          href="https://companion.studio/"
          color="transparent"
          isExternal={true}
        >
          Companion Studio
        </LinkCompanion>
        .
      </CreditsContainer>
    </FooterWrap>
  )
}

const FooterWrap = styled('footer', {
  backgroundColor: '$green',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  px: '$16',
  pt: '$40',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    rowGap: '$120',
    px: '$20',
  },
})

const LogoContainer = styled('div', {
  gridColumn: 'span 6',
})

const InformationContainer = styled('div', {
  gridColumn: 'span 6',
  gridRowStart: '3',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '9 / span 2',
    gridRowStart: '1',
  },
})

const SocialsContainer = styled('div', {
  gridColumn: 'span 6',
  gridRowStart: '2',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '11 / span 2',
    gridRowStart: '1',
  },
})

const List = styled('ul', {
  listStyle: 'none',
  mt: '$12',
})

const LinkWrap = styled(Link, {
  fontWeight: '$regular',
  px: '0',
  py: '$4',
})

const LinkCompanion = styled(Link, {
  display: 'inline',
  fontWeight: '$regular',
  px: '0',
  py: '$4',
})

const LegalContainer = styled('p', {
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  gridColumn: '1 / span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: 'span 6',
    gridRowStart: '2',
    mt: '0',
  },
})

const CreditsContainer = styled('p', {
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  gridColumn: '1 / span 8',
  mt: '$40',
  mb: '$40',

  '@tabletUp': {
    gridColumn: '9 / span 4',
    gridRowStart: '2',
    mt: '0',
    mb: '$35',
  },
})
