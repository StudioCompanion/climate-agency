import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { SectionHeader } from '../Headers/SectionHeader'

interface BackgroundBlockProps {
  header: string
  content: string
  mediaImage: MediaImageProps
  caption: string
}

export const BackgroundBlock = ({
  header,
  content,
  mediaImage,
  caption,
}: BackgroundBlockProps) => {
  return (
    <Wrap>
      <HeaderContainer>
        <SectionHeader header={header} />
      </HeaderContainer>
      <TextContainer>{content}</TextContainer>
      <ImageContainer>
        {mediaImage ? <MediaImage {...mediaImage} /> : null}
        <CaptionContainer>{caption}</CaptionContainer>
      </ImageContainer>
    </Wrap>
  )
}

const Wrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, minmax(auto, 1fr))',
  columnGap: '$16',
  p: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, minmax(auto, 1fr))',
    gridTemplateRows: 'repeat(auto, minmax(auto, 1fr))',
    columnGap: '$20',
    p: '$20',
  },
})

const HeaderContainer = styled('div', {
  gridColumn: '1 / span 3',
  mb: '$8',
})

const TextContainer = styled('p', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  gridColumn: '1 / span 8',

  '@tabletUp': {
    fontSize: '$XXL',
    lineHeight: 'XXL',
    gridColumn: '1 / span 6',
  },
})

const ImageContainer = styled('div', {
  gridColumn: '1 /span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '7 /span 6',
    mt: '0',
  },
})

const CaptionContainer = styled('p', {
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  gridColumn: '1 /span 8',
  mt: '$8',

  '@tabletUp': {
    gridColumn: '7 /span 4',
  },
})
