import { ReactNode } from 'react'

import { styled } from 'styles/stitches.config'
import ArrowsIcon from '../../assets/Arrows.svg'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from '../Links/Link'
import { TextCaption } from 'components/Text/TextCaption'
import { InnerTextCaption } from 'components/Text/InnerTextCaption'

export interface AcceleratorBlockProps {
  title: string
  subtitle: string
  link: LinkProps
  imageSection: {
    mediaImage: MediaImageProps
    innerCaption?: string
    caption?: ReactNode
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
  return (
    <AcceleratorWrap id="accelerator">
      <HeaderWrap>
        <Arrows width="44" />
        <Title>{title}</Title>
      </HeaderWrap>
      <ContentWrap>
        <SubtitleWrap>{subtitle}</SubtitleWrap>
        {Array.isArray(children)
          ? children.map((c) =>
              typeof c === 'string' ? <TextWrap key={c}>{c}</TextWrap> : c
            )
          : null}
      </ContentWrap>
      <LinkWrap>
        <Link {...link} />
      </LinkWrap>
      <ImageWrap>
        {imageSection.mediaImage ? (
          <MediaImage {...imageSection.mediaImage} />
        ) : null}
        {imageSection.innerCaption && (
          <InnerTextCaption>{imageSection.innerCaption}</InnerTextCaption>
        )}
      </ImageWrap>
      {imageSection.caption && (
        <CaptionWrap color="black">Photo: {imageSection.caption}</CaptionWrap>
      )}
    </AcceleratorWrap>
  )
}

const AcceleratorWrap = styled('section', {
  backgroundColor: '$yellow',
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
    gridColumn: '1 / span 12',
    mb: '$70',
  },
  '@desktopUp': {
    gridColumn: '1 / span 9',
  },
  '@largeDesktopUp': {
    gridColumn: '1 / span 7',
  },
})

const Arrows = styled(ArrowsIcon, {
  '@tabletUp': {
    flex: '1 0 3.7rem',
    alignSelf: 'flex-start',
    mt: '$24',
  },
  '@largeDesktopUp': {
    flex: '0 1 5rem',
  },
})

const Title = styled('h2', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$XL',
  lineHeight: '$XL',
  letterSpacing: '$normal',

  '@tabletUp': {
    fontSize: '$XXXL',
    lineHeight: '$XXXL',
  },
})

const ContentWrap = styled('div', {
  gridColumn: 'span 8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$20',
  mb: '$40',

  '@tabletUp': {
    gridColumn: '4 / span 6',
  },
  '@desktopUp': {
    gridColumn: '5 / span 4',
  },

  'ul, dl, strong': {
    whiteSpace: 'pre-line',
    fontFamily: '$workSans',
    fontWeight: '$regular',
    fontSize: '$XS',
    lineHeight: '$XS',
    letterSpacing: '$small',
  },

  strong: { fontWeight: '$semiBold' },

  ul: {
    listStyleType: 'disc',
    ml: '$12',

    '& > li + li': {
      mt: '$20',
    },
  },

  'dd + dt': { mt: '1.4em' },
})

const TextWrap = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  letterSpacing: '$small',
})

const SubtitleWrap = styled('h3', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$M',
  lineHeight: '$M',
  letterSpacing: '$normal',
  gridColumn: 'span 8',

  '@tabletUp': {
    fontSize: '$XL',
    lineHeight: '$XL',
    gridColumn: '5 / span 4',
  },
})

const LinkWrap = styled('span', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: '4 / span 2',
  },
  '@desktopUp': {
    gridColumn: '5 / span 2',
  },
})

const ImageWrap = styled('div', {
  position: 'relative',
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
    gridColumn: '3 / span 4',
  },
})
