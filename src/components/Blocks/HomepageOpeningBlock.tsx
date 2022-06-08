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

const Wrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const ImageContainer = styled('div', {
  backgroundColor: 'Aquamarine',
  maxWidth: '50%',
})

const TextContainer = styled('div', {
  backgroundColor: 'AliceBlue',
  fontSize: '38px',
  maxWidth: '50%',
})
