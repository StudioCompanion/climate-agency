import { TeamMember } from './TeamMember'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Team Member',
  component: TeamMember,
} as ComponentMeta<typeof TeamMember>

export const Default: ComponentStory<typeof TeamMember> = () => (
  <TeamMember {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof TeamMember> = {
  default: {
    mediaImage: {
      image: {
        src: '/images/sophie.png',
        altText: 'Person looks at a mountain',
        width: 317,
        height: 369,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    name: `Sophie Gallois`,
    role: `Co-Founder`,
    description: `Founder Sophie Gallois is harnessing everything she learnt in a leadership career that spans global brands and charities, including Unicef UK, to the service of climate action. \n
    She is a trustee of the Direct Air Capture Coalition and an advisor to Ocean Visions and Climate Science.`,
    socialLink: {
      href: `#`,
      children: `LinkedIn`,
      color: `transparent`,
      isExternal: true,
    },
  },
}
