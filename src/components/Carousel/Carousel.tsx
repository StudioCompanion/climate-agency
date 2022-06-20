import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { styled } from 'styles/stitches.config'

interface CarouselProps {
  //   options?: EmblaOptionsType
  className?: string
}

export const Carousel = ({ className }: CarouselProps) => {
  const options = { delay: 2000 }
  const autoplayRoot = (emblaRoot: HTMLElement) => emblaRoot.parentElement
  const autoplay = Autoplay(options, autoplayRoot)

  const [viewportRef, embla] = useEmblaCarousel({ loop: false }, [autoplay])

  return (
    <CarouselWrap className={className}>
      <ViewportWrap ref={viewportRef}>
        <ContainerWrap>
          {/* {slides &&
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
            ))} */}
        </ContainerWrap>
      </ViewportWrap>
    </CarouselWrap>
  )
}

const CarouselWrap = styled('div', {
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

const DotsWrap = styled('div', {
  overflow: 'hidden',
})
