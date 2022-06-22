import { styled } from 'styles/stitches.config'

import SpikesIcon from '../../assets/Spikes.svg'
import SunIcon from '../../assets/Sun.svg'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'

interface ArticleBlockProps {
  pageLayout: 'left' | 'right'
  title: string
  content: string
  mediaImage: MediaImageProps
}

export const ArticleBlock = ({
  pageLayout,
  title,
  content,
  mediaImage,
}: ArticleBlockProps) => {
  return (
    <ArticleWrap pageLayout={pageLayout}>
      <HeaderContainer pageLayout={pageLayout}>
        {pageLayout === 'left' ? <Sun width="36" /> : <Spikes width="24" />}
        <Title>{title}</Title>
      </HeaderContainer>
      <Content pageLayout={pageLayout}>{content}</Content>
      <ImageContainer pageLayout={pageLayout}>
        <MediaImage {...mediaImage} />
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
        mb: '$60',

        '@tabletUp': {
          mb: '$120',
        },
      },
      right: {
        pt: '$60',
        pb: '$50',

        '@tabletUp': {
          pt: '$120',
          pb: '$100',
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

const Spikes = styled(SpikesIcon, {
  '@tabletUp': {
    flex: '1 0 3.8rem',
    alignSelf: 'flex-start',
    mt: '$40',
  },
})

const Sun = styled(SunIcon, {
  '@tabletUp': {
    flex: '1 0 4rem',
    alignSelf: 'flex-start',
    mt: '$40',
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
