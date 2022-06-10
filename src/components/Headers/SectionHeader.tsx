import React from 'react'

import { styled } from 'styles/stitches.config'

interface SectionHeaderProps {
  header: string
}

export const SectionHeader = ({ header }: SectionHeaderProps) => {
  return <HeaderContainer>{header}</HeaderContainer>
}

const HeaderContainer = styled('h3', {
  fontFamily: '$workSans',
  fontWeight: '$semiBold',
  fontSize: '$XXS',
  lineHeight: '$XXXS',
})
