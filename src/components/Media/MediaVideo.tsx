import { useRef, useEffect, useState, CSSProperties } from 'react'

import { styled } from 'styles/stitches.config'

import { useReducedMotion } from 'hooks/useReducedMotion'

import { useIntersection } from 'hooks/useIntersectionObserver'

export type VideoPlayerProps = {
  src: string
  aspectRatio: CSSProperties['aspectRatio'] | number
}

export const MediaVideo = ({ src, aspectRatio }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null!)
  const [isPaused, setIsPaused] = useState(false)

  const intersection = useIntersection(videoRef)

  const reduceMotion = useReducedMotion()

  /**
   * Autoplay effect handling
   */
  useEffect(() => {
    /**
     * If there is reduced motion so we make sure it doesnt autoplay
     */
    if (reduceMotion || !intersection?.isIntersecting) {
      videoRef.current.pause()
    } else if (intersection?.isIntersecting) {
      /**
       * Otherwise outplay in the frame
       */
      videoRef.current.play().catch((e) => {
        console.error('Cant autoplay because:', e)
      })
    }
  }, [reduceMotion, intersection])

  const handleClick = () => {
    const video = videoRef.current

    if (isPaused) {
      /**
       * Play is async so catch just incase
       * and return if its paused or not
       * to keep ui in sync with video element
       */
      video
        .play()
        .then(() => {
          setIsPaused(false)
        })
        .catch((e) => {
          console.error('Failed to play because:', e)
        })
    } else {
      video.pause()
      setIsPaused(true)
    }
  }

  return (
    <VideoContainer
      css={{
        aspectRatio,
      }}
    >
      <Video
        ref={videoRef}
        preload="auto"
        src={src}
        loop
        muted
        playsInline
        id={src}
      />
      <VideoButton aria-controls={src} onClick={handleClick}>
        <Control>{isPaused ? 'Play' : 'Pause'}</Control>
        <VideoButtonIcon>
          {isPaused ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0813 12.0703L5.99995 18.8556L6.16442 5.00015L18.0813 12.0703Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="6" width="4" height="12" fill="black" />
              <rect x="14" y="6" width="4" height="12" fill="black" />
            </svg>
          )}
        </VideoButtonIcon>
      </VideoButton>
    </VideoContainer>
  )
}

const VideoContainer = styled('div', {
  position: 'relative',
})

const Video = styled('video', {
  maxWidth: '100%',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  position: 'relative',
})

const VideoButtonIcon = styled('span', {
  width: 24,
  height: 24,
  backgroundColor: '$green',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& > svg': {
    width: 24,
    height: 24,
  },

  '@tabletUp': {
    width: 40,
    height: 40,

    '& > svg': {
      width: 32,
      height: 32,
    },
  },
})

const VideoButton = styled('button', {
  width: 40,
  height: 40,
  background: 'transparent',
  border: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'absolute',
  bottom: 8,
  right: 8,

  '@tabletUp': {
    bottom: 16,
    right: 16,
  },
})

const Control = styled('span', {
  visuallyHidden: '',
})
