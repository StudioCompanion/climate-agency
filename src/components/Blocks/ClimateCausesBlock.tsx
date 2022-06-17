import React from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from '../Links/Link'
import { TextCaption } from '../Text/TextCaption'
interface ClimateCausesBlockProps {
  title: string
  content: string
  link: LinkProps
  leftImage: {
    mediaImage: MediaImageProps
    caption: string
  }
  rightImage: MediaImageProps
}

export const ClimateCausesBlock = ({
  title,
  content,
  link,
  leftImage,
  rightImage,
}: ClimateCausesBlockProps) => {
  return (
    <ClimateCausesWrap>
      <Title>
        {title} <sup>(2)</sup>
      </Title>
      <TextContainer>
        {content}
        <ButtonContainer>
          <Link {...link} />
        </ButtonContainer>
      </TextContainer>

      <MediaContainer>
        <LeftImageContainer>
          {leftImage.mediaImage ? (
            <MediaImage {...leftImage.mediaImage} />
          ) : null}
        </LeftImageContainer>
        <CaptionWrap color="black">{leftImage.caption}</CaptionWrap>
        <RightImageContainer>
          {rightImage ? <MediaImage {...rightImage} /> : null}
        </RightImageContainer>
      </MediaContainer>
    </ClimateCausesWrap>
  )
}

const ClimateCausesWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  p: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    p: '$20',
  },
})

const Title = styled('h2', {
  display: 'block',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$XL',
  lineHeight: '$XL',
  gridColumn: 'span 8',

  '@tabletUp': {
    fontSize: '$XXXL',
    lineHeight: '$XXXL',
    gridColumn: 'span 7',
  },
})

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '8 / span 4',
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

const MediaContainer = styled('figure', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridColumn: 'span 8',
  columnGap: '$16',
  alignItems: 'end',
  m: '0',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    gridColumn: 'span 12',
    gridRowStart: '3',
  },
})

const LeftImageContainer = styled('div', {
  display: 'block',
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: 'span 5',
    mt: '$120',
  },
})

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 7',
  mt: '$8',

  '@tabletUp': {
    gridColumn: 'span 4',
    gridRowStart: '2',
  },
})

const RightImageContainer = styled('div', {
  display: 'block',

  gridColumn: '3 / span 6',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '6 / span 4',
  },
})
