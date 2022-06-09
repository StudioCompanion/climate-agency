import NextImage from 'next/image'

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
}

export const MediaImage = ({
  image,
  layout = 'intrinsic',
  objectFit = 'cover',
  sizes = '100vw',
}: MediaImageProps) => {
  return (
    <NextImage
      src={image.src}
      alt={image.altText}
      width={image.width}
      height={image.height}
      layout={layout}
      objectFit={objectFit}
      sizes={generateSrcSetSizes(sizes)}
    />
  )
}
