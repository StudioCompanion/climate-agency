import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'

// type SVGType = HTMLElement & SVGElement

interface NetZeroBlockProps {
  icon: MediaImageProps
  title: string
  content: string
  mediaImage: MediaImageProps
  caption: string
}

export const NetZeroBlock = ({
  icon,
  title,
  content,
  mediaImage,
  caption,
}: NetZeroBlockProps) => {
  return (
    <Wrap>
      <TitleContainer>
        <IconContainer>{icon ? <MediaImage {...icon} /> : null}</IconContainer>
        <div>
          {title}
          <sup>(1)</sup>
        </div>
      </TitleContainer>
      <TextContainer>{content}</TextContainer>
      <ImageContainer>
        {mediaImage ? <MediaImage {...mediaImage} /> : null}
      </ImageContainer>
      <CaptionContainer>{caption}</CaptionContainer>
    </Wrap>
  )
}

const Wrap = styled('section', {
  backgroundColor: '$black',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, minmax(auto, 1fr))',
  columnGap: '$16',
  px: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, minmax(auto, 1fr))',
    columnGap: '$20',
    px: '$20',
  },
})

const TitleContainer = styled('div', {
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

const ImageContainer = styled('div', {
  gridColumn: '1 / span 8',
  mt: '$16',

  '@tabletUp': {
    gridColumn: '1 / span 12',
    mt: '0',
  },
})

const CaptionContainer = styled('p', {
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
