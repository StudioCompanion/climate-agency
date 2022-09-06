import { ReactNode } from 'react'
import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { TextCaption } from 'components/Text/TextCaption'
import { InnerTextCaption } from 'components/Text/InnerTextCaption'
import { Link, LinkProps } from 'components/Links/Link'

export interface OpeningBlockProps {
  content: ReactNode
  imageSection: {
    mediaImage: MediaImageProps
    innerCaption?: string
    caption?: ReactNode
  }
  layout: 'default' | 'large'
  className?: string
  link?: LinkProps
}

export const OpeningBlock = ({
  content,
  imageSection,
  layout,
  className,
  link,
}: OpeningBlockProps) => {
  return (
    <OpeningBlockWrap className={className}>
      <ContentWrap layout={layout}>
        <TextContainer layout={layout}>{content}</TextContainer>
        {link ? <Link {...link} /> : null}
      </ContentWrap>
      <ImageContainer layout={layout}>
        <MediaImageWrap>
          {imageSection.mediaImage ? (
            <MediaImage {...imageSection.mediaImage} />
          ) : null}
          {imageSection.innerCaption && (
            <InnerTextCaption>{imageSection.innerCaption}</InnerTextCaption>
          )}
        </MediaImageWrap>
        {imageSection.caption && (
          <CaptionWrap color="black">Photo: {imageSection.caption}</CaptionWrap>
        )}
      </ImageContainer>
    </OpeningBlockWrap>
  )
}

const OpeningBlockWrap = styled('section', {
  whiteSpace: 'no-wrap',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  alignItems: 'start',
  columnGap: '$16',
  px: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',
  mt: '$16',

  '@tabletUp': {
    gridRowStart: '1',
    mt: '0',
  },

  variants: {
    layout: {
      default: {
        '@tabletUp': {
          gridColumn: 'span 6',
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
        },
      },
      large: {
        '@tabletUp': {
          gridColumn: 'span 7',
        },
      },
    },
  },
})

const MediaImageWrap = styled('div', {
  position: 'relative',

  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: '1 / span 6',
  },
})

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 8',
  mt: '$8',

  '@tabletUp': {
    gridColumn: 'span 4',
  },
})

const ContentWrap = styled('div', {
  variants: {
    layout: {
      default: {
        gridColumn: 'span 8',

        '@tabletUp': {
          gridColumn: '7 / span 6',
        },
      },
      large: {
        gridColumn: 'span 8',

        '@tabletUp': {
          fontSize: '$XXL',
          lineHeight: '$XXL',
          gridColumn: '8 / span 5',
        },
      },
    },
  },
})

const TextContainer = styled('div', {
  // whiteSpace: 'pre-line',
  '& > * + *': {
    mt: '$20',
  },
  '& > p': {
    fontFamily: '$inria',
    fontWeight: '$light',
    letterSpacing: '$normal',
  },
  mb: '$40',

  '@tabletUp': {
    mb: '$50',
  },

  variants: {
    layout: {
      default: {
        '& > p': {
          fontSize: '$S',
          lineHeight: '$S',
        },

        '@desktopUp': {
          '& > p': {
            fontSize: '$L',
            lineHeight: '$L',
          },
        },
      },
      large: {
        '& > p': {
          fontSize: '$M',
          lineHeight: '$M',
        },

        '@tabletUp': {
          '& > p': {
            fontSize: '$XXL',
            lineHeight: '$XXL',
          },
        },
      },
    },
  },
})
