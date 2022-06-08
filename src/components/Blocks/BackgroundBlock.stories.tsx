import { BackgroundBlock } from './BackgroundBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'

export default {
  title: 'Blocks/BackgroundBlock',
  component: BackgroundBlock,
} as ComponentMeta<typeof BackgroundBlock>

export const NoContent: ComponentStory<
  typeof BackgroundBlock
> = () => <BackgroundBlock />

export const WithContent: ComponentStory<
  typeof BackgroundBlock
> = () => <BackgroundBlock />
