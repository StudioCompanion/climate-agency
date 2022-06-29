import { ReactNode } from 'react'
import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { TextCaption } from 'components/Text/TextCaption'

export interface ArticleBlockProps {
  pageLayout: 'left' | 'right'
  children: ReactNode
  title: string
  content: string
  imageSection: {
    mediaImage: MediaImageProps
    caption?: string
  }
  className?: string
}

export const ArticleBlock = ({
  pageLayout,
  children,
  title,
  content,
  imageSection,
  className,
}: ArticleBlockProps) => {
  return (
    <ArticleWrap pageLayout={pageLayout} className={className}>
      <HeaderContainer pageLayout={pageLayout}>
        <Icon pageLayout={pageLayout}>{children}</Icon>
        <Title>{title}</Title>
      </HeaderContainer>
      <Content pageLayout={pageLayout}>{content}</Content>
      <ImageContainer pageLayout={pageLayout}>
        <MediaImage {...imageSection.mediaImage} />
        <CaptionWrap color="black">{imageSection.caption}</CaptionWrap>
      </ImageContainer>
    </ArticleWrap>
  )
}

const ArticleWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  px: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    px: '$20',
  },

  variants: {
    pageLayout: {
      left: {
        pt: '0',
      },
      right: {
        pt: '$60',

        '@tabletUp': {
          pt: '$120',
        },
      },
    },
  },
})

const HeaderContainer = styled('div', {
  gridColumn: 'span 8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$20',

  variants: {
    pageLayout: {
      left: {
        '@tabletUp': {
          flexDirection: 'row',
          gridColumn: '2 / span 10',
        },
      },
      right: {
        '@tabletUp': {
          flexDirection: 'row',
          gridColumn: '4 / span 9',
        },
      },
    },
  },
})

const Icon = styled('div', {
  '@tabletUp': {
    alignSelf: 'flex-start',
    mt: '$40',
  },

  variants: {
    pageLayout: {
      left: {
        '& > *': {
          width: '21px',

          '@tabletUp': {
            width: '36px',
          },
        },
      },
      right: {
        '& > *': {
          width: '24px',

          '@tabletUp': {
            width: '37px',
          },
        },
      },
    },
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

const Content = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  gridColumn: 'span 8',
  mt: '$20',
  mb: '$40',

  variants: {
    pageLayout: {
      left: {
        '@tabletUp': {
          gridColumn: '5 / span 4',
          my: '$40',
        },
      },
      right: {
        '@tabletUp': {
          gridColumn: '7 / span 4',
          my: '$40',
        },
      },
    },
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',

  variants: {
    pageLayout: {
      left: {
        '@tabletUp': {
          gridColumn: 'span 9',
        },
      },
      right: {
        '@tabletUp': {
          gridColumn: '6 / span 5',
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
