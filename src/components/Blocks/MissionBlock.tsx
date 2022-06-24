import { styled } from 'styles/stitches.config'

import { TextHeader } from '../Text/TextHeader'

export interface MissionBlockProps {
  header: string
  content: string
  className?: string
}

export const MissionBlock = ({
  header,
  content,
  className,
}: MissionBlockProps) => {
  return (
    <MissionWrap className={className}>
      <HeaderWrap>{header}</HeaderWrap>
      <TextContainer>{content}</TextContainer>
    </MissionWrap>
  )
}

const MissionWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  px: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})

const HeaderWrap = styled(TextHeader, {
  gridColumn: 'span 4',
  my: '$8',
})

const TextContainer = styled('p', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$XL',
  lineHeight: '$XL',
  gridColumn: '1 / span 8',

  '@tabletUp': {
    fontSize: '$XXXL',
    lineHeight: '$XXXL',
  },
})
