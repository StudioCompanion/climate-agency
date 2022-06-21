import { styled } from 'styles/stitches.config'

import SunIcon from '../../assets/Sun.svg'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'

interface PartnersBlockProps {
  title: string
  content: string
  mediaImage: MediaImageProps
}

export const PartnersBlock = ({
  title,
  content,
  mediaImage,
}: PartnersBlockProps) => {
  return (
    <PartnersWrap>
      <HeaderContainer>
        <Sun width="36" />
        <Title>{title}</Title>
      </HeaderContainer>
      <Content>{content}</Content>
      <ImageContainer>
        <MediaImage {...mediaImage} />
      </ImageContainer>
    </PartnersWrap>
  )
}

const PartnersWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  px: '$16',
  mb: '$60',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    px: '$20',
    mb: '$120',
  },
})

const HeaderContainer = styled('div', {
  gridColumn: 'span 8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$20',

  '@tabletUp': {
    flexDirection: 'row',
    gridColumn: '2 / span 10',
  },
})

const Sun = styled(SunIcon, {
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
    gridColumn: '5 / span 4',
    my: '$40',
  },
})

const ImageContainer = styled('div', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: 'span 9',
  },
})
