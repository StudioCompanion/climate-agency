import { TestimonialsBlock } from './TestimonialsBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Testimonials Block',
  component: TestimonialsBlock,
} as ComponentMeta<typeof TestimonialsBlock>

export const Default: ComponentStory<typeof TestimonialsBlock> = () => (
  <TestimonialsBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof TestimonialsBlock> = {
  default: {
    icon: {
      image: {
        src: '/icons/circle.svg',
        altText: '',
        width: 27,
        height: 27,
      },
      layout: 'intrinsic',
      objectFit: 'cover',
    },
    title: `We have been very fortunate to work with many great organisations.`,
    mediaImage: {
      image: {
        src: '/images/organisations.png',
        altText: 'Organisations Logos',
        width: 1328,
        height: 61,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    testimonials: [
      {
        content: `“The Climate Agency is changing the world by impacting the way people think. Sophie and Lisa were crucial to helping us express ourselves better.”`,
        signature: `Neri Oxman, Director of Research`,
        organisation: `Direct Air Capture Coalition`,
      },
      {
        content: `“This is a test testimonial”`,
        signature: `Joe Smith, Director of Research`,
        organisation: `Testing`,
      },
      {
        content: `“This is another test testimonial”`,
        signature: `Mary Jones, Director of Research`,
        organisation: `Testing 2`,
      },
    ],
  },
}
