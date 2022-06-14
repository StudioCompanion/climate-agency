import { Carousel } from './Carousel'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Carousel/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

export const Default: ComponentStory<typeof Carousel> = () => (
  <Carousel {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof Carousel> = {
  default: {
    slides: [
      {
        content: `“The Climate Agency is changing the world by impacting the way people think. Sophie and Lisa were crucial to helping us express ourselves better.”`,
        signature: `Neri Oxman, Director of Research`,
        organisation: `Direct Air Capture Coalition`,
      },
      {
        content: `“This is a test testimonial”`,
        signature: `Neri Oxman, Director of Research`,
        organisation: `Direct Air Capture Coalition`,
      },
    ],
  },
}
