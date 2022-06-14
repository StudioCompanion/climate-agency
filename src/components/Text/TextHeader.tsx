import React from 'react'

import { styled } from 'styles/stitches.config'

interface TextHeaderProps {
  header: string
}

export const TextHeader = ({ header }: TextHeaderProps) => {
  return <HeaderContainer>{header}</HeaderContainer>
}

const HeaderContainer = styled('h2', {
  fontFamily: '$workSans',
  fontWeight: '$semiBold',
  fontSize: '$XXS',
  lineHeight: '$XXXS',
})
