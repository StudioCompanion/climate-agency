import { styled } from 'styles/stitches.config'
import Asterisk from '../../assets/Asterisk.svg'

import { TeamMember, TeamMemberProps } from '../Cards/TeamMember'

export interface TeamBlockProps {
  title: string
  teamMembers: TeamMemberProps[][]
  className?: string
}

export const TeamBlock = ({
  title,
  teamMembers,
  className,
}: TeamBlockProps) => {
  return (
    <TeamBlockWrap className={className}>
      <HeaderWrap>
        <Asterisk />
        <TitleWrap>{title}</TitleWrap>
      </HeaderWrap>
      <TeamGrid>
        {teamMembers.map((group, idx) => (
          <TeamGroupWrap key={idx}>
            <InnerTeamGroupWrap>
              {group.map((user) => (
                <TeamMemberWrap key={user.name}>
                  <TeamMember {...user} />
                </TeamMemberWrap>
              ))}
            </InnerTeamGroupWrap>
          </TeamGroupWrap>
        ))}
      </TeamGrid>
    </TeamBlockWrap>
  )
}

const TeamBlockWrap = styled('section', {
  display: 'grid',
  backgroundColor: '$stone',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  rowGap: '$40',
  p: '$16',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    rowGap: '$60',
    p: '$20',
  },
})

const HeaderWrap = styled('div', {
  gridColumn: 'span 8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',

  '@tabletUp': {
    gridColumn: 'span 8',
    gap: '$20',
  },
  '@desktopUp': {
    gridColumn: 'span 6',
  },
})

const TitleWrap = styled('h2', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',
  letterSpacing: '$normal',

  '@tabletUp': {
    gridColumn: 'span 8',
    fontSize: '$L',
    lineHeight: '$L',
  },
})

const TeamGrid = styled('ol', {
  listStyleType: 'none',
  gridColumn: 'span 8',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  p: '0',

  '@tabletUp': {
    gridColumn: 'span 12',
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
  },
})

const TeamGroupWrap = styled('li', {
  gridColumn: 'span 8',

  '@tabletUp': {
    gridColumn: 'span 12',
  },
})

const InnerTeamGroupWrap = styled('ul', {
  gridColumn: 'span 8',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',

  '@tabletUp': {
    gridColumn: 'span 12',
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: '$20',
  },
})

const TeamMemberWrap = styled('li', {
  gridColumn: 'span 8',
  mb: '$40',

  '@tabletUp': {
    gridColumn: 'span 6',
    mb: '$16',
  },
  '@desktopUp': {
    gridColumn: 'span 3',
  },
})
