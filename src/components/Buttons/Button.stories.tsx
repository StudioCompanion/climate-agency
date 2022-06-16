import { Button } from './Button'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Buttons/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = () => (
  <Button {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof Button> = {
  default: {
    href: `#`,
    children: `Let us help you`,
    color: `green`,
  },
}
