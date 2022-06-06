import * as Stitches from '@stitches/react'

export interface AspectRatioProps {
  w: number
  h?: number
}

export enum Widths {
  SmallTablet = 400,
  Tablet = 768,
  Desktop = 1024,
  LargeDesktop = 1440,
}

const { styled, globalCss, getCssText, config, keyframes, reset } =
  Stitches.createStitches({
    theme: {
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        max: '999',
      },
    },
    media: {
      smallTabletUp: `(min-width: ${Widths.SmallTablet}px)`,
      tabletUp: `(min-width: ${Widths.Tablet}px)`,
      desktopUp: `(min-width: ${Widths.Desktop}px)`,
      largeDesktopUp: `(min-width: ${Widths.LargeDesktop}px)`,
      motion: '(prefers-reduced-motion: true)',
    },
    utils: {
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
        borderRadius: value,
        // Safari requires this to be explicitly set on videos
        video: {
          borderRadius: value,
        },
      }),
      debug: (value: Stitches.PropertyValue<'color'>) => ({
        border: `solid 1px ${value}`,
      }),
      // require unused variable to allow custom CSS type to be used
      visuallyHidden: (_val: string) => ({
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
      }),
      /**
       *  If h is omitted, w is expected to be the percentage value
       * for the aspect ratio
       */
      aspect: ({ w = 0, h = 0 }: AspectRatioProps) => ({
        overflow: 'hidden',
        position: 'relative',

        '&:before': {
          display: 'block',
          content: '',
          width: '100%',
          paddingTop: `${(h ? (h / w) * 100 : w).toFixed(2)}%`,
        },

        '& > *': {
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        },
      }),

      hover: (val: object) => ({
        '@media (hover:hover)': {
          '&:hover': {
            ...val,
          },
        },
      }),
    },
  })

type StitchesConfig = typeof config
type CSS = Stitches.CSS<StitchesConfig>
type ScaleValue<TValue> = Stitches.ScaleValue<TValue, StitchesConfig>

export type { StitchesConfig, CSS, ScaleValue }

export { styled, getCssText, globalCss, keyframes, reset }
