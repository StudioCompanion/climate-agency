import { styled } from 'styles/stitches.config'
import { keyframes } from '@stitches/react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const StyledTrigger = styled(TooltipPrimitive.Trigger, {
  display: 'none',
  backgroundColor: 'transparent',
  fontSize: '0.6em',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 1,
  color: 'inherit',
  boxShadow: 'none',
  border: 'none',
  cursor: 'pointer',
  p: '0',

  '@desktopUp': {
    display: 'inline-block',
  },
})

const StyledContent = styled(TooltipPrimitive.Content, {
  maxWidth: '366px',
  padding: '10px 15px',
  borderRadius: '2px',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  color: '$black',
  backgroundColor: '$white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

export const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: 'white',
})

// Exports
export const TooltipProvider = TooltipPrimitive.Provider
export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = StyledTrigger
export const TooltipContent = StyledContent
