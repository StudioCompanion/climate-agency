import { Link } from './Link'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Links/Link',
  component: Link,
} as ComponentMeta<typeof Link>

export const Green: ComponentStory<typeof Link> = () => (
  <Link {...fixtures.green} />
)

export const Stone: ComponentStory<typeof Link> = () => (
  <Link {...fixtures.stone} />
)

const fixtures: StoryFixtures<typeof Link> = {
  green: {
    href: `#`,
    children: `Let us help you`,
    color: `green`,
    isExternal: false,
  },
  stone: {
    href: `#`,
    children: `Let us help you`,
    color: `stone`,
    isExternal: false,
  },
}
