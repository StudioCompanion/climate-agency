import { TestimonialBlock } from './TestimonialBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Testimonial Block',
  component: TestimonialBlock,
} as ComponentMeta<typeof TestimonialBlock>

export const Default: ComponentStory<typeof TestimonialBlock> = () => (
  <TestimonialBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof TestimonialBlock> = {
  default: {
    content: `“The Climate Agency is changing the world by impacting the way people think. Sophie and Lisa were crucial to helping us express ourselves better.”`,
    signature: `Neri Oxman, Director of Research`,
    organisation: `Direct Air Capture Coalition`,
  },
}
