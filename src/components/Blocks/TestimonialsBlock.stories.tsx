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
    title: `We have been very fortunate to work with many great organisations.`,
    logos: [
      {
        src: '/images/logos/ov.png',
        altText: 'Ocean Visions logo',
        width: 213,
        height: 49,
      },
      {
        src: '/images/logos/un.png',
        altText: 'United Nations logo',
        width: 72,
        height: 61,
      },
      {
        src: '/images/logos/notpla.png',
        altText: 'Notpla logo',
        width: 200,
        height: 47,
      },
      {
        src: '/images/logos/terra.png',
        altText: 'Terra Carta logo',
        width: 129,
        height: 59,
      },
      {
        src: '/images/logos/dacc.png',
        altText: 'Direct Air Capture Coallition logo',
        width: 207,
        height: 55,
      },
      {
        src: '/images/logos/space10.png',
        altText: 'Space 10 logo',
        width: 195,
        height: 37,
      },
    ],
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
