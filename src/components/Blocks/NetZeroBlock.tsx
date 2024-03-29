import { ReactNode } from 'react'

import { styled } from 'styles/stitches.config'

import CommunicationIcon from 'assets/Communication.svg'

import { MediaImage, MediaImageProps } from 'components/Media/MediaImage'
import { TextCaption } from 'components/Text/TextCaption'
import { InnerTextCaption } from 'components/Text/InnerTextCaption'
import { parseStringAndInsertFootnoteBetweenSupTags } from 'helpers/strings'
import { Link } from 'components/Links/Link'

export interface NetZeroBlockProps {
  title?: ReactNode
  content?: string
  imageSection: {
    mediaImage: MediaImageProps
    innerCaption?: string
    caption?: ReactNode
  }
}

export const NetZeroBlock = ({
  title,
  content,
  imageSection,
}: NetZeroBlockProps) => {
  return (
    <NetZeroWrap>
      { title ? (
      <HeaderContainer>
          <Communication width="27" />
        {title ? (
          <TitleContainer>{title}</TitleContainer>
        ) : null}
      </HeaderContainer>
      ) : null}
      {content ? (
        <TextContainer>
          {parseStringAndInsertFootnoteBetweenSupTags(
            content,
            'The UK Carbon Trust research found that 71% of small and medium size businesses in the UK could not refer to a single web source for help on decarbonization, and one third were not familiar with the term “Net Zero”. SMEs represent 90% of businesses in the UK.',
            {
              tooltipProps: {
                contentProps: {
                  alignOffset: -12,
                },
              },
              popoverProps: {
                contentProps: {
                  alignOffset: -12,
                },
              },
            }
          )}
          <TextLink href="mailto:sophie@climateagency.net">{'Get in Touch'}</TextLink>
        </TextContainer>
      ) : null}
      <MediaContainer>
        <ImageContainer>
          {imageSection.mediaImage ? (
            <MediaImage {...imageSection.mediaImage} />
          ) : null}
          {imageSection.innerCaption && (
            <InnerTextCaption>{imageSection.innerCaption}</InnerTextCaption>
          )}
        </ImageContainer>
        {imageSection.caption ? (
          <CaptionWrap color="white">Photo: {imageSection.caption}</CaptionWrap>
        ) : null}
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
  paddingBottom: '20px',
  paddingTop: '20px',

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
    gridColumn: 'span 10',
    mt: '$100',
  },
  '@desktopUp': {
    gridColumn: 'span 7',
  },
})

const Communication = styled(CommunicationIcon, {
  '@tabletUp': {
    flex: '1 0 2.7rem',
    alignSelf: 'flex-start',
    mt: '$24',
  },
})

const TitleContainer = styled('h2', {
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

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  color: '$white',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  letterSpacing: '$small',
  gridColumn: 'span 8',
  py: '$40',

  '@tabletUp': {
    gridColumn: '4 / span 6',
    py: '$60',
  },
  '@desktopUp': {
    gridColumn: '5 / span 4',
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
  position: 'relative',
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
    gridColumn: 'span 5',
  },
  '@desktopUp': {
    gridColumn: 'span 4',
  },
})

const TextLink = styled(Link, {
  mt: '$24',
  display: 'table',
})
