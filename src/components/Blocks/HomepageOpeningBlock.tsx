import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage } from '../Media/MediaImage'

interface HomepageOpeningBlockProps {
  image?: MediaImage
  content?: string
}

export const HomepageOpeningBlock = ({
  image,
  content,
}: HomepageOpeningBlockProps) => {
  return (
    <Wrap>
      <ImageContainer>
        {image ? <MediaImage image={image} /> : null}
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
})

const TextContainer = styled('div', {
  backgroundColor: 'AliceBlue',
})
