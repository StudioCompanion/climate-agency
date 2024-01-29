import { styled } from 'styles/stitches.config'

import { LinkProps } from '../Links/Link'
import { CtaMediaImage, CtaMediaImageProps } from '../Cards/CtaMediaImage'
import { ReactNode } from 'react'
import ArrowsIcon from '../../assets/Arrows.svg'


export interface CaseStudyContentBlockProps {
  content: ReactNode
  leftLink: LinkProps
  rightLink: LinkProps
  className?: string
  mediaImages?: CtaMediaImageProps[]
}

export const CaseStudyContentBlock = ({
  mediaImages,
  content,
  className,
}: CaseStudyContentBlockProps) => {
  return (
    <CaseStudyContentBlockWrap className={className}>
      <Arrows width="44" />
      <TextContainer>{content}</TextContainer>
      {mediaImages ? (
        <MediaImagesWrap>
        {mediaImages.map((mediaImage) => (
          <CtaMediaImage {...mediaImage} />
        ))}
        </MediaImagesWrap>
    ) : null}
    </CaseStudyContentBlockWrap>
  )
}

const CaseStudyContentBlockWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  px: '$16',
  pt: '$60',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
    px: '$20',
    pt: '$100',
    '&.singleImage img': {
      maxWidth: '600px !important',
      maxHeight: '600px !important',
      minWidth: '500px !important',
      minHeight: '500px !important',
      margin: '0 auto !important'
    },
    '&.joltFix div:nth-of-type(2) > div > div > span > span': {
      maxHeight: '500px !important',
      paddingTop: '500px !important'
    }
  },
})

const TextContainer = styled('div', {
  color: '$black',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$S',
  gridColumn: 'span 8',
  mb: '$30',
  whiteSpace: 'pre-line',
  '& h2' : {
      fontFamily: '$inria',
      marginBottom: '30px',
      fontSize: '$L'
  },
  '& h2:not(:first-child)' : {
      marginTop: '60px'
  },
  '& h2:first-child' : {
    marginTop: '60px'
  },
  '& p, & li': {
    fontSize: '1.25em',
    lineHeight: '1.5em'
  },
  'ul' : {
    listStyle: 'initial',
    marginTop: '25px',
    display: 'block',
    paddingLeft: '20px'
  },
  'a' : {
    color: '$green'
  },
  'li' : {
    marginBottom: '5px'
  },
  'blockquote' : {
    backgroundColor: '$yellow',
    padding: '1em',
    margin: '60px 0',
    fontFamily: '$inria',
    marginBottom: '30px',
    fontSize: '$L',
    lineHeight: '$L'
  },
  'blockquote span' : {
    display: 'block',
    fontFamily: '$workSans',
    fontSize : '$XS',
    textAlign: 'right',
    fontWeight: 'bold'
  },
  '@tabletUp': {
    lineHeight: '$L',
    gridColumn: 'span 8',
    mb: '$20',
    '& h2:first-child' : {
      marginTop: 0
    }
  },
  '@desktopUp': {
    gridColumn: '2 / span 10',
  },
})

const MediaImagesWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  gridColumn: 'span 8',
  class: 'mediaImagesWrap',
  marginBottom: '50px',

  '@tabletUp': {
    gridColumn: '2 / span 10',
    flexDirection: 'row',
  },
})

const Arrows = styled(ArrowsIcon, {
  '@tabletUp': {
    flex: '1 0 3.7rem',
    alignSelf: 'flex-start',
    mt: '0',
  },
  '@largeDesktopUp': {
    flex: '0 1 5rem',
  },
})
