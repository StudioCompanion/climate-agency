import NextImage from 'next/image'
import { useState } from 'react'

import { styled } from 'styles/stitches.config'

import { generateSrcSetSizes } from '../../helpers/media'

type ImageLayout = 'fill' | 'fixed' | 'intrinsic' | 'responsive'

export type SizesArray = [
  largeMobile: string | null,
  tablet?: string | null,
  smallDesktop?: string | null,
  largeDesktop?: string | null
]

export interface ImageInterface {
  src: string
  altText?: string | undefined
  width?: number | undefined
  height?: number | undefined
}

export type MediaImageProps = {
  image: ImageInterface
  layout?: ImageLayout
  objectFit?: 'cover' | 'contain'
  sizes?: string | SizesArray
  priority?: boolean
}

export const MediaImage = ({
  image,
  layout = 'intrinsic',
  objectFit = 'cover',
  sizes = '100vw',
  priority,
}: MediaImageProps) => {
  const [loaded, setLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setLoaded(true)
  }

  return (
    <ImgContainer>
      <Img
        src={image.src}
        alt={image.altText}
        width={image.width}
        height={image.height}
        layout={layout}
        objectFit={objectFit}
        sizes={generateSrcSetSizes(sizes)}
        priority={priority}
        loaded={loaded}
        onLoadingComplete={handleLoadingComplete}
      />
    </ImgContainer>
  )
}

const ImgContainer = styled('div', {
  backgroundColor: '$green',
})

const Img = styled(NextImage, {
  transition: 'opacity 0.4s ease-out',

  variants: {
    loaded: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
})
