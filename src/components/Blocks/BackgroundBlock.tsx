import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { TextHeader } from '../Text/TextHeader'
import { TextCaption } from '../Text/TextCaption'

interface BackgroundBlockProps {
  header: string
  content: string
  imageSection: {
    mediaImage: MediaImageProps
    caption: string
  }
}

export const BackgroundBlock = ({
  header,
  content,
  imageSection,
}: BackgroundBlockProps) => {
  return (
    <BackgroundWrap>
      <LeftContainer>
        <HeaderWrap>{header}</HeaderWrap>
        <TextContainer>{content}</TextContainer>
      </LeftContainer>
      <RightContainer>
        <MediaContainer>
          <ImageContainer>
            {imageSection.mediaImage ? (
              <MediaImage {...imageSection.mediaImage} />
            ) : null}
          </ImageContainer>
          <CaptionWrap color="black">{imageSection.caption}</CaptionWrap>
        </MediaContainer>
      </RightContainer>
    </BackgroundWrap>
  )
}

const BackgroundWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  p: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    p: '$20',
  },
})

const LeftContainer = styled('div', {
  gridColumn: 'span 8',
  gridRowStart: '1',

  '@tabletUp': {
    gridColumn: 'span 6',
  },
})

const RightContainer = styled('div', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: '7 / span 6',
  },
})

const HeaderWrap = styled(TextHeader, {
  mb: '$8',
})

const TextContainer = styled('p', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',

  '@tabletUp': {
    fontSize: '$XXL',
    lineHeight: 'XXL',
  },
})

const MediaContainer = styled('figure', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  m: '0',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: 'span 6',
    mt: '0',
  },
})

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 8',
  mt: '$8',

  '@tabletUp': {
    gridColumn: '1 / span 4',
    gridRowStart: '2',
  },
})
