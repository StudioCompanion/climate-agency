import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from 'components/Links/Link'



export interface CaseStudyProps {
  mediaImage: MediaImageProps
  name: string
  role: string
  description: string
  link?: LinkProps
}

export const CaseStudy = ({
  mediaImage,
  name,
  role,
  description,
  link,
}: CaseStudyProps) => {
  return (
    <CaseStudyWrap>
      <ContentWrap>
      {link ? (
        <>
          <ImageWrap>
              <MediaImage {...mediaImage} />
          </ImageWrap>
            <NameWrap>
              <Link {...link} />
            </NameWrap>
        </>
      ) : (
        <>
          <ImageWrap>
            <MediaImage {...mediaImage} />
          </ImageWrap>
          <NameWrap>{name}</NameWrap>
        </>
      )}
        <DescriptionWrap>
          <RoleWrap>{role}: </RoleWrap>
          <DescriptionInnerWrap dangerouslySetInnerHTML={{ __html: description }} />
        </DescriptionWrap>
      </ContentWrap>
    </CaseStudyWrap>
  )
}

const CaseStudyWrap = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  '& a': {
    textDecoration: 'none',
    color: '$black',
    transition: 'all linear 0.175s'
  },
  '& img': {
    transition: 'all linear 0.175s'
  },
  '& a:hover': {
    color: '$green'
  },
  '&:hover img': {
    transform: 'scale(1.025)'
  }
})

const ContentWrap = styled('div', {})

const ImageWrap = styled('div', {
  display: 'block',
  border: '$1 solid $stone',
  backgroundColor: '#fff',
  '& img': {
    padding: '20px !important'
  }
})

const NameWrap = styled('span', {
  display: 'block',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  letterSpacing: '$normal',
  textAlign: 'center',
  marginBottom: '$0',
  marginTop: '$20',
  padding: '0 20px',
  '& a': {
    fontFamily: '$inria',
    fontWeight: '$light',
    fontSize: '$S',
    lineHeight: '$S',
  }
})

const RoleWrap = styled('b', {
  display: 'inline-block',
  marginRight: '5px',
  backgroundColor: '$yellow'
})

const DescriptionInnerWrap = styled('span', {
  display: 'inline',

})


const DescriptionWrap = styled('span', {
  display: 'block',
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  letterSpacing: '$small',
  my: '$12',
  marginTop: '$20',
  textAlign: 'center',
  marginBottom: '$20',
  padding: '0 20px',

  '@largeDesktopUp': {
    fontSize: '2.75em',
    lineHeight: '$XS',
  },

  a: {
    color: 'inherit',

    '@motion': {
      transition: 'opacity 250ms ease-out',
    },

    '&:hover': {
      opacity: '50%',
    },

    '&:active': {
      opacity: '50%',
    },
  },
})
