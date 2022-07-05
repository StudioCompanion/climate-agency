import { styled } from 'styles/stitches.config'

import { Link, LinkProps } from '../Links/Link'

export interface CtaBlockProps {
  content: string
  leftLink: LinkProps
  rightLink: LinkProps
  className?: string
}

export const CtaBlock = ({
  content,
  leftLink,
  rightLink,
  className,
}: CtaBlockProps) => {
  return (
    <CtaBlockWrap className={className}>
      <TextContainer>{content}</TextContainer>
      <ButtonsWrap>
        <Link {...leftLink} />
        <Link {...rightLink} />
      </ButtonsWrap>
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
