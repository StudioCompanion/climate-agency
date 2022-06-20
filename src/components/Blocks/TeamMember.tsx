import React from 'react'

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
      {mediaImage ? <MediaImage {...mediaImage} /> : null}

      <div>
        <NameAndRoleWrap>{name}</NameAndRoleWrap>
        <NameAndRoleWrap>{role}</NameAndRoleWrap>
      </div>
      <DescriptionWrap>{description}</DescriptionWrap>
      <LinkWrap {...socialLink} />
    </TeamMemberWrap>
  )
}

const TeamMemberWrap = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '343px',
  gap: '$8',
})

const NameAndRoleWrap = styled('p', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
})

const DescriptionWrap = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  my: '$4',
})

const LinkWrap = styled(Link, {
  display: 'block',
  fontWeight: '$regular',
  lineHeight: '$XXS',
  textDecoration: 'underline',
  p: '0',
  mt: 'auto !important',
})
