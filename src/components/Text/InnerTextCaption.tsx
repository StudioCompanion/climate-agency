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
      <p>{children}</p>
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
  fontWeight: '$medium',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  letterSpacing: '$small',
  whiteSpace: 'pre-line',

  '& > p': {
    maxWidth: '430px',
  },
})
