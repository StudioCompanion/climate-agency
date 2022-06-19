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
        content: `“This is the 2nd testimonial”`,
        signature: `Joe Smith, Director of Research`,
        organisation: `Testing`,
      },
      {
        content: `“This is the 3rd testimonial”`,
        signature: `Mary Jones, Director of Research`,
        organisation: `Testing 2`,
      },
      {
        content: `“This is the 4th testimonial”`,
        signature: `Joe Smith, Director of Research`,
        organisation: `Testing`,
      },
      {
        content: `“This is the 5th testimonial”`,
        signature: `Mary Jones, Director of Research`,
        organisation: `Testing 2`,
      },
    ],
  },
}
