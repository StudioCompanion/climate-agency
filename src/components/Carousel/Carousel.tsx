import React, { useState, useEffect, useCallback } from 'react'

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from 'embla-carousel-autoplay'

import { PrevButton, NextButton } from './CarouselButtons'

import {
  TestimonialBlock,
  TestimonialBlockProps,
} from '../Blocks/TestimonialBlock'

interface CarouselProps {
  options?: EmblaOptionsType
  slides: TestimonialBlockProps[]
}

export const Carousel = ({ options, slides }: CarouselProps) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides &&
            slides.map((item, idx) => (
              <TestimonialBlock
                key={idx}
                content={item.content}
                signature={item.signature}
                organisation={item.organisation}
              />
            ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  )
}
