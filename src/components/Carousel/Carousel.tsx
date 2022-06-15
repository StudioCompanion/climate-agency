import React, { useState, useEffect, useCallback } from 'react'

import { styled } from 'styles/stitches.config'

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from 'embla-carousel-autoplay'

import { Dot } from './CarouselButtons'

import {
  TestimonialBlock,
  TestimonialBlockProps,
} from '../Blocks/TestimonialBlock'

interface CarouselProps {
  //   options?: EmblaOptionsType
  slides: TestimonialBlockProps[]
  className?: string
}

export const Carousel = ({ slides, className }: CarouselProps) => {
  const options = { delay: 2000 }
  const autoplayRoot = (emblaRoot: HTMLElement) => emblaRoot.parentElement
  const autoplay = Autoplay(options, autoplayRoot)

  const [viewportRef, embla] = useEmblaCarousel({ loop: false }, [autoplay])

  const [firstDotEnabled, setFirstDotEnabled] = useState(false)
  const [middleDotEnabled, setMiddleDotEnabled] = useState(false)
  const [lastDotEnabled, setLastDotEnabled] = useState(false)

  const onSelect = useCallback(() => {
    if (!embla) return
    slides.map((item, idx) => {
      if (idx % 3 === 0) {
        setFirstDotEnabled(false)
        setMiddleDotEnabled(true)
        setLastDotEnabled(true)
      }
      if (idx % 3 === 1) {
        setFirstDotEnabled(true)
        setMiddleDotEnabled(false)
        setLastDotEnabled(true)
      }
      if (idx % 3 === 2) {
        setFirstDotEnabled(true)
        setMiddleDotEnabled(true)
        setLastDotEnabled(false)
      }
    })
  }, [embla, slides])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <CarouselWrap className={className}>
      <ViewportWrap ref={viewportRef}>
        <ContainerWrap>
          {slides &&
            slides.map((item, idx) => (
              <SlideWrap key={idx}>
                <SlideInnerWrap>
                  <TestimonialBlock
                    content={item.content}
                    signature={item.signature}
                    organisation={item.organisation}
                  />
                </SlideInnerWrap>
              </SlideWrap>
            ))}
        </ContainerWrap>
      </ViewportWrap>
      <Dot
        onClick={() => embla && embla.scrollTo(0)}
        enabled={firstDotEnabled}
      />
      <Dot
        onClick={() => embla && embla.scrollTo(1)}
        enabled={middleDotEnabled}
      />
      <Dot
        onClick={() => {
          embla && embla.scrollTo(2)
        }}
        enabled={lastDotEnabled}
      />
    </CarouselWrap>
  )
}

const CarouselWrap = styled('div', {
  //   position: 'relative',
  backgroundColor: 'transparent',
  p: '20px',
  mx: 'auto',
})

const ViewportWrap = styled('div', {
  overflow: 'hidden',
})

const ContainerWrap = styled('div', {
  display: 'flex',
  userSelect: 'none',
  ml: '-10px',
})

const SlideWrap = styled('div', {
  position: 'relative',
  minWidth: '100%',
  pl: '10px',
})

const SlideInnerWrap = styled('div', {
  position: 'relative',
  overflow: 'hidden',
})
