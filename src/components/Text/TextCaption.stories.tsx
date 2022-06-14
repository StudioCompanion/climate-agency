import { TextCaption } from './TextCaption'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Text/Caption Text',
  component: TextCaption,
} as ComponentMeta<typeof TextCaption>

export const Default: ComponentStory<typeof TextCaption> = () => (
  <TextCaption {...fixtures.default} />
)
const fixtures: StoryFixtures<typeof TextCaption> = {
  default: {
    caption: `Greenland fjords receive considerable amounts of glacial meltwater discharge from the Greenland Ice Sheet due to present climate warming. This is Scoresby Sund, the world’s largest fjord system.`,
    color: `black`,
  },
}
