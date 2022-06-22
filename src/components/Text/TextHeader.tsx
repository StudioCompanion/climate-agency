import { ReactNode } from 'react'

import { styled } from 'styles/stitches.config'

interface TextHeaderProps {
  children: ReactNode
  className?: string
}

export const TextHeader = ({ children, className }: TextHeaderProps) => {
  return <HeaderContainer className={className}>{children}</HeaderContainer>
}

const HeaderContainer = styled('h2', {
  fontFamily: '$workSans',
  fontWeight: '$semiBold',
  fontSize: '$XXS',
  lineHeight: '$XXXS',
})
