import { Carousel } from './Carousel'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'
import { TextTestimonial } from 'components/Text/TextTestimonial'

export default {
  title: 'Carousel/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

export const Default: ComponentStory<typeof Carousel> = () => (
  <Carousel {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof Carousel> = {
  default: {
    children: (slide: any) => <TextTestimonial {...slide} />,
    slides: [
      {
        key: 'Neri Oxman',
        content: `“The Climate Agency is changing the world by impacting the way people think. Sophie and Lisa were crucial to helping us express ourselves better.”`,
        signature: `Neri Oxman, Director of Research`,
        organisation: `Direct Air Capture Coalition`,
      },
      {
        key: 'Joe Smith',
        content: `“This is the 2nd testimonial”`,
        signature: `Joe Smith, Director of Research`,
        organisation: `Testing`,
      },
      {
        key: 'Mary Jones',
        content: `“This is the 3rd testimonial”`,
        signature: `Mary Jones, Director of Research`,
        organisation: `Testing 2`,
      },
    ],
  },
}
