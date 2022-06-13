import { GreenButton } from './GreenButton'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Buttons/Green Button',
  component: GreenButton,
} as ComponentMeta<typeof GreenButton>

export const Default: ComponentStory<typeof GreenButton> = () => (
  <GreenButton {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof GreenButton> = {
  default: {
    href: `#`,
    children: `Let us help you`,
  },
}
