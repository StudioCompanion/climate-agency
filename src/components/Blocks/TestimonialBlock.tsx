import React from 'react'

import { styled } from 'styles/stitches.config'

export interface TestimonialBlockProps {
  content: string
  signature: string
  organisation: string
  className?: string
}

export const TestimonialBlock = ({
  content,
  signature,
  organisation,
  className,
}: TestimonialBlockProps) => {
  return (
    <div className={className}>
      <TextContainer>{content}</TextContainer>
      <NameContainer>
        <SignatureContainer>{signature}</SignatureContainer>
        <OrganisationContainer>{organisation}</OrganisationContainer>
      </NameContainer>
    </div>
  )
}

const TextContainer = styled('p', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',

  '@tabletUp': {
    fontSize: '$L',
    lineHeight: '$L',
  },
})

const NameContainer = styled('div', {
  mt: '$16',

  '@tabletUp': {
    mt: '$20',
  },

  '& > *': {
    fontFamily: '$workSans',
    fontWeight: '$regular',
    fontSize: '$XXS',
    lineHeight: '$XXS',
  },
})

const SignatureContainer = styled('p', {
  color: '$black',
})

const OrganisationContainer = styled('p', {
  color: '$grey',
})
