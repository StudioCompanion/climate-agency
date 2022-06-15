import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'

interface WhatWeDoBlockProps {
  mediaImage: MediaImageProps
  content: string
}

export const WhatWeDoBlock = ({ mediaImage, content }: WhatWeDoBlockProps) => {
  return (
    <WhatWeDoWrap>
      <ImageContainer>
        {mediaImage ? <MediaImage {...mediaImage} /> : null}
      </ImageContainer>
      <TextContainer>{content}</TextContainer>
    </WhatWeDoWrap>
  )
}

const WhatWeDoWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  px: '$16',

  '@tabletUp': {
    gridAutoFlow: 'revert',
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',
  gridRowStart: '2',
  mt: '$40',

  '@tabletUp': {
    gridColumn: 'span 7',
    gridRowStart: '1',
    mt: '0',
  },
})

const TextContainer = styled('p', {
  color: '$black',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$M',
  lineHeight: '$M',
  gridColumn: 'span 8',

  '@tabletUp': {
    fontSize: '$XXL',
    lineHeight: '$XXL',
    gridColumn: '8 / span 5',
  },
})
