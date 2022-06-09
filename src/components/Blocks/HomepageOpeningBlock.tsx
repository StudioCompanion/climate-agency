import React from 'react'

import { styled } from 'styles/stitches.config'
import { getFontStyle } from 'styles/getFontStyles'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'

interface HomepageOpeningBlockProps {
  mediaImage?: MediaImageProps
  content?: string
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
  gridTemplateColumns: 'repeat(8, 28.88px)',
  columnGap: '16px',
  p: '16px',

  '@tabletUp': {
    display: 'grid-inline',
    gridTemplateColumns: 'repeat(12, 98px)',
    columnGap: '20px',
    p: '20px',
  },
})

const ImageContainer = styled('div', {
  position: 'relative',
  height: '336px',
  gridColumn: '1 / span 8',
  mt: '16px',
  '@tabletUp': {
    height: '636px',
    gridColumn: '1 / span 6',
    mt: '0',
  },
})

const TextContainer = styled('div', {
  // ...getFontStyle('$L'),
  fontSize: '28px',
  gridColumn: '1 / span 8',

  '@tabletUp': {
    fontSize: '38px',
    gridColumn: '7 / span 6',
  },
})
