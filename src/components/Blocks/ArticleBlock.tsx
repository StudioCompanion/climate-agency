import { ReactNode } from 'react'
import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from '../Links/Link'
import { TextCaption } from 'components/Text/TextCaption'
import { InnerTextCaption } from 'components/Text/InnerTextCaption'

export interface ArticleBlockProps {
  pageLayout: 'left' | 'right'
  children: ReactNode
  link?: LinkProps
  title: string
  content: ReactNode
  imageSection: {
    mediaImage: MediaImageProps
    innerCaption?: string
    caption?: ReactNode
  }
  secondImageSection?: {
    mediaImage: MediaImageProps
    innerCaption?: string
    caption?: ReactNode
  }
  className?: string
}

export const ArticleBlock = ({
  pageLayout,
  link,
  children,
  title,
  content,
  imageSection,
  secondImageSection,
  className,
}: ArticleBlockProps) => {
  return (
    <ArticleWrap pageLayout={pageLayout} className={className}>
      <HeaderContainer pageLayout={pageLayout}>
        <Icon pageLayout={pageLayout}>{children}</Icon>
        <Title>{title}</Title>
      </HeaderContainer>
      <Content pageLayout={pageLayout}>{content}</Content>
      {link ? (
        <>
        <LinkWrap>
          <Link {...link} />
        </LinkWrap>
        </>
      ) : null}
      {secondImageSection ? (
        <>
        <ImageWrap className={className}>
          <MediaImage {...imageSection.mediaImage} />
          {imageSection.innerCaption && (
            <InnerTextCaption>{imageSection.innerCaption}</InnerTextCaption>
          )}
          {secondImageSection.mediaImage ? (
            <MediaImage {...secondImageSection.mediaImage} />
          ) : null}
          {secondImageSection.innerCaption && (
            <InnerTextCaption>{secondImageSection.innerCaption}</InnerTextCaption>
          )}
          </ImageWrap>
        </>
      ) : (
        <ImageContainer pageLayout={pageLayout}>
          <MediaImage {...imageSection.mediaImage} />
          {imageSection.innerCaption && (
            <InnerTextCaption>{imageSection.innerCaption}</InnerTextCaption>
          )}
        </ImageContainer>
      )}
      {imageSection.caption && (
        <CaptionWrap pageLayout={pageLayout} color="black">
          Photo: {imageSection.caption}
        </CaptionWrap>
      )}
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

  '&.noMarginTop': {
    marginTop: '0'
  }
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
  }
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
  letterSpacing: '$normal',

  '@tabletUp': {
    fontSize: '$XXXL',
    lineHeight: '$XXXL',
  },
})

const Content = styled('div', {
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '3em',
  lineHeight: '$XS',
  letterSpacing: '$small',
  gridColumn: 'span 8',
  mt: '$20',
  mb: '$40',
  '& p' : {
    marginBottom: 20
  },

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
  position: 'relative',
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
          gridColumn: '7 / span 4',
        },
      },
    },
  },
})

const ImageWrap = styled('div', {
  position: 'relative',
  gridColumn: 'span 8',
  mt: '$40',

  '&.twoImages': {
    display: 'flex',
    flexDirection: 'column'
  },

  '&.twoImages > *': {
    width: '100%',
    margin: '0 0 10px'
  },

  '@tabletUp': {
    gridColumn: '3 / span 10',
    '&.twoImages': {
      flexDirection: 'row'
    },
    '&.twoImages > *': {
      width: '50%',
      margin: '0 10px'
    },
  },
})

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 8',
  mt: '$8',
  alignSelf: 'start',

  variants: {
    pageLayout: {
      left: {
        '@tabletUp': {
          gridColumn: 'span 4',
        },
      },
      right: {
        '@tabletUp': {
          gridColumn: '6 / span 4',
          // gridRow: '2',
        },
      },
    },
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
