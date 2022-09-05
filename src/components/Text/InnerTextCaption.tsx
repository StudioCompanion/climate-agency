import { styled } from 'styles/stitches.config'

interface InnerTextCaptionProps {
  children?: string
  className?: string
}

export const InnerTextCaption = ({
  children,
  className,
}: InnerTextCaptionProps) => {
  return (
    <InnerCaptionContainer className={className}>
      {children}
    </InnerCaptionContainer>
  )
}

const InnerCaptionContainer = styled('figcaption', {
  position: 'absolute',
  width: '100%',
  backgroundColor: '$green',
  color: '$black',
  left: 0,
  bottom: 0,
  p: '$8',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  letterSpacing: '$small',
  whiteSpace: 'pre-line',
})
