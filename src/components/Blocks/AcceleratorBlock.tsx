import { ReactNode } from 'react'

import { styled } from 'styles/stitches.config'
import ArrowsIcon from '../../assets/Arrows.svg'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from '../Links/Link'
import { TextCaption } from 'components/Text/TextCaption'

export interface AcceleratorBlockProps {
  title: string
  subtitle: string
  link: LinkProps
  imageSection: {
    mediaImage: MediaImageProps
    caption?: string
  }
  children: ReactNode[]
}

export const AcceleratorBlock = ({
  title,
  children,
  subtitle,
  link,
  imageSection,
}: AcceleratorBlockProps) => {
  const [intro, content] = children

  return (
    <AcceleratorWrap id="accelerator">
      <HeaderWrap>
        <Arrows width="44" />
        <Title>{title}</Title>
      </HeaderWrap>
      <ContentWrap>
        <TextWrap>{intro}</TextWrap>
        <SubtitleWrap>{subtitle}</SubtitleWrap>
        <TextWrap>{content}</TextWrap>
      </ContentWrap>
      <LinkWrap>
        <Link {...link} />
      </LinkWrap>
      <ImageWrap>
        {imageSection.mediaImage ? (
          <MediaImage {...imageSection.mediaImage} />
        ) : null}
        <CaptionWrap color="black">{imageSection.caption}</CaptionWrap>
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

const Arrows = styled(ArrowsIcon, {
  '@tabletUp': {
    flex: '1 0 3.5rem',
    alignSelf: 'flex-start',
    mt: '$24',
  },
})

const Title = styled('h2', {
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

  '& > ul': {
    listStyleType: 'disc',
    ml: '$16',
  },
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

const LinkWrap = styled('span', {
  gridColumn: 'span 8',

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

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 8',
  my: '$8',

  '@tabletUp': {
    gridColumn: 'span 4',
  },
})
