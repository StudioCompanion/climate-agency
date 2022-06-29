import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from '../Links/Link'
import { TextCaption } from '../Text/TextCaption'
export interface ClimateCausesBlockProps {
  title: string
  content: string
  link: LinkProps
  leftImage: {
    mediaImage: MediaImageProps
    caption: string
  }
  rightImage: MediaImageProps
  className?: string
}

export const ClimateCausesBlock = ({
  title,
  content,
  link,
  leftImage,
  rightImage,
  className,
}: ClimateCausesBlockProps) => {
  return (
    <ClimateCausesWrap className={className}>
      <Title>
        {title} <sup>(2)</sup>
      </Title>
      <TextContainer>
        {content}
        <LinkWrapper>
          <Link {...link} />
        </LinkWrapper>
      </TextContainer>

      <MediaContainer>
        <LeftImageContainer>
          {leftImage.mediaImage ? (
            <MediaImage {...leftImage.mediaImage} />
          ) : null}
        </LeftImageContainer>
        <CaptionWrap color="black">{leftImage.caption}</CaptionWrap>
        <RightImageContainer>
          {rightImage ? <MediaImage {...rightImage} /> : null}
        </RightImageContainer>
      </MediaContainer>
    </ClimateCausesWrap>
  )
}

const ClimateCausesWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  p: '$16',
  mt: '$120',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    p: '$20',
  },
})

const Title = styled('h2', {
  display: 'block',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$XL',
  lineHeight: '$XL',
  gridColumn: 'span 8',
  letterSpacing: '$normal',

  '@tabletUp': {
    fontSize: '$XXXL',
    lineHeight: '$XXXL',
    gridColumn: 'span 10',
  },
  '@desktopUp': {
    gridColumn: 'span 7',
  },
})

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  letterSpacing: '$small',
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '7 / span 6',
    gridRowStart: '2',
    mt: '$100',
  },
  '@desktopUp': {
    gridColumn: '8 / span 4',
  },
})

const LinkWrapper = styled('span', {
  display: 'block',
  mt: '$40',

  '@tabletUp': {
    mt: '$24',
  },
})

const MediaContainer = styled('figure', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridColumn: 'span 8',
  columnGap: '$16',
  alignItems: 'end',
  m: '0',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    gridColumn: 'span 12',
    gridRowStart: '3',
  },
})

const LeftImageContainer = styled('div', {
  display: 'block',
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: 'span 7',
    mt: '$120',
  },
  '@desktopUp': {
    gridColumn: 'span 5',
  },
})

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 7',
  mt: '$8',

  '@tabletUp': {
    gridColumn: 'span 5',
    gridRowStart: '2',
  },
  '@desktopUp': {
    gridColumn: 'span 4',
  },
})

const RightImageContainer = styled('div', {
  display: 'block',

  gridColumn: '3 / span 6',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '8 / span 5',
  },
  '@desktopUp': {
    gridColumn: '6 / span 4',
  },
})
