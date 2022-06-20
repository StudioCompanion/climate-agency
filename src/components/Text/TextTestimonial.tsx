import { styled } from 'styles/stitches.config'

export interface TextTestimonialProps {
  content: string
  signature: string
  organisation: string
  className?: string
}

export const TextTestimonial = ({
  content,
  signature,
  organisation,
  className,
}: TextTestimonialProps) => {
  return (
    <Testimonial className={className}>
      <TestimonialContent>{content}</TestimonialContent>
      <Signature>{signature}</Signature>
      <Organisation>{organisation}</Organisation>
    </Testimonial>
  )
}

const Testimonial = styled('p', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',

  '@tabletUp': {
    fontSize: '$L',
    lineHeight: '$L',
  },
})

const TestimonialContent = styled('span', {
  display: 'block',
})

const Signature = styled('span', {
  display: 'block',
  mt: '$16',

  '@tabletUp': {
    mt: '$20',
  },

  color: '$black',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
})

const Organisation = styled('span', {
  display: 'block',
  color: '$grey',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
})
