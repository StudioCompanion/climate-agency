import { PartnersBlock } from './PartnersBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Stakeholder',
  component: PartnersBlock,
} as ComponentMeta<typeof PartnersBlock>

export const Default: ComponentStory<typeof PartnersBlock> = () => (
  <PartnersBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof PartnersBlock> = {
  default: {
    title: `Helping you plan, connect and deliver with great partners`,
    content: `After the workshop, you may feel you need help building assets (website, video), or running a
    campaign (fundraising, influencers). We can help.
    
    We will either find the right partners to do this for you, negotiate with them to work “at cost”, and help brief them. We are well connected within the agency / creative world and will use our network to help you scale up. Or do it ourselves if we can, charging for our time at cost.`,
    mediaImage: {
      image: {
        src: '/images/people_gathering.jpg',
        altText: 'People gathering',
        width: 989,
        height: 686,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
  },
}
