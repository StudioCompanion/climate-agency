import NextImage from 'next/image'

import { generateSrcSetSizes } from '../../helpers/media'

type ImageLayout = 'fill' | 'fixed' | 'intrinsic' | 'responsive'

export type SizesArray = [
  largeMobile: string | null,
  tablet?: string | null,
  smallDesktop?: string | null,
  largeDesktop?: string | null
]

export interface Image {
  src: string
  altText?: string | undefined
}

export type Props = {
  image: Image
  layout?: ImageLayout
  objectFit?: 'cover' | 'contain'
  sizes?: string | SizesArray
}

export const MediaImage = ({
  image,
  layout = 'fill',
  objectFit = 'cover',
  sizes = '100vw',
}: Props) => {
  return (
    <NextImage
      src={image.src}
      alt={image.altText}
      layout={layout}
      objectFit={objectFit}
      sizes={generateSrcSetSizes(sizes)}
    />
  )
}
