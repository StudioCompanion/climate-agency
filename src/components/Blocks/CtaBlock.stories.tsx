import { CtaBlock } from './CtaBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/CTA Block',
  component: CtaBlock,
} as ComponentMeta<typeof CtaBlock>

export const Default: ComponentStory<typeof CtaBlock> = () => (
  <CtaBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof CtaBlock> = {
  default: {
    content: `Together, we can crack communication around climate solutions. \n
    
    If you believe that climate projects need funding and support by the people who can make a difference, please get in touch.`,
    leftLink: {
      href: `#`,
      children: `I’m working in climate and need help!`,
    },
    rightLink: {
      href: `#`,
      children: `I’m working in the creative industry and want to help!`,
    },
  },
}
