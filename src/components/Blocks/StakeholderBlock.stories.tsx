import { StakeholderBlock } from './StakeholderBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Stakeholder',
  component: StakeholderBlock,
} as ComponentMeta<typeof StakeholderBlock>

export const Default: ComponentStory<typeof StakeholderBlock> = () => (
  <StakeholderBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof StakeholderBlock> = {
  default: {
    title: `Stakeholder Campaigns on neglected climate topics`,
    content: `We believe there are neglected topics which are critical to climate yet poorly understood by key stakeholders such as politicians, philanthropists, CEOs, Media & influencers etc.

    Some stories are screaming to be told and are needed to nudge decisions taken by stakeholders. For example, key actions needed around Methane, or the role of the ocean as a climate solution.
    
    Facts and figures are not enough: we can invite some of the best creative and strategic minds to help tell these stories in a way which is persuasive, powerful, and relevant for stakeholders – creating highly influential and targeted campaigns.
    
    We are working with founders, scientists and agencies to bring to life these topical stakeholder campaigns.`,
    mediaImage: {
      image: {
        src: '/images/ripples.jpg',
        altText: 'Ripples in water',
        width: 541,
        height: 686,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
  },
}
