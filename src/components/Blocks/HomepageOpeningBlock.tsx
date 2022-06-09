import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'

interface HomepageOpeningBlockProps {
  mediaImage: MediaImageProps
  content: string
}

export const HomepageOpeningBlock = ({
  mediaImage,
  content,
}: HomepageOpeningBlockProps) => {
  return (
    <Wrap>
      <TextContainer>{content}</TextContainer>
      <ImageContainer>
        {mediaImage ? <MediaImage {...mediaImage} /> : null}
      </ImageContainer>
    </Wrap>
  )
}

const Wrap = styled('section', {
  display: 'grid',
  gridAutoFlow: 'dense',
  gridTemplateColumns: 'repeat(8, minmax(auto, 1fr))',
  columnGap: '$16',
  p: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, minmax(auto, 1fr))',
    columnGap: '$20',
    p: '$20',
  },
})

const ImageContainer = styled('div', {
  gridColumn: '1 / span 8',
  mt: '$16',

  '@tabletUp': {
    gridColumn: '1 / span 6',
    mt: '0',
  },
})

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$inria',
  fontSize: '$S',
  lineHeight: '$S',
  gridColumn: '1 / span 8',

  '@tabletUp': {
    fontSize: '$L',
    lineHeight: '$L',
    gridColumn: '7 / span 6',
  },
})
