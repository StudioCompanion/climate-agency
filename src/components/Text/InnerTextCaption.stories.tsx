import { InnerTextCaption } from './InnerTextCaption'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Text/Green Caption Text',
  component: InnerTextCaption,
} as ComponentMeta<typeof InnerTextCaption>

export const Default: ComponentStory<typeof InnerTextCaption> = () => (
  <InnerTextCaption {...fixtures.default} />
)
const fixtures: StoryFixtures<typeof InnerTextCaption> = {
  default: {
    children: 'This is a captioned text with green background',
  },
}
