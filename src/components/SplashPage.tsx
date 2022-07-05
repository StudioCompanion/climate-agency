import { useRef, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import Image from 'next/image'

import { useDisableScroll } from 'hooks/useDisableScroll'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'
import { useWindowResize } from 'hooks/useWindowResize'

import { styled } from 'styles/stitches.config'

import Img1 from '../../public/images/splash/image-1.jpg'
import Img2 from '../../public/images/splash/image-2.jpg'
import Img3 from '../../public/images/splash/image-3.jpg'
import Img4 from '../../public/images/splash/image-4.jpg'

const IMAGES = [Img1, Img2, Img3, Img4]

const Logo = () => (
  <LogoSvg viewBox="0 0 109 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_152_75)">
      <path
        d="M2.77422 6.74954L3.60222 2.89769H2.53906L2.67485 2.28497H3.72808L4.02285 0.890625H4.77132L4.47659 2.28497H6.09612L5.97026 2.89769H4.34079L3.53595 6.68991C3.40016 7.36887 3.66182 7.55103 4.24804 7.55103C4.56599 7.55103 4.76801 7.5411 4.98329 7.5411L4.84753 8.14057C4.51964 8.16375 4.36065 8.16375 3.96321 8.16375C3.07891 8.16707 2.54901 7.83918 2.77422 6.74954Z"
        fill="currentColor"
      />
      <path
        d="M7.79407 0H8.54259L7.84045 3.27225C8.27101 2.63966 8.94999 2.14948 9.85748 2.14948C11.0365 2.14948 11.9076 2.96423 11.5896 4.47119L10.808 8.15081H10.0595L10.8179 4.57054C11.0663 3.39147 10.4569 2.80526 9.55939 2.80526C8.68834 2.80526 7.80404 3.47427 7.53245 4.76595L6.80711 8.15081H6.05859L7.79407 0Z"
        fill="currentColor"
      />
      <path
        d="M15.1293 8.27953C13.7581 8.27953 12.6387 7.33893 12.6387 5.78891C12.6387 3.72886 14.0893 2.15234 15.9242 2.15234C17.2953 2.15234 18.3254 3.01346 18.3254 4.47405C18.3254 4.69927 18.3022 4.92779 18.1995 5.38154H13.4302C13.4203 5.49414 13.4071 5.60675 13.4071 5.74254C13.4071 6.88518 14.1192 7.63369 15.1956 7.63369C16.0434 7.63369 16.7124 7.22631 17.1562 6.4778H17.9246C17.3947 7.64694 16.3547 8.27953 15.1293 8.27953ZM13.5329 4.76881H17.5404C17.5636 4.64296 17.5735 4.5436 17.5735 4.44093C17.5735 3.46721 16.8714 2.78824 15.8513 2.78824C14.7915 2.78824 13.8277 3.60299 13.5329 4.76881Z"
        fill="currentColor"
      />
      <path
        d="M0.488281 21.8695C0.488281 15.0269 5.41319 10.8936 10.8581 10.8936C15.8128 10.8936 19.6448 13.7816 20.3436 18.1899H16.8462C16.1176 15.6661 13.8985 14.0234 10.8548 14.0234C7.1454 14.0234 4.19438 17.0936 4.19438 21.8695C4.19438 26.6421 7.1454 29.8646 10.8548 29.8646C13.8952 29.8646 16.0248 28.2848 16.876 25.6982H20.3735C19.5223 30.229 15.8128 32.9945 10.8581 32.9945C5.29396 33.0011 0.488281 28.7717 0.488281 21.8695Z"
        fill="currentColor"
      />
      <path
        d="M23.6543 10.7412H26.9398V32.6335H23.6543V10.7412Z"
        fill="currentColor"
      />
      <path
        d="M31.2852 10.7412H34.6303V14.2089H31.2852V10.7412ZM31.3183 16.885H34.6038V32.6368H31.3183V16.885Z"
        fill="currentColor"
      />
      <path
        d="M42.2607 32.6327H38.9785V16.8809H42.2011V18.7654C43.1119 17.3347 44.695 16.5166 46.7915 16.5166C48.6462 16.5166 50.501 17.3082 51.5045 19.1629C52.5676 17.4307 54.4223 16.5166 56.5818 16.5166C59.652 16.5166 62.3281 18.1594 62.3281 22.5974V32.6327H59.0426V23.0545C59.0426 20.5903 57.6449 19.3749 55.7902 19.3749C53.9653 19.3749 52.2927 20.8652 52.2927 23.7235V32.6327H49.0072V23.0545C49.0072 20.5903 47.6096 19.3749 45.7549 19.3749C43.93 19.3749 42.2574 20.8354 42.2574 23.7235V32.6327H42.2607Z"
        fill="currentColor"
      />
      <path
        d="M76.346 30.5667C75.3425 32.0869 73.6699 32.9679 71.2985 32.9679C68.3807 32.9679 65.582 31.3549 65.582 28.1655C65.582 24.7309 68.4403 23.6049 72.577 22.9358L76.134 22.3595V22.2072C76.134 19.9882 74.9185 19.1668 72.8816 19.1668C70.9044 19.1668 69.6591 20.1107 69.2948 21.8727H66.102C66.5292 18.5872 69.3842 16.5205 73.0042 16.5205C76.654 16.5205 79.3897 17.9811 79.3599 22.2966L79.3003 29.4737C79.3003 29.9606 79.3301 30.719 79.4527 32.6367H76.4122L76.346 30.5667ZM71.9079 30.2951C74.2495 30.2951 76.134 28.8676 76.134 26.069V24.9429C70.964 25.5821 68.8377 26.1286 68.8377 28.0131C68.8377 29.4737 70.1128 30.2951 71.9079 30.2951Z"
        fill="currentColor"
      />
      <path
        d="M84.4623 28.4369V19.5276H81.7266V16.8814H84.4623V13.1123H87.7146V16.8814H91.4837V19.5276H87.7146V27.9798C87.7146 29.6822 88.2909 29.9869 89.5097 29.9869H91.487V32.6001C90.3311 32.6597 89.874 32.6597 88.6585 32.6597C86.1646 32.6663 84.4623 31.9045 84.4623 28.4369Z"
        fill="currentColor"
      />
      <path
        d="M101.579 32.9679C97.2006 32.9679 93.5508 29.8347 93.5508 24.6382C93.5508 19.6503 97.29 16.5205 101.364 16.5205C105.438 16.5205 109.058 19.3489 109.058 25.0025V25.7643H96.9257C97.2304 28.5 99.2673 30.1725 101.668 30.1725C103.248 30.1725 104.831 29.6559 105.62 28.1357H108.905C107.965 31.5106 104.649 32.9679 101.579 32.9679ZM96.8959 23.1478H105.623C105.441 20.8062 103.676 19.286 101.304 19.286C99.0553 19.286 97.1708 20.7466 96.8959 23.1478Z"
        fill="currentColor"
      />
      <path
        d="M15.0497 48.6264H5.59398L3.5571 53.9157H0L8.48202 32.6328H12.3438L20.8258 53.9157H17.0866L15.0497 48.6264ZM13.9269 45.6158L10.34 36.2197L6.72334 45.6158H13.9269Z"
        fill="currentColor"
      />
      <path
        d="M30.1889 60.0001C25.8402 60.0001 23.1641 57.8407 22.6475 54.7108H25.8998C26.3867 56.3834 27.7844 57.2942 30.1856 57.2942C32.5868 57.2942 34.1699 56.0489 34.1699 53.4622V50.9981C33.3485 52.4256 31.6163 53.4291 29.3046 53.4291C25.413 53.4291 22.25 50.6007 22.25 45.5532C22.25 40.6581 25.5653 37.7998 29.3642 37.7998C31.5534 37.7998 33.2557 38.7735 34.1699 40.1712V38.1641H37.4223V53.4291C37.4289 57.7512 34.203 60.0001 30.1889 60.0001ZM34.203 45.5565C34.203 42.4234 32.2886 40.6018 29.9471 40.6018C27.5161 40.6018 25.6614 42.5161 25.6614 45.5565C25.6614 48.7195 27.5161 50.6636 29.9471 50.6636C32.3185 50.6636 34.203 48.6896 34.203 45.5565Z"
        fill="currentColor"
      />
      <path
        d="M48.7997 54.254C44.4213 54.254 40.7715 51.1208 40.7715 45.9243C40.7715 40.9365 44.5107 37.8066 48.5845 37.8066C52.6582 37.8066 56.2782 40.6351 56.2782 46.2886V47.0504H44.1464C44.4511 49.7861 46.488 51.4587 48.8892 51.4587C50.469 51.4587 52.0521 50.942 52.8437 49.4218H56.1259C55.182 52.7934 51.87 54.254 48.7997 54.254ZM44.1166 44.4306H52.8437C52.6615 42.089 50.8963 40.5688 48.5249 40.5688C46.2727 40.5688 44.3882 42.0294 44.1166 44.4306Z"
        fill="currentColor"
      />
      <path
        d="M62.8754 53.9189H59.5898V38.1671H62.8422V40.1145C63.816 38.6539 65.4885 37.8027 67.5552 37.8027C71.0527 37.8027 73.2419 40.0218 73.2419 44.0955V53.9156H69.9564V44.4896C69.9564 42.1481 68.678 40.6577 66.5219 40.6577C64.5744 40.6577 62.872 42.1481 62.872 45.2481V53.9189H62.8754Z"
        fill="currentColor"
      />
      <path
        d="M76.3711 45.9204C76.3711 41.1777 79.8984 37.8027 84.247 37.8027C87.8637 37.8027 91.0896 40.1741 91.4539 43.7014H88.2015C87.7445 41.8169 86.0719 40.6908 84.2172 40.6908C81.5709 40.6908 79.746 42.9098 79.746 45.9204C79.746 49.0536 81.6305 51.362 84.2172 51.362C86.0421 51.362 87.6517 50.3287 88.2015 48.3216H91.4539C90.9372 52.0609 87.6219 54.2501 84.1874 54.2501C79.8089 54.2534 76.3711 50.9679 76.3711 45.9204Z"
        fill="currentColor"
      />
      <path
        d="M99.1742 59.6949H95.7993L98.6575 52.7927L92.3945 38.167H95.9218L100.27 48.9011L104.314 38.167H107.689L99.1742 59.6949Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_152_75">
        <rect width="109" height="60" fill="white" />
      </clipPath>
    </defs>
  </LogoSvg>
)

const LogoSvg = styled('svg', {
  gridColumn: 'span 8',
  alignSelf: 'center',
  mx: '$16',

  '@tabletUp': {
    width: '100%',
    mx: 0,
    gridColumn: '4 / span 6',
  },
})

export const SplashPage = () => {
  const [noScroll, setNoScroll] = useState(true)
  const imageRefs = useRef<HTMLDivElement[]>([])

  const activeImageIndex = useRef(IMAGES.length - 1)

  const { width, height } = useWindowResize()

  useDisableScroll(noScroll)

  const [greenStyles, greenApi] = useSpring(
    () => ({
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    }),
    []
  )

  const [containerStyles, containerApi] = useSpring(
    () => ({
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    }),
    []
  )

  useIsomorphicLayoutEffect(() => {
    const interval = setInterval(() => {
      if (activeImageIndex.current > 0) {
        imageRefs.current[activeImageIndex.current].style.visibility = 'hidden'

        activeImageIndex.current -= 1
      } else {
        /**
         * This could probably be done with
         * the useChain hook.
         */
        greenApi.start({
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          onRest: () => {
            containerApi.start({
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
              onRest: () => {
                setNoScroll(false)
              },
            })
          },
          onStart: () => {
            clearInterval(interval)
          },
        })
      }
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Splash
      style={{
        width: width === 0 ? '100vw' : width,
        height: height === 0 ? '100vh' : height,
        ...containerStyles,
      }}
    >
      {IMAGES.map((img, index) => (
        <ImageContainer
          ref={(ref) => (imageRefs.current[IMAGES.length - 1 - index] = ref!)}
          key={img.src}
          style={{ zIndex: IMAGES.length - index }}
        >
          <Image
            src={img.src}
            blurDataURL={img.blurDataURL}
            height={img.height}
            width={img.width}
            placeholder="blur"
            loading="eager"
            priority
            objectFit="cover"
            layout="fill"
          />
        </ImageContainer>
      ))}
      <LayerContainer>
        <GreenLayer style={greenStyles}>
          <Logo />
        </GreenLayer>
        <ClearLayer>
          <Logo />
        </ClearLayer>
      </LayerContainer>
    </Splash>
  )
}

const Splash = styled(animated.div, {
  background: '$white',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  inset: 0,
  zIndex: '$4',
})

const ImageContainer = styled('div', {
  position: 'absolute',
  inset: 0,
})

const LayerContainer = styled('div', {
  zIndex: IMAGES.length + 1,
  width: '100%',
  height: '100%',
  position: 'relative',
})

const GreenLayer = styled(animated.div, {
  width: '100%',
  height: '100%',
  position: 'absolute',

  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  px: '$16',
  color: '$black',
  backgroundColor: '$green',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})

const ClearLayer = styled('div', {
  width: '100%',
  height: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(auto, 1fr)',
  columnGap: '$16',
  px: '$16',
  color: '$green',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    px: '$20',
  },
})
