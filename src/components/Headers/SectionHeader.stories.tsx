import { SectionHeader } from './SectionHeader'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Headers/Section Header',
  component: SectionHeader,
} as ComponentMeta<typeof SectionHeader>

export const Default: ComponentStory<typeof SectionHeader> = () => (
  <SectionHeader {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof SectionHeader> = {
  default: {
    header: `Our background`,
  },
}
