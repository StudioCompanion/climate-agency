import { styled } from 'styles/stitches.config'

import { Link, LinkProps } from '../components/Links/Link'

const link = {
  href: `/our-mission`,
  children: `Take me home`,
  color: 'green',
  isExternal: false,
} as LinkProps

const ErrorPage = () => {
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
  mt: '$80',
  mb: '17.6rem',

  '@tabletUp': {
    gap: '$40',
    mt: '$160',
    mb: '27.4rem',
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

export default ErrorPage
