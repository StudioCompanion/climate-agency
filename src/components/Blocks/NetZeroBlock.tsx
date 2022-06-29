import { styled } from 'styles/stitches.config'
import ClockIcon from '../../assets/Clock.svg'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { TextCaption } from '../Text/TextCaption'

export interface NetZeroBlockProps {
  title: string
  content: string
  imageSection: {
    mediaImage: MediaImageProps
    caption: string
  }
}

export const NetZeroBlock = ({
  title,
  content,
  imageSection,
}: NetZeroBlockProps) => {
  return (
    <NetZeroWrap>
      <HeaderContainer>
        <Clock width="29" />
        <TitleContainer>
          {title}
          <sup>(1)</sup>
        </TitleContainer>
      </HeaderContainer>
      <TextContainer>{content}</TextContainer>
      <MediaContainer>
        <ImageContainer>
          {imageSection.mediaImage ? (
            <MediaImage {...imageSection.mediaImage} />
          ) : null}
        </ImageContainer>
        <CaptionWrap color="white">{imageSection.caption}</CaptionWrap>
      </MediaContainer>
    </NetZeroWrap>
  )
}

const NetZeroWrap = styled('section', {
  backgroundColor: '$black',
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
})

const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
  color: '$white',
  gridColumn: 'span 8',
  mt: '$80',

  '@tabletUp': {
    flexDirection: 'row',
    gap: '$30',
    gridColumn: 'span 7',
    mt: '$180',
  },
})

const Clock = styled(ClockIcon, {
  '@tabletUp': {
    flex: '1 0 2.7rem',
    alignSelf: 'flex-start',
    mt: '$24',
  },
})

const TitleContainer = styled('h2', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$M',
  lineHeight: '$M',
  letterSpacing: '-1.9px',

  '@tabletUp': {
    fontSize: '$XXL',
    lineHeight: '$XXL',
  },
})

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  color: '$white',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  gridColumn: 'span 8',
  py: '$40',

  '@tabletUp': {
    gridColumn: '5 / span 4',
    py: '$60',
  },
})

const MediaContainer = styled('figure', {
  margin: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridColumn: 'span 8',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridColumn: 'span 12',
    gridRowStart: '3',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',
  mt: '$16',

  '@tabletUp': {
    gridColumn: 'span 12',
    mt: '0',
  },
})

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 8',
  mt: '$8',
  mb: '$16',

  '@tabletUp': {
    gridColumn: 'span 4',
  },
})
