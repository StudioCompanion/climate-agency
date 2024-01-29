import { styled } from 'styles/stitches.config'
import { MediaImage, MediaImageProps } from '../Media/MediaImage'

export interface CtaMediaImageProps {
  mediaImage: MediaImageProps
}

export const CtaMediaImage = ({
  mediaImage
}: CtaMediaImageProps) => {
  return (
    <CtaMediaImageWrap>
      <MediaImage {...mediaImage} />
    </CtaMediaImageWrap>
  )
}

const CtaMediaImageWrap = styled('div', {
  display: 'block',
  width: '100%',
  maxWidth: 'auto',
  height: 'auto',
  maxHeight: 'auto',
  '@tabletUp': {
    paddingRight: '10px'
  }
})
