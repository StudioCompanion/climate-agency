import { styled } from 'styles/stitches.config'

import SpikesIcon from '../../assets/Spikes.svg'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'

interface StakeholderBlockProps {
  title: string
  content: string
  mediaImage: MediaImageProps
}

export const StakeholderBlock = ({
  title,
  content,
  mediaImage,
}: StakeholderBlockProps) => {
  return (
    <StakeholderWrap>
      <HeaderContainer>
        <Spikes width="39" />
        <Title>{title}</Title>
      </HeaderContainer>
      <Content>{content}</Content>
      <ImageContainer>
        <MediaImage {...mediaImage} />
      </ImageContainer>
    </StakeholderWrap>
  )
}

const StakeholderWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  px: '$16',
  pt: '$60',
  pb: '$50',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    px: '$20',
    pt: '$120',
    pb: '$100',
  },
})

const HeaderContainer = styled('div', {
  gridColumn: 'span 8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$20',

  '@tabletUp': {
    flexDirection: 'row',
    gridColumn: '4 / span 9',
  },
})

const Spikes = styled(SpikesIcon, {
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

  '@tabletUp': {
    gridColumn: '7 / span 4',
    my: '$40',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: '6 / span 5',
  },
})
