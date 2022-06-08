import { HomepageOpeningBlock } from './HomepageOpeningBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/HomepageOpeningBlock',
  component: HomepageOpeningBlock,
} as ComponentMeta<typeof HomepageOpeningBlock>

export const Default: ComponentStory<typeof HomepageOpeningBlock> = () => (
  <HomepageOpeningBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof HomepageOpeningBlock> = {
  default: {
    mediaImage: {
      image: {
        src: '/assets/hero.png',
        altText: 'Hero image',
        width: 500,
        height: 500,
      },
      layout: 'fill',
      objectFit: 'cover',
      sizes: '100vw',
    },
    content: `Truth is, we’re going to need some big ideas to keep our world habitable. These ideas need profile and they need support, with urgency. And we aim to get them just that. 

  We are a marketing strategy consultancy, non profit, and dedicated to help climate projects scale up.`,
  },
}
