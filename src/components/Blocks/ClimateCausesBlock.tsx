import { styled } from 'styles/stitches.config'

import { MediaImage, MediaImageProps } from '../Media/MediaImage'
import { Link, LinkProps } from '../Links/Link'
import { TextCaption } from '../Text/TextCaption'

import { useMedia } from 'hooks/useMedia'

import PopoverCloseIcon from '../../assets/popoverClose.svg'

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  StyledArrow,
} from '../Tools/Tooltip'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverClose,
} from 'components/Tools/Popover'
export interface ClimateCausesBlockProps {
  title: string
  content: string
  link: LinkProps
  leftImage: {
    mediaImage: MediaImageProps
    caption: string
  }
  rightImage: MediaImageProps
  className?: string
}

export const ClimateCausesBlock = ({
  title,
  content,
  link,
  leftImage,
  rightImage,
  className,
}: ClimateCausesBlockProps) => {
  const isTabletUp = useMedia('(min-width: 768px)')

  return (
    <ClimateCausesWrap className={className}>
      <Title>
        {title}
        {isTabletUp ? (
          <TooltipProvider delayDuration={200} skipDelayDuration={500}>
            <Tooltip>
              <TooltipTrigger fontColor="black" asChild>
                <sup>(2)</sup>
              </TooltipTrigger>
              <TooltipContent sideOffset={5} side="top" align="start">
                (2) According to Climateworks foundation, mitigating climate
                change receives less than 2% of charitable contributions
                globally. According to Charity Navigator, just 3% of US charity
                giving goes to environmental causes as a whole.
                <StyledArrow offset={8} width={18} height={7} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Popover>
            <PopoverTrigger fontColor="black" asChild>
              <sup>(2)</sup>
            </PopoverTrigger>
            <PopoverContent sideOffset={5} side="top" align="start">
              <p>CITATION</p>
              <p>
                (2) According to Climateworks foundation, mitigating climate
                change receives less than 2% of charitable contributions
                globally. According to Charity Navigator, just 3% of US charity
                giving goes to environmental causes as a whole.
              </p>
              <PopoverClose>
                <PopoverCloseIcon />
              </PopoverClose>
              <PopoverArrow offset={8} width={18} height={7} />
            </PopoverContent>
          </Popover>
        )}
      </Title>
      <TextContainer>
        {content}
        <LinkWrapper>
          <Link {...link} />
        </LinkWrapper>
      </TextContainer>

      <MediaContainer>
        <LeftImageContainer>
          {leftImage.mediaImage ? (
            <MediaImage {...leftImage.mediaImage} />
          ) : null}
        </LeftImageContainer>
        <CaptionWrap color="black">{leftImage.caption}</CaptionWrap>
        <RightImageContainer>
          {rightImage ? <MediaImage {...rightImage} /> : null}
        </RightImageContainer>
      </MediaContainer>
    </ClimateCausesWrap>
  )
}

const ClimateCausesWrap = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  columnGap: '$16',
  p: '$16',
  mt: '$120',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    columnGap: '$20',
    p: '$20',
  },
})

const Title = styled('h2', {
  display: 'block',
  fontFamily: '$inria',
  fontWeight: '$light',
  fontSize: '$XL',
  lineHeight: '$XL',
  gridColumn: 'span 8',
  letterSpacing: '$normal',

  '@tabletUp': {
    fontSize: '$XXXL',
    lineHeight: '$XXXL',
    gridColumn: 'span 7',
  },
})

const TextContainer = styled('p', {
  whiteSpace: 'pre-line',
  fontFamily: '$workSans',
  fontWeight: '$regular',
  fontSize: '$XS',
  lineHeight: '$XS',
  letterSpacing: '$small',
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '8 / span 4',
    gridRowStart: '2',
    mt: '$100',
  },
})

const LinkWrapper = styled('span', {
  display: 'block',
  mt: '$40',

  '@tabletUp': {
    mt: '$24',
  },
})

const MediaContainer = styled('figure', {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridColumn: 'span 8',
  columnGap: '$16',
  alignItems: 'end',
  m: '0',

  '@tabletUp': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto, 1fr)',
    gridColumn: 'span 12',
    gridRowStart: '3',
  },
})

const LeftImageContainer = styled('div', {
  display: 'block',
  gridColumn: 'span 8',
  mt: '$40',

  '@tabletUp': {
    gridColumn: 'span 5',
    mt: '$120',
  },
})

const CaptionWrap = styled(TextCaption, {
  gridColumn: 'span 7',
  mt: '$8',

  '@tabletUp': {
    gridColumn: 'span 4',
    gridRowStart: '2',
  },
})

const RightImageContainer = styled('div', {
  display: 'block',

  gridColumn: '3 / span 6',
  mt: '$40',

  '@tabletUp': {
    gridColumn: '6 / span 4',
  },
})
