import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'

interface HomepageOpeningBlockProps {
  mediaImage?: MediaImageProps
  paragraph1?: string
  paragraph2?: string
}

export const HomepageOpeningBlock = ({
  mediaImage,
  paragraph1,
  paragraph2,
}: HomepageOpeningBlockProps) => {
  return (
    <Wrap>
      <TextContainer>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </TextContainer>
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
  columnGap: '$s',
  p: '$s',

  '@tabletUp': {
    display: 'grid-inline',
    gridTemplateColumns: 'repeat(12, minmax(auto, 1fr))',
    columnGap: '$l',
    p: '$l',
  },
})

const ImageContainer = styled('div', {
  gridColumn: '1 / span 8',
  mt: '$s',

  '@tabletUp': {
    gridColumn: '1 / span 6',
    mt: '0',
  },
})

const TextContainer = styled('div', {
  fontFamily: '$inria',
  fontSize: '$S',
  lineHeight: '$S',
  gridColumn: '1 / span 8',

  '& > p': {
    mb: '$s',
  },
  '@tabletUp': {
    fontSize: '$L',
    lineHeight: '$L',
    gridColumn: '7 / span 6',

    '& > p': {
      mb: '$l',
    },
  },
})
