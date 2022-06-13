import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'

interface ImageSection {
  mediaImage: MediaImageProps
  caption: string
}
interface NetZeroBlockProps {
  icon: MediaImageProps
  title: string
  content: string
  imageSection: ImageSection
}

export const NetZeroBlock = ({
  icon,
  title,
  content,
  imageSection,
}: NetZeroBlockProps) => {
  return (
    <NetZeroWrap>
      <TitleContainer>
        <IconContainer>{icon ? <MediaImage {...icon} /> : null}</IconContainer>
        <p>
          {title}
          <sup>(1)</sup>
        </p>
      </TitleContainer>
      <TextContainer>{content}</TextContainer>
      <MediaContainer>
        <ImageContainer>
          {imageSection.mediaImage ? (
            <MediaImage {...imageSection.mediaImage} />
          ) : null}
        </ImageContainer>
        <CaptionContainer>{imageSection.caption}</CaptionContainer>
      </MediaContainer>
    </NetZeroWrap>
  )
}

const NetZeroWrap = styled('section', {
  backgroundColor: '$black',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, minmax(auto, 1fr))',
  columnGap: '$16',
  px: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, minmax(auto, 1fr))',
    gridTemplateRows: 'repeat(auto, minmax(auto, 1fr))',
    columnGap: '$20',
    px: '$20',
  },
})

const TitleContainer = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
  color: '$white',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$M',
  lineHeight: '$M',
  gridColumn: '1 / span 8',
  mt: '$80',

  '@tabletUp': {
    flexDirection: 'row',
    gap: '$30',
    fontSize: '$XXL',
    lineHeight: '$XXL',
    gridColumn: '1 / span 7',
    mt: '$180',
  },
})

const IconContainer = styled('div', {
  mt: '$8',
  width: '100px',
})

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  color: '$white',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  gridColumn: '1 / span 8',
  py: '$40',

  '@tabletUp': {
    gridColumn: '5 / span 4',
    py: '$60',
  },
})

const MediaContainer = styled('figure', {
  margin: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, minmax(auto, 1fr))',
  gridColumn: '1 / span 8',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, minmax(auto, 1fr))',
    gridColumn: '1 / span 12',
    gridRowStart: '3',
  },
})

const ImageContainer = styled('div', {
  gridColumn: '1 / span 8',
  mt: '$16',

  '@tabletUp': {
    gridColumn: '1 / span 12',
    mt: '0',
  },
})

const CaptionContainer = styled('figcaption', {
  color: '$white',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  gridColumn: '1 / span 8',
  mt: '$8',

  '@tabletUp': {
    gridColumn: '1 / span 4',
  },
})
