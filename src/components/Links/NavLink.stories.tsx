import { NavLink } from './NavLink'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Links/NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>

export const Default: ComponentStory<typeof NavLink> = () => (
  <NavLink {...fixtures.default} />
)

export const Active: ComponentStory<typeof NavLink> = () => (
  <NavLink {...fixtures.active} />
)

const fixtures: StoryFixtures<typeof NavLink> = {
  default: {
    href: `#`,
    children: `Our Mission`,
  },
  active: {
    href: `#`,
    children: `Our Mission`,
  },
}
