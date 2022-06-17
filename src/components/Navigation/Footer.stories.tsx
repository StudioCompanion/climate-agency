import { Footer } from './Footer'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Navigation/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = () => (
  <Footer {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof Footer> = {
  default: {
    linksInformation: [
      {
        href: `/our-mission`,
        children: `Our Mission`,
        color: 'transparent',
        isFooterLink: true,
        isExternal: false,
      },
      {
        href: `/accelerator`,
        children: `The Accelerator`,
        color: 'transparent',
        isFooterLink: true,
        isExternal: false,
      },
      {
        href: `/contact-us`,
        children: `Contact Us`,
        color: 'transparent',
        isFooterLink: true,
        isExternal: false,
      },
      {
        href: `/privacy`,
        children: `Privacy Policy`,
        color: 'transparent',
        isFooterLink: true,
        isExternal: false,
      },
    ],
    linksSocial: [
      {
        href: `www.linkedin.com`,
        children: `LinkedIn`,
        color: 'transparent',
        isFooterLink: true,
        isExternal: true,
      },
      {
        href: `www.twitter.com`,
        children: `Twitter`,
        color: 'transparent',
        isFooterLink: true,
        isExternal: true,
      },
    ],
  },
}
