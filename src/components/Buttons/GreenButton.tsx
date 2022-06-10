import React from 'react'
import Link from 'next/link'

import { styled } from 'styles/stitches.config'

interface GreenButtonProps {
  href: string
  description: string
}

export const GreenButton = ({ href, description }: GreenButtonProps) => {
  return (
    <LinkContainer>
      <Link href={href}>
        <a>{description}</a>
      </Link>
    </LinkContainer>
  )
}

const LinkContainer = styled('span', {
  fontFamily: '$workSans',
  fontWeight: '$semiBold',
  fontSize: '$XXS',
  lineHeight: '$XXXS',
  backgroundColor: '$green',
  display: 'inline-flex',
  p: '$12',

  '& > *': {
    color: '$black',
    textDecoration: 'none',
  },
})
