import { styled } from 'styles/stitches.config'

import { Link, LinkProps } from '../Links/Link'

const link = {
  href: `/our-mission`,
  children: `Take me home`,
  color: 'green',
  isExternal: false,
} as LinkProps

export const PageNotFound = () => {
  return (
    <PageNotFoundWrap>
      <Title>Page Not Found</Title>
      <Subtitle>Oops! We can’t seem to find what you’re looking for.</Subtitle>
      <Link {...link} />
    </PageNotFoundWrap>
  )
}

const PageNotFoundWrap = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$20',

  '@tabletUp': {
    gap: '$40',
  },
})

const Title = styled('h2', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$XXL',
  lineHeight: '$XXL',

  '@tabletUp': {
    fontSize: '$XXXL',
    lineHeight: '$XXXL',
  },
})

const Subtitle = styled('p', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$XS',
  lineHeight: '$XS',
})
