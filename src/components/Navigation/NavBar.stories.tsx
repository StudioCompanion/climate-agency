import { NavBar } from './NavBar'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>

export const Default: ComponentStory<typeof NavBar> = () => <NavBar />

Default.story = {
  parameters: {
    nextRouter: {
      path: '/[id]',
      asPath: '/our-mission',
      query: {
        id: 'our-mission',
      },
    },
  },
}
