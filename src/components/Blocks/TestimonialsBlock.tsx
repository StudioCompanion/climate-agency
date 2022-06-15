import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { TestimonialBlockProps } from './TestimonialBlock'
import { Carousel } from '../Carousel/Carousel'

interface TestimonialsBlockProps {
  icon: MediaImageProps
  title: string
  mediaImage: MediaImageProps
  testimonials: TestimonialBlockProps[]
}

export const TestimonialsBlock = ({
  icon,
  title,
  mediaImage,
  testimonials,
}: TestimonialsBlockProps) => {
  return (
    <TestimonialsWrap>
      <HeaderContainer>
        <IconContainer>{icon ? <MediaImage {...icon} /> : null}</IconContainer>
        <TitleContainer>{title}</TitleContainer>
      </HeaderContainer>
      <ImageContainer>
        {mediaImage ? <MediaImage {...mediaImage} /> : null}
      </ImageContainer>
      <TestimonialWrap slides={testimonials} />
    </TestimonialsWrap>
  )
}

const TestimonialsWrap = styled('section', {
  backgroundColor: '$green',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  px: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})

const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
  color: '$white',
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    flexDirection: 'row',
    gap: '$30',
    gridColumn: 'span 6',
    mt: '$60',
  },
})

const IconContainer = styled('div', {
  mt: '$16',
  width: '100px',
})

const TitleContainer = styled('h2', {
  color: '$black',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$M',
  lineHeight: '$M',

  '@tabletUp': {
    fontSize: '$XXL',
    lineHeight: '$XXL',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',
  mt: '$88',

  '@tabletUp': {
    gridColumn: 'span 12',
    mt: '$175',
  },
})

const TestimonialWrap = styled(Carousel, {
  gridColumn: 'span 8',
  mt: '$60',
  mb: '$16',

  '@tabletUp': {
    gridColumn: '7 / span 6',
    mt: '$197',
    mb: '$20',
  },
})
