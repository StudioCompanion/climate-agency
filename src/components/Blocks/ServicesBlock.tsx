import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { GreenButton, GreenButtonProps } from '../Buttons/GreenButton'
import { TextHeader } from '../Text/TextHeader'
import { TextCaption } from '../Text/TextCaption'

interface ServicesBlockProps {
  header: string
  content: string
  link: GreenButtonProps
  imageSection: {
    mediaImage: MediaImageProps
    caption: string
  }
}

export const ServicesBlock = ({
  header,
  content,
  link,
  imageSection,
}: ServicesBlockProps) => {
  return (
    <ServicesWrap>
      <LeftContainer>
        <MediaContainer>
          <ImageContainer>
            {imageSection.mediaImage ? (
              <MediaImage {...imageSection.mediaImage} />
            ) : null}
          </ImageContainer>
          <CaptionWrap color="black">{imageSection.caption}</CaptionWrap>
        </MediaContainer>
      </LeftContainer>
      <RightContainer>
        <HeaderWrap>{header}</HeaderWrap>
        <TextContainer>{content}</TextContainer>
        <GreenButton href={link.href}>{link.children}</GreenButton>
      </RightContainer>
    </ServicesWrap>
  )
}

const ServicesWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  px: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})

const LeftContainer = styled('div', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: 'span 6',
  },
})

const RightContainer = styled('div', {
  gridColumn: 'span 8',
  gridRowStart: '1',

  '@tabletUp': {
    gridColumn: '7 / span 6',
  },
})

const MediaContainer = styled('figure', {
  margin: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridColumn: 'span 8',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridColumn: '1 / span 6',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '1 / span 6',
    mt: '0',
  },
})

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 8',
  my: '$8',

  '@tabletUp': {
    gridColumn: '1 / span 4',
  },
})

const HeaderWrap = styled(TextHeader, {
  gridColumn: 'span 4',
  mb: '$8',

  '@tabletUp': {
    gridColumn: '7 / span 6',
  },
})

const TextContainer = styled('p', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  gridColumn: 'span 8',
  mb: '$40',

  '@tabletUp': {
    fontSize: '$XXL',
    lineHeight: '$XXL',
    gridColumn: '7 / span 6',
    mb: '$20',
  },
})
