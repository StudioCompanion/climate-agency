import React from 'react'

import { styled } from 'styles/stitches.config'

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
      <ImageContainer>
        {mediaImage ? <MediaImage {...mediaImage} /> : null}
      </ImageContainer>
      <TextContainer>{content}</TextContainer>
    </Wrap>
  )
}

const Wrap = styled('section', {
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'center',
  gap: '40px',
  p: '16px',

  '@tabletUp': {
    flexDirection: 'row',
    justifyContent: 'center',

    alignItems: 'flex-start',
    gap: '24px',
    p: '48px 24px',
  },
})

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '636px',
  '@tabletUp': {
    width: '50%',
  },
})

const TextContainer = styled('div', {
  fontSize: '28px',
  '@tabletUp': {
    fontSize: '38px',
    maxWidth: '50%',
  },
})
