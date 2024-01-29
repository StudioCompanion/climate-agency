import { styled } from 'styles/stitches.config'

import { Link, LinkProps } from '../Links/Link'
import { CtaMediaImage, CtaMediaImageProps } from '../Cards/CtaMediaImage'

export interface CtaBlockProps {
  content: string
  leftLink: LinkProps
  rightLink: LinkProps
  className?: string
  mediaImages?: CtaMediaImageProps[]
}

export const CtaBlock = ({
  mediaImages,
  content,
  leftLink,
  rightLink,
  className,
}: CtaBlockProps) => {
  return (
    <CtaBlockWrap className={className}>
      <TextContainer>{content}</TextContainer>
      {mediaImages ? (
        <MediaImagesWrap>
        {mediaImages.map((mediaImage) => (
          <CtaMediaImage {...mediaImage} />
        ))}
        </MediaImagesWrap>
    ) : null}
      {leftLink ?  (
        <ButtonsWrap><Link {...leftLink} />
        {rightLink ? <Link {...rightLink} /> : null}
        </ButtonsWrap>
      ) : null}
    </CtaBlockWrap>
  )
}

const CtaBlockWrap = styled('section', {
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
  },
})

const TextContainer = styled('p', {
  color: '$black',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  letterSpacing: '$normal',
  gridColumn: 'span 8',
  mb: '$30',
  whiteSpace: 'pre-line',

  '@tabletUp': {
    fontSize: '$L',
    lineHeight: '$L',
    gridColumn: 'span 8',
    mb: '$20',
  },
  '@desktopUp': {
    gridColumn: 'span 7',
  },
})

const ButtonsWrap = styled('div', {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$8',
  gridColumn: 'span 8',

  '@desktopUp': {
    flexDirection: 'row',
  },
  '@largeDesktopUp': {
    gridColumn: '1 / span 6',
  },
})

const MediaImagesWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gridColumn: 'span 8',
  class: 'mediaImagesWrap',

  '@tabletUp': {
    gridColumn: 'span 12',
    flexDirection: 'row',
  },
})
