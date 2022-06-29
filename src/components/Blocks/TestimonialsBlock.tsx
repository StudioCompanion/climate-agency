import Marquee from 'react-fast-marquee'

import { styled } from 'styles/stitches.config'

import {
  TextTestimonial,
  TextTestimonialProps,
} from 'components/Text/TextTestimonial'

import CircleIcon from 'assets/circle.svg'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Carousel } from '../Carousel/Carousel'

export interface TestimonialsBlockProps {
  title: string
  logos: MediaImageProps['image'][]
  testimonials: TextTestimonialProps[]
}

export const TestimonialsBlock = ({
  title,
  logos,
  testimonials,
}: TestimonialsBlockProps) => {
  return (
    <TestimonialsWrap>
      <HeaderContainer>
        <Circle width="18" />
        <TitleContainer>{title}</TitleContainer>
      </HeaderContainer>
      <ImageContainer gradient={false}>
        {[...logos, ...logos].map((logo, index) => (
          <MediaImage key={`${logo.src}_${index}`} image={logo} />
        ))}
      </ImageContainer>
      <TestimonialWrap>
        <Carousel slides={testimonials}>
          {(slide) => <TextTestimonial {...slide} />}
        </Carousel>
      </TestimonialWrap>
    </TestimonialsWrap>
  )
}

const TestimonialsWrap = styled('section', {
  backgroundColor: '$green',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  p: '$40 $16',
  rowGap: '$60',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    p: '$60 $20',
    rowGap: '$180',
  },
})

const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
  gridColumn: 'span 8',

  '@tabletUp': {
    flexDirection: 'row',
    gap: '$20',
    gridColumn: 'span 6',
  },
})

const Circle = styled(CircleIcon, {
  '@tabletUp': {
    flex: '1 0 2.7rem',
    alignSelf: 'flex-start',
    mt: '$24',
  },
})

const TitleContainer = styled('h2', {
  color: '$black',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$M',
  lineHeight: '$M',
  letterSpacing: '$normal',

  '@tabletUp': {
    fontSize: '$XXL',
    lineHeight: '$XXL',
  },
})

const ImageContainer = styled(Marquee, {
  gridColumn: 'span 8',
  gap: '$60',
  mx: -16,
  width: 'calc(100% + 32px) !important',

  '& > *': {
    gap: '$60',
  },

  '@tabletUp': {
    gridColumn: 'span 12',

    mx: -20,
    width: 'calc(100% + 40px) !important',
  },

  '.marquee': {
    minWidth: 'max-content',
  },
})

/**
 * If you use `Carousel` as the styled component the
 * render-child function breaks the TS.
 */
const TestimonialWrap = styled('div', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: '7 / span 6',
  },
})
