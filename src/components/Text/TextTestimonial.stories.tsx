import { TextTestimonial } from './TextTestimonial'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Text/Testimonial',
  component: TextTestimonial,
} as ComponentMeta<typeof TextTestimonial>

export const Default: ComponentStory<typeof TextTestimonial> = () => (
  <TextTestimonial {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof TextTestimonial> = {
  default: {
    content: `“The Climate Agency is changing the world by impacting the way people think. Sophie and Lisa were crucial to helping us express ourselves better.”`,
    signature: `Neri Oxman, Director of Research`,
    organisation: `Direct Air Capture Coalition`,
  },
}
