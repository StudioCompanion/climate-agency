import { PageNotFound } from './PageNotFoundBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Blocks/PageNotFound Block',
  component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>

export const Left: ComponentStory<typeof PageNotFound> = () => <PageNotFound />
