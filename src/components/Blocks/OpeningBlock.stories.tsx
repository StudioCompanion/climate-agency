import { OpeningBlock } from './OpeningBlock'
import { Link } from 'components/Links/Link'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Opening Blocks',
  component: OpeningBlock,
} as ComponentMeta<typeof OpeningBlock>

export const Default: ComponentStory<typeof OpeningBlock> = () => (
  <OpeningBlock {...fixtures.default} />
)

export const Large: ComponentStory<typeof OpeningBlock> = () => (
  <OpeningBlock {...fixtures.large} />
)

const fixtures: StoryFixtures<typeof OpeningBlock> = {
  default: {
    imageSection: {
      mediaImage: {
        image: {
          src: '/images/earth_nasa.jpg',
          altText: 'Hero image',
          width: 1306,
          height: 1272,
        },
        layout: 'responsive',
        objectFit: 'cover',
      },
      innerCaption: `NASA/Goddard Space Flight Center/Reto Stöckli`,
      caption: (
        <Link href="https://www.nasa.gov/" isExternal color="captionBlack">
          Nasa
        </Link>
      ),
    },
    content: `Truth is, we’re going to need some big ideas to keep our world habitable. These ideas need profile and they need support, with urgency. And we aim to get them just that.\n
    We are a marketing strategy consultancy, non profit, and dedicated to help climate projects scale up.`,
    layout: `default`,
  },
  large: {
    imageSection: {
      mediaImage: {
        image: {
          src: '/images/wright_brothers_glider.jpg',
          altText: 'Vintage photo of a Wright Brothers Glider',
          width: 765,
          height: 636,
        },
        layout: 'responsive',
        objectFit: 'cover',
      },
      innerCaption: `As two unknown bicycle makers from Ohio, the Wright brothers were ignored by journalists and scorned by many. But they approached "The Flying Problem" in a different way, focusing on control rather than power.  It is this unique approach that ensured their place in history.`,
      // caption: (
      //   <Link href="https://www.nasa.gov/" isExternal color="captionBlack">
      //     Nasa
      //   </Link>
      // ),
    },
    content: `We'd like you to feel as though you have a CMO at your side, working with you to stand out, persuade, and scale.`,
    layout: `large`,
  },
}
