import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { SectionHeader } from '../Headers/SectionHeader'

interface ImageSection {
  mediaImage: MediaImageProps
  caption: string
}

interface BackgroundBlockProps {
  header: string
  content: string
  imageSection: ImageSection
}

export const BackgroundBlock = ({
  header,
  content,
  imageSection,
}: BackgroundBlockProps) => {
  return (
    <BackgroundWrap>
      <HeaderContainer>
        <SectionHeader header={header} />
      </HeaderContainer>
      <TextContainer>{content}</TextContainer>
      <MediaContainer>
        <ImageContainer>
          {imageSection.mediaImage ? (
            <MediaImage {...imageSection.mediaImage} />
          ) : null}
        </ImageContainer>
        <CaptionContainer>{imageSection.caption}</CaptionContainer>
      </MediaContainer>
    </BackgroundWrap>
  )
}

const BackgroundWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  p: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    p: '$20',
  },
})

const HeaderContainer = styled('div', {
  gridColumn: 'span 3',
  mb: '$8',
})

const TextContainer = styled('p', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  gridColumn: 'span 8',

  '@tabletUp': {
    fontSize: '$XXL',
    lineHeight: 'XXL',
    gridColumn: '1 / span 6',
  },
})

const MediaContainer = styled('figure', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridColumn: 'span 8',
  m: '0',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    gridColumn: '7 / span 6',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: 'span 6',
    mt: '0',
  },
})

const CaptionContainer = styled('figcaption', {
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  gridColumn: 'span 8',
  mt: '$8',

  '@tabletUp': {
    gridColumn: '1 / span 4',
    gridRowStart: '2',
  },
})
