import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from '../Links/Link'
import { TextHeader } from '../Text/TextHeader'
import { TextCaption } from '../Text/TextCaption'

export interface ShortArticleBlockProps {
  textPosition: 'left' | 'right'
  header: string
  content: string
  link?: LinkProps
  imageSection: {
    mediaImage: MediaImageProps
    caption: string
  }
  className?: string
}

export const ShortArticleBlock = ({
  textPosition,
  header,
  content,
  link,
  imageSection,
  className,
}: ShortArticleBlockProps) => {
  return (
    <ShortArticleWrap className={className}>
      <MediaWrap>
        <MediaContainer>
          <ImageContainer>
            {imageSection.mediaImage ? (
              <MediaImage {...imageSection.mediaImage} />
            ) : null}
          </ImageContainer>
          <CaptionWrap color="black">{imageSection.caption}</CaptionWrap>
        </MediaContainer>
      </MediaWrap>
      <TextWrap textPosition={textPosition}>
        <HeaderWrap>{header}</HeaderWrap>
        <TextContainer textPosition={textPosition}>{content}</TextContainer>
        {link && <Link {...link} />}
      </TextWrap>
    </ShortArticleWrap>
  )
}

const ShortArticleWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  px: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})

const MediaWrap = styled('div', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: 'span 6',
  },
})

const TextWrap = styled('div', {
  gridColumn: 'span 8',
  gridRowStart: '1',

  variants: {
    textPosition: {
      left: {
        '@tabletUp': {
          gridColumn: 'span 6',
        },
      },
      right: {
        '@tabletUp': {
          gridColumn: '7 / span 6',
        },
      },
    },
  },
})

const MediaContainer = styled('figure', {
  margin: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridColumn: 'span 8',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridColumn: '1 / span 6',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: '1 / span 6',
  },
})

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 8',
  my: '$8',

  '@tabletUp': {
    gridColumn: '1 / span 4',
  },
})

const HeaderWrap = styled(TextHeader, {
  gridColumn: 'span 4',
  mb: '$8',

  '@tabletUp': {
    gridColumn: '7 / span 6',
  },
})

const TextContainer = styled('p', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  gridColumn: 'span 8',

  '@tabletUp': {
    fontSize: '$XXL',
    lineHeight: '$XXL',
    gridColumn: '7 / span 6',
  },

  variants: {
    textPosition: {
      left: {
        mb: '0',
      },
      right: {
        mb: '$40',
      },
    },
  },
})
