import { ServicesBlock } from './ServicesBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Services Block',
  component: ServicesBlock,
} as ComponentMeta<typeof ServicesBlock>

export const Default: ComponentStory<typeof ServicesBlock> = () => (
  <ServicesBlock {...fixtures.default} />
)
const fixtures: StoryFixtures<typeof ServicesBlock> = {
  default: {
    header: `Our services don't cost the earth.`,
    content: `We are non-profit, highly cost effective and entrepreneurial. \n

      Through our accelerator workshops and stakeholder campaigns, we work with you to help you get results and scale up.`,
    link: {
      href: `#`,
      children: `Learn about our accelerator`,
      color: `green`,
      isExternal: false,
    },
    imageSection: {
      mediaImage: {
        image: {
          src: '/images/raindrops.png',
          altText: 'Raindrops',
          width: 653,
          height: 646,
        },
        layout: 'responsive',
        objectFit: 'cover',
      },
      caption: `Pockets of methane trapped within Canada’s frozen Lake Abraham.  Methane has around 80 times the warming power of CO2 when it reaches the atmosphere. The release of vast quantities of methane held by melting ice sheets and permafrost would be a tipping point for our climate.`,
    },
  },
}
