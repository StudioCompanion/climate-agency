import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { TextHeader } from '../Text/TextHeader'

interface FooterProps {
  logo: MediaImageProps
  legal: string
  credits: string
}

export const Footer = ({ logo, legal, credits }: FooterProps) => {
  return (
    <FooterWrap>
      <LogoContainer>{logo ? <MediaImage {...logo} /> : null}</LogoContainer>
      <InformationContainer>
        <TextHeader>Information</TextHeader>
      </InformationContainer>
      <SocialsContainer>
        <TextHeader>Social Channels</TextHeader>
      </SocialsContainer>
      <LegalContainer>{legal}</LegalContainer>
      <CreditsContainer>{credits}</CreditsContainer>
    </FooterWrap>
  )
}

const FooterWrap = styled('section', {
  backgroundColor: '$green',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  px: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})

const LogoContainer = styled('div', {
  gridColumn: 'span 6',
  mt: '$40',

  '@tabletUp': {
    mb: '$120',
  },
})

const InformationContainer = styled('div', {
  gridColumn: 'span 6',
  gridRowStart: '2',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '9 / span 2',
    gridRowStart: '1',
  },
})

const SocialsContainer = styled('div', {
  gridColumn: 'span 6',
  gridRowStart: '3',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '11 / span 2',
    gridRowStart: '1',
  },
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
