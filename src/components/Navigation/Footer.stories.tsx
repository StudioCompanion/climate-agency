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
    logo: {
      image: {
        src: '/images/Logo-footer.svg',
        altText: 'CA Logo',
        width: 653,
        height: 361,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    legal: `The Climate Agency Limited (14011922)`,
    credits: `This website was made possible with Companion Studio.`,
  },
}
