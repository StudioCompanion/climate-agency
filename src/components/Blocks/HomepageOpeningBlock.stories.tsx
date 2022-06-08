import { HomepageOpeningBlock } from './HomepageOpeningBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

export default {
  title: 'Blocks/HomepageOpeningBlock',
  component: HomepageOpeningBlock,
} as ComponentMeta<typeof HomepageOpeningBlock>

export const NoContent: ComponentStory<typeof HomepageOpeningBlock> = () => (
  <HomepageOpeningBlock />
)

export const WithContent: ComponentStory<typeof HomepageOpeningBlock> = () => (
  <HomepageOpeningBlock />
)
