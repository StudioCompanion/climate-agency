import { TextHeader } from './TextHeader'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Text/Text Header',
  component: TextHeader,
} as ComponentMeta<typeof TextHeader>

export const Default: ComponentStory<typeof TextHeader> = () => (
  <TextHeader {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof TextHeader> = {
  default: {
    header: `Our background`,
  },
}
