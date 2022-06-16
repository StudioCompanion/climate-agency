import { NavBar } from './NavBar'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Navigation/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>

export const Default: ComponentStory<typeof NavBar> = () => (
  <NavBar {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof NavBar> = {
  default: {
    menuClose: {
      image: {
        src: '/images/closeNavBar.svg',
        altText: 'CA Logo',
        width: 15,
        height: 16,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    links: [
      {
        href: `/our-mission`,
        children: `Our Mission`,
      },
      {
        href: `/what-we-do`,
        children: `What We Do`,
      },
      {
        href: `/contact-us`,
        children: `Contact Us`,
      },
    ],
    logoDesktop: {
      image: {
        src: '/images/Logo.svg',
        altText: 'CA Logo',
        width: 109,
        height: 60,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    logoMobile: {
      image: {
        src: '/images/Logo-mobile.svg',
        altText: 'CA Logo',
        width: 22,
        height: 60,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
  },
}

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
