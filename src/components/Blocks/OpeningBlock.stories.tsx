import { OpeningBlock } from './OpeningBlock'

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
          src: '/images/forest_on_fire.png',
          altText: 'Hero image',
          width: 653,
          height: 636,
        },
        layout: 'responsive',
        objectFit: 'cover',
      },
    },
    content: `Truth is, we’re going to need some big ideas to keep our world habitable. These ideas need profile and they need support, with urgency. And we aim to get them just that.\n
    We are a marketing strategy consultancy, non profit, and dedicated to help climate projects scale up.`,
    layout: `default`,
  },
  large: {
    imageSection: {
      mediaImage: {
        image: {
          src: '/images/people_on_mountain.png',
          altText: 'People sitting on a mountain',
          width: 765,
          height: 636,
        },
        layout: 'responsive',
        objectFit: 'cover',
      },
    },
    content: `We'd like you to feel as though you have a CMO at your side, working with you to stand out, persuade, and scale.`,
    layout: `large`,
  },
}
