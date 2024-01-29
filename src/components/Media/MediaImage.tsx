import NextImage from 'next/image'
import { useState } from 'react'

import { styled } from 'styles/stitches.config'

import { Link, LinkProps } from 'components/Links/Link'


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
  link?: LinkProps
}

export const MediaImage = ({
  image,
  layout = 'intrinsic',
  objectFit = 'cover',
  sizes = '100vw',
  priority,
  link
}: MediaImageProps) => {
  const [loaded, setLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setLoaded(true)
  }

  return (
    <ImgContainer>
    {link ? (
      <Link {...link} />
    ) : null}
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
  backgroundColor: 'transparent',
  position: 'relative',
  '& a': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
    fontSize: 0
  }
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
