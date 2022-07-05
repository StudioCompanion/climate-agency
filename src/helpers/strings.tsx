import { ReactNode } from 'react'

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  StyledArrow,
} from '../components/Tools/Tooltip'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverClose,
} from 'components/Tools/Popover'

import PopoverCloseIcon from 'assets/popoverClose.svg'
import { TooltipContentProps } from '@radix-ui/react-tooltip'

interface ComponentProps {
  tooltipProps?: {
    contentProps?: TooltipContentProps
  }
}

export const parseStringAndInsertFootnoteBetweenSupTags = (
  str: string,
  footnoteContent: string,
  props: ComponentProps = {}
): ReactNode[] | string => {
  const { tooltipProps } = props

  const { contentProps } = tooltipProps ?? {}

  const regex = /<sup>(.*?)<\/sup>/g
  const matches = str.match(regex)
  if (matches) {
    const splits = str.split(regex) as ReactNode[]

    matches.forEach((match) => {
      const sanitizedMatch = sanitizeString(matches[0])

      const index = splits.indexOf(sanitizedMatch)

      const component = (
        <>
          <TooltipProvider
            key={match}
            delayDuration={200}
            skipDelayDuration={500}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <sup>{sanitizedMatch}</sup>
              </TooltipTrigger>
              <TooltipContent
                alignOffset={contentProps?.alignOffset}
                side="top"
                align="start"
              >
                {`${sanitizedMatch} ${footnoteContent}`}
                <StyledArrow offset={8} width={18} height={7} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Popover>
            <PopoverTrigger asChild>
              <sup>{sanitizedMatch}</sup>
            </PopoverTrigger>
            <PopoverContent sideOffset={5} side="top" align="center">
              <p>CITATION</p>
              <p>{`${sanitizedMatch} ${footnoteContent}`}</p>
              <PopoverClose>
                <PopoverCloseIcon />
              </PopoverClose>
              <PopoverArrow offset={8} width={18} height={7} />
            </PopoverContent>
          </Popover>
        </>
      )

      splits.splice(index, 1, component)
    })

    return splits
  }

  return str
}

const sanitizeString = (str: string) => {
  return str.replace(/<\/?[^>]+(>|$)/g, '')
}
