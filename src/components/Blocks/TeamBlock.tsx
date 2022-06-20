import React from 'react'

import { styled } from 'styles/stitches.config'
import Asterisk from '../../../public/icons/Asterisk.svg'

import { TeamMember, TeamMemberProps } from './TeamMember'

interface TeamBlockProps {
  title: string
  teamMembers: TeamMemberProps[]
}

export const TeamBlock = ({ title, teamMembers }: TeamBlockProps) => {
  return (
    <TeamBlockWrap>
      <HeaderWrap>
        <Asterisk />
        <TitleWrap>{title}</TitleWrap>
      </HeaderWrap>
      <FirstMember>
        <TeamMember {...teamMembers[0]} />
      </FirstMember>
      <SecondMember>
        <TeamMember {...teamMembers[1]} />
      </SecondMember>
      <ThirdMember>
        <TeamMember {...teamMembers[2]} />
      </ThirdMember>
      <FourthMember>
        <TeamMember {...teamMembers[3]} />
      </FourthMember>
      <FifthMember>
        <TeamMember {...teamMembers[4]} />
      </FifthMember>
    </TeamBlockWrap>
  )
}

const TeamBlockWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  rowGap: '$40',
  px: '$16',
  my: '$40',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    rowGap: '$60',
    px: '$20',
    my: '$60',
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
})

const TitleWrap = styled('h2', {
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$S',
  lineHeight: '$S',

  '@tabletUp': {
    gridColumn: 'span 8',
    fontSize: '$L',
    lineHeight: '$L',
  },
})

const FirstMember = styled('div', {
  gridColumn: 'span 8',
  gridRowStart: '2',

  '@tabletUp': {
    gridColumn: 'span 3',
  },
})

const SecondMember = styled('div', {
  gridColumn: 'span 8',
  gridRowStart: '3',

  '@tabletUp': {
    gridColumn: 'span 3',
    gridRowStart: '2',
  },
})

const ThirdMember = styled('div', {
  gridColumn: 'span 8',
  gridRowStart: '4',

  '@tabletUp': {
    gridColumn: 'span 3',
    gridRowStart: '3',
  },
})

const FourthMember = styled('div', {
  gridColumn: 'span 8',
  gridRowStart: '5',

  '@tabletUp': {
    gridColumn: 'span 3',
    gridRowStart: '3',
  },
})

const FifthMember = styled('div', {
  gridColumn: 'span 8',
  gridRowStart: '6',

  '@tabletUp': {
    gridColumn: 'span 3',
    gridRowStart: '3',
  },
})
