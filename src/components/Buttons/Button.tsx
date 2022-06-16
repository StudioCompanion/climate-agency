import React, { ReactNode } from 'react'
import Link from 'next/link'

import { LinkContainer } from './LinkContainer'

export interface ButtonProps {
  href: string
  children: ReactNode
  className?: string
  color: 'green' | 'stone'
}

export const Button = ({ href, children, className, color }: ButtonProps) => {
  return (
    <Link href={href} passHref>
      <LinkContainer className={className} color={color}>
        {children}
      </LinkContainer>
    </Link>
  )
}
