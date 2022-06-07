import { ComponentMeta, ComponentStory } from '@storybook/react'
// import { StoryFixtures } from 'types/utils'

import { ButtonTest } from './ButtonTest'

export default {
  title: 'Buttons/Test',
  component: ButtonTest,
} as ComponentMeta<typeof ButtonTest>

export const Default: ComponentStory<typeof ButtonTest> = () => <ButtonTest />

// const fixtures: StoryFixtures<typeof ButtonTest> = {
//   default: {},
// }
