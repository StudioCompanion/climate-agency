import React from 'react'

import { styled } from 'styles/stitches.config'
import Arrows from '../../../public/icons/Arrows.svg'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from '../Links/Link'

interface AcceleratorBlockProps {
  title: string
  firstContent: string
  subtitle: string
  secondContent: string
  link: LinkProps
  mediaImage: MediaImageProps
}

export const AcceleratorBlock = ({
  title,
  firstContent,
  subtitle,
  secondContent,
  link,
  mediaImage,
}: AcceleratorBlockProps) => {
  return (
    <AcceleratorWrap>
      <HeaderWrap>
        <ArrowsWrap />
        <TitleWrap>{title}</TitleWrap>
      </HeaderWrap>
      <ContentWrap>
        <TextWrap>{firstContent}</TextWrap>
        <SubtitleWrap>{subtitle}</SubtitleWrap>
        <TextWrap>{secondContent}</TextWrap>
      </ContentWrap>
      <LinkWrap {...link} />
      <ImageWrap>
        {mediaImage ? <MediaImage {...mediaImage} /> : null}
      </ImageWrap>
    </AcceleratorWrap>
  )
}

const AcceleratorWrap = styled('section', {
  backgroundColor: '$stone',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  px: '$16',
  pt: '$80',
  pb: '$20',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})

const HeaderWrap = styled('div', {
  gridColumn: '1 / span 8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$20',
  mb: '$20',

  '@tabletUp': {
    flexDirection: 'row',
    gridColumn: '1 / span 7',
    mt: '$180',
    mb: '$70',
  },
})

const ArrowsWrap = styled(Arrows, {
  maxWidth: '44px',
})

const TitleWrap = styled('h2', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$XL',
  lineHeight: '$XL',

  '@tabletUp': {
    fontSize: '$XXXL',
    lineHeight: '$XXXL',
  },
})

const ContentWrap = styled('div', {
  gridColumn: 'span 8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$40',
  mb: '$40',

  '@tabletUp': {
    gridColumn: '5 / span 4',
  },
})

const TextWrap = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
})

const SubtitleWrap = styled('h3', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$M',
  lineHeight: '$M',
  gridColumn: 'span 8',

  '@tabletUp': {
    fontSize: '$XXL',
    lineHeight: '$XXL',
    gridColumn: '5 / span 4',
  },
})

const LinkWrap = styled(Link, {
  gridColumn: 'span 8',
  maxWidth: '120px',

  '@tabletUp': {
    gridColumn: '5 / span 2',
  },
})

const ImageWrap = styled('div', {
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '3 / span 10',
  },
})
