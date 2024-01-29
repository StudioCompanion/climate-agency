import { ReactNode } from 'react'

import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from '../Links/CaseStudiesLink'
import { TextCaption } from '../Text/TextCaption'
import { InnerTextCaption } from 'components/Text/InnerTextCaption'

export interface CaseStudyHeaderBlockProps {
  textPosition: 'left' | 'right'
  logo?: string
  content: string
  link?: LinkProps
  imageSection: {
    mediaImage: MediaImageProps
    innerCaption?: string
    caption: ReactNode
  }
  className?: string
}

export const CaseStudyHeaderBlock = ({
  textPosition,
  link,
  content,
  logo,
  imageSection,
  className
}: CaseStudyHeaderBlockProps) => {
  return (
    <CaseStudyHeaderWrap className={className}>
      <MediaWrap>
        <MediaContainer>
          <ImageContainer>
            {imageSection.mediaImage ? (
              <MediaImage {...imageSection.mediaImage} />
            ) : null}
            {imageSection.innerCaption && (
              <InnerTextCaption>{imageSection.innerCaption}</InnerTextCaption>
            )}
          </ImageContainer>
          <CaptionWrap color="black">Photo: {imageSection.caption}</CaptionWrap>
        </MediaContainer>
      </MediaWrap>
      <TextWrap textPosition={textPosition}>
      {link ? (
        <Link {...link} />
      ) : null}
        <TextContainer>Case Study:<br /><b>{content}</b></TextContainer>
          {logo ? (
            <img src={logo} alt={content} />
          ) : null }
      </TextWrap>
    </CaseStudyHeaderWrap>
  )
}

const CaseStudyHeaderWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  px: '$16',
  alignItems: 'stretch',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
  '&.blackBackground': {
    backgroundColor: '#000',
    color: '#fff',
    marginBottom: 0,
    paddingTop: '40px'
  },
  '& *': {
    textAlign: 'center'
  }
})

const MediaWrap = styled('div', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: 'span 6',
  },
  '& img': {
    backgroundColor: '#fff',
    padding: '20px !important'
  }
})

const TextWrap = styled('div', {
  gridColumn: 'span 8',
  gridRowStart: '1',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    filter:'invert(1) brightness(100)',
    maxWidth: '150px',
    display: 'block',
    margin: '0 auto 45px'
  },
  '& a': {
    alignSelf: 'flex-start'
  },
  variants: {
    textPosition: {
      left: {
        '@tabletUp': {
          gridColumn: 'span 6',
        },
      },
      right: {
        '@tabletUp': {
          gridColumn: '7 / span 8',
          marginLeft: '50px',
          marginTop: '-25px'
        },
      },
    },
  },
  '@tabletUp' : {
    '& a': {
      position: 'absolute',
      top: '20px !important',
      left: '0'
    },
  }
})

const MediaContainer = styled('figure', {
  margin: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridColumn: 'span 8',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridColumn: 'span 3',
  },
})

const ImageContainer = styled('div', {
  position: 'relative',
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: 'span 8',
  },
})

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 8',
  my: '$8',

  '@tabletUp': {
    gridColumn: '1 / span 5',
  },
  '@desktopUp': {
    gridColumn: '1 / span 4',
  },
})

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  gridColumn: 'span 8',
  letterSpacing: '$normal',
  mb: '$40',
  '& b': {
    fontWeight: '700'
  },

  '@tabletUp': {
    fontSize: '$L',
    lineHeight: '$L',
    gridColumn: '7 / span 6',
  },
  '@largeDesktopUp': {
    fontSize: '$XXL',
    lineHeight: '$XXL',
  },
})
