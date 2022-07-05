import { useEffect, useState, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import clsx from 'clsx'

import { styled } from 'styles/stitches.config'

import { useReducedMotion } from 'hooks/useReducedMotion'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'

interface CarouselProps<Item> {
  slides: readonly Item[]
  children: (render: Item) => JSX.Element
  className?: string
}

export const Carousel = <Item,>({
  className,
  slides,
  children,
}: CarouselProps<Item>) => {
  /**
   * The active index of the carousel
   * indexed at 0
   */
  const [activeIndex, setActiveIndex] = useState(0)

  /**
   * Wrap this in useState so it's never recreated
   * And don't play on init because some people
   * prefer reduced motion
   */
  const [carouselAutoplay] = useState(() =>
    Autoplay({
      playOnInit: false,
      delay: 11000,
    })
  )
  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
    },
    [carouselAutoplay]
  )

  const reducedMotion = useReducedMotion()

  /**
   * Allow user preferences to dictate autoplay
   */
  useIsomorphicLayoutEffect(() => {
    if (reducedMotion) {
      carouselAutoplay.stop()
    } else {
      carouselAutoplay.play()
    }
  }, [reducedMotion])

  /**
   * When a carousel button has been clicked the relevant
   * slide should be focussed according to accessibility
   * guidelines. We therefore collect all the refs of the
   * slides so we can focus them as and when
   */
  const slideRefs = useRef<HTMLLIElement[]>([])

  const handleDotClick = (index: number) => () => {
    if (embla) {
      embla.scrollTo(index)
      setActiveIndex(index)

      if (slideRefs.current[index]) {
        slideRefs.current[index].focus()
      }
    }
  }

  /**
   * Standard embla handler to record the activeIndex
   */
  useEffect(() => {
    const handleSelect = () => {
      if (embla) {
        setActiveIndex(embla.selectedScrollSnap())
      }
    }

    if (embla) {
      embla.on('select', handleSelect)
    }

    return () => {
      if (embla) {
        embla.off('select', handleSelect)
      }
    }
  }, [embla])

  return (
    <CarouselWrap className={clsx('embla', className)}>
      <CarouselFooter>
        {/**
         * This is a live region that can read out
         * the active slide to screen readers
         */}
        <LiveRegion aria-live="polite" aria-atomic="true">{`Slide ${
          activeIndex + 1
        } of ${slides.length}`}</LiveRegion>
        {new Array(slides.length).fill(null).map((_, index) => (
          <Dot
            key={index}
            type="button"
            style={{ opacity: activeIndex === index ? 1 : 0.4 }}
            onClick={handleDotClick(index)}
          >
            {/**
             * Buttons require a label, although we don't
             * need to explicitly have the lable showing
             */}
            <VisuallyHiddenLabel>{`Image ${index + 1}`}</VisuallyHiddenLabel>
            {activeIndex === index ? (
              <VisuallyHiddenLabel>{`(current slide)`}</VisuallyHiddenLabel>
            ) : null}
          </Dot>
        ))}
      </CarouselFooter>
      <ViewportWrap className="embla__viewport" ref={viewportRef}>
        <SlidesContainer className="embla__container">
          {slides &&
            slides.map((item, i) => (
              <Slide
                ref={(ref) => (slideRefs.current[i] = ref!)}
                key={i}
                className="embla__slide"
                tabIndex={-1}
              >
                {children(item)}
              </Slide>
            ))}
        </SlidesContainer>
      </ViewportWrap>
    </CarouselWrap>
  )
}

const CarouselWrap = styled('div', {
  width: '100%',
  position: 'relative',
})

const ViewportWrap = styled('div', {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
})

const SlidesContainer = styled('ul', {
  display: 'flex',
  userSelect: 'none',
})

const Slide = styled('li', {
  position: 'relative',
  flex: '0 0 100%',
})

const CarouselFooter = styled('div', {
  display: 'flex',
  gap: '$8',
  mb: '$16',

  '@tabletUp': {
    mb: '$20',
  },
})

const LiveRegion = styled('div', {
  visuallyHidden: '',
})

const Dot = styled('button', {
  width: 6,
  height: 6,
  border: 'none',
  padding: 0,
  margin: 0,
  borderRadius: '50%',
  backgroundColor: '$grey',
  cursor: 'pointer',

  '& + &': {
    ml: '$xxxs',
  },
})

const VisuallyHiddenLabel = styled('span', {
  visuallyHidden: '',
})
