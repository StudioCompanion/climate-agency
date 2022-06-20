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

      <NameAndRoleWrap>
        <SpanWrap>{name}</SpanWrap>
        <SpanWrap>{role}</SpanWrap>
      </NameAndRoleWrap>
      <DescriptionWrap>{description}</DescriptionWrap>
      <SpanWrap>
        <LinkWrap {...socialLink} />
      </SpanWrap>
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

const SpanWrap = styled('span', {
  display: 'block',
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
})
