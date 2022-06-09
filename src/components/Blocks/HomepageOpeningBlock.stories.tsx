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
        src: '/images/Green_Accent_Image_01.png',
        altText: 'Hero image',
        width: 653,
        height: 636,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    paragraph1: `Truth is, we’re going to need some big ideas to keep our world habitable. These ideas need profile and they need support, with urgency. And we aim to get them just that.`,
    paragraph2: `We are a marketing strategy consultancy, non profit, and dedicated to help climate projects scale up.`,
  },
}
