import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { TextCaption } from 'components/Text/TextCaption'

export interface OpeningBlockProps {
  content: string
  imageSection: {
    mediaImage: MediaImageProps
    caption?: string
  }
  layout: 'default' | 'large'
  className?: string
}

export const OpeningBlock = ({
  content,
  imageSection,
  layout,
  className,
}: OpeningBlockProps) => {
  return (
    <OpeningBlockWrap className={className}>
      <TextContainer layout={layout}>{content}</TextContainer>
      <ImageContainer layout={layout}>
        {imageSection.mediaImage ? (
          <MediaImage {...imageSection.mediaImage} />
        ) : null}
        <CaptionWrap color="black">{imageSection.caption}</CaptionWrap>
      </ImageContainer>
    </OpeningBlockWrap>
  )
}

const OpeningBlockWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
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

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$inria',
  fontWeight: '$light',
  mb: '$40',

  '@tabletUp': {
    mb: '0',
  },

  variants: {
    layout: {
      default: {
        fontSize: '$S',
        lineHeight: '$S',
        gridColumn: 'span 8',

        '@tabletUp': {
          fontSize: '$L',
          lineHeight: '$L',
          gridColumn: '7 / span 6',
        },
      },
      large: {
        fontSize: '$M',
        lineHeight: '$M',
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

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 8',
  mt: '$8',

  '@tabletUp': {
    gridColumn: 'span 4',
  },
})
