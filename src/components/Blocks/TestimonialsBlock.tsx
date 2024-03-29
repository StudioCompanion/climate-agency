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
          /**
           * We're adding priority here to solve this issue – https://github.com/vercel/next.js/issues/32774
           * this discussion has the answer – https://github.com/vercel/next.js/discussions/37202
           */
          <MediaImage key={`${logo.src}_${index}`} image={logo} priority />
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
  backgroundColor: '$yellow',
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
    rowGap: '8.4rem',
  },
})

const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
  gridColumn: 'span 8',

  '@tabletUp': {
    width: '660px',
    flexDirection: 'row',
    gap: '$20',
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
  gridColumn: 'span 12',
  gap: '$60',
  mx: -16,
  width: 'calc(100% + 32px) !important',

  '> *': {
    minWidth: 'max-content'
  },

  '.rfm-child': {
    padding: '0 4em'
  }
})

/**
 * If you use `Carousel` as the styled component the
 * render-child function breaks the TS.
 */
const TestimonialWrap = styled('div', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: '5 / span 8',
  },
  '@desktopUp': {
    gridColumn: '7 / span 6',
  },
})
