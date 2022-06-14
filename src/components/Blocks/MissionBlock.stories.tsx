import { MissionBlock } from './MissionBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Mission Block',
  component: MissionBlock,
} as ComponentMeta<typeof MissionBlock>

export const Default: ComponentStory<typeof MissionBlock> = () => (
  <MissionBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof MissionBlock> = {
  default: {
    header: `Our mission`,
    content: `We believe in human ingenuity and the power of ideas and we are exclusively focused on climate.`,
  },
}
