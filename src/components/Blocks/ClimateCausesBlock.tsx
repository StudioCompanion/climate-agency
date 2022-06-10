import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { GreenButton } from '../Buttons/GreenButton'

interface ClimateCausesBlockProps {
  title: string
  content: string
  link: {
    href: string
    description: string
  }
  leftImage: MediaImageProps
  rightImage: MediaImageProps
  caption: string
}

export const ClimateCausesBlock = ({
  title,
  content,
  link,
  leftImage,
  rightImage,
  caption,
}: ClimateCausesBlockProps) => {
  return (
    <Wrap>
      <Title>
        {title} <sup>(2)</sup>
      </Title>
      <TextContainer>
        {content}
        <ButtonContainer>
          <GreenButton href={link.href} description={link.description} />
        </ButtonContainer>
      </TextContainer>

      <LeftImageContainer>
        {leftImage ? <MediaImage {...leftImage} /> : null}
      </LeftImageContainer>
      <CaptionContainer>{caption}</CaptionContainer>
      <RightImageContainer>
        {rightImage ? <MediaImage {...rightImage} /> : null}
      </RightImageContainer>
    </Wrap>
  )
}

const Wrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, minmax(auto, 1fr))',
  columnGap: '$16',
  alignItems: 'end',
  p: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, minmax(auto, 1fr))',
    gridTemplateRows: 'repeat(auto, minmax(auto, 1fr))',
    columnGap: '$20',
    p: '$20',
  },
})

const Title = styled('p', {
  display: 'block',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$XL',
  lineHeight: '$XL',
  gridColumn: '1 / span 8',

  '@tabletUp': {
    fontSize: '$XXXL',
    lineHeight: '$XXXL',
    gridColumn: '1 / span 7',
  },
})

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  gridColumn: '1 / span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '8 /span 4',
    gridRowStart: '2',
    mt: '$100',
  },
})

const ButtonContainer = styled('div', {
  mt: '$40',

  '@tabletUp': {
    mt: '$24',
  },
})

const LeftImageContainer = styled('div', {
  display: 'block',
  gridColumn: '1 / span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '1 / span 5',
    gridRowStart: '3',
    mt: '$120',
  },
})

const CaptionContainer = styled('p', {
  color: '$white',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  gridColumn: '1 / span 7',
  mt: '$8',

  '@tabletUp': {
    gridColumn: '1 / span 4',
    gridRowStart: '4',
  },
})

const RightImageContainer = styled('div', {
  display: 'block',

  gridColumn: '3 / span 6',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '6 / span 4',
    gridRowStart: '3',
  },
})
