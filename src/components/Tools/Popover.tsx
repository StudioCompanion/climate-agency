import { styled } from 'styles/stitches.config'
import { keyframes } from '@stitches/react'

import * as PopoverPrimitive from '@radix-ui/react-popover'

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

const StyledTrigger = styled(PopoverPrimitive.Trigger, {
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  fontSize: '0.6em',
  lineHeight: 'inherit',
  color: 'inherit',
  boxShadow: 'none',
  border: 'none',
  cursor: 'pointer',
  p: '0',
  '@tabletUp': {
    fontSize: '$L',
    lineHeight: '$L',
  },
  '@desktopUp': {
    display: 'none',
  },
})

const StyledContent = styled(PopoverPrimitive.Content, {
  maxWidth: '343px',
  padding: '10px 15px',
  borderRadius: '2px',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XXS',
  lineHeight: '$XXS',
  color: '$black',
  backgroundColor: '$white',
  outline: 'none',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  //   '@tabletUp': {
  //     ml: '$100',
  //   },
})

const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: 'white',
})

const StyledClose = styled(PopoverPrimitive.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 5,
  right: 5,
})

// Exports
export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = StyledTrigger
export const PopoverContent = StyledContent
export const PopoverArrow = StyledArrow
export const PopoverClose = StyledClose
