import { ArticleBlock } from './ArticleBlock'
import SpikesIcon from '../../assets/Spikes.svg'
import SunIcon from '../../assets/Sun.svg'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Article Block',
  component: ArticleBlock,
} as ComponentMeta<typeof ArticleBlock>

export const Left: ComponentStory<typeof ArticleBlock> = () => (
  <ArticleBlock {...fixtures.left} />
)
export const Right: ComponentStory<typeof ArticleBlock> = () => (
  <ArticleBlock {...fixtures.right} />
)

const fixtures: StoryFixtures<typeof ArticleBlock> = {
  left: {
    pageLayout: 'left',
    children: <SunIcon />,
    title: `Helping you plan, connect and deliver with great partners`,
    content: `After the workshop, you may feel you need help building assets (website, video), or running a
        campaign (fundraising, influencers). We can help.
        
        We will either find the right partners to do this for you, negotiate with them to work “at cost”, and help brief them. We are well connected within the agency / creative world and will use our network to help you scale up. Or do it ourselves if we can, charging for our time at cost.`,
    imageSection: {
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
  },
  right: {
    pageLayout: 'right',
    children: <SpikesIcon />,
    title: `Stakeholder Campaigns on neglected climate topics`,
    content: `We believe there are neglected topics which are critical to climate yet poorly understood by key stakeholders such as politicians, philanthropists, CEOs, Media & influencers etc.

    Some stories are screaming to be told and are needed to nudge decisions taken by stakeholders. For example, key actions needed around Methane, or the role of the ocean as a climate solution.
    
    Facts and figures are not enough: we can invite some of the best creative and strategic minds to help tell these stories in a way which is persuasive, powerful, and relevant for stakeholders – creating highly influential and targeted campaigns.
    
    We are working with founders, scientists and agencies to bring to life these topical stakeholder campaigns.`,
    imageSection: {
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
  },
}
