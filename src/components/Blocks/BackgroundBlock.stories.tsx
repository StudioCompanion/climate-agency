import { BackgroundBlock } from './BackgroundBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Background Block',
  component: BackgroundBlock,
} as ComponentMeta<typeof BackgroundBlock>

export const Default: ComponentStory<typeof BackgroundBlock> = () => (
  <BackgroundBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof BackgroundBlock> = {
  default: {
    header: `Our background`,
    content: `We are a team of experts in marketing and communications, with prestigious careers leading global consumer brands and charities.`,
    mediaImage: {
      image: {
        src: '/images/usgs-uGrT85dVK9U-unsplash.jpg',
        altText: 'Satellite capture',
        width: 343,
        height: 348,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    caption: `Satellite capture from United States Geological Survey, who provide reliable scientific information to describe and understand the Earth.`,
  },
}
