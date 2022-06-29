import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from '../Links/Link'

export interface TeamMemberProps {
  mediaImage: MediaImageProps
  name: string
  role: string
  description: string
  socialLink: LinkProps
}

export const TeamMember = ({
  mediaImage,
  name,
  role,
  description,
  socialLink,
}: TeamMemberProps) => {
  return (
    <TeamMemberWrap>
      <MediaImage {...mediaImage} />
      <ContentWrap>
        <NameAndRoleWrap>{name}</NameAndRoleWrap>
        <NameAndRoleWrap>{role}</NameAndRoleWrap>
        <DescriptionWrap>{description}</DescriptionWrap>
        <LinkWrap {...socialLink} />
      </ContentWrap>
    </TeamMemberWrap>
  )
}

const TeamMemberWrap = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

const ContentWrap = styled('p', {})

const NameAndRoleWrap = styled('span', {
  display: 'block',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  letterSpacing: '-1.9px',
})

const DescriptionWrap = styled('span', {
  display: 'block',
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  my: '$12',
})

const LinkWrap = styled(Link, {
  display: 'block',
  fontWeight: '$regular',
  lineHeight: '$XXS',
  textDecoration: 'underline',
  p: '0',
})
