import { TeamBlock } from './TeamBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Team Block',
  component: TeamBlock,
} as ComponentMeta<typeof TeamBlock>

export const Default: ComponentStory<typeof TeamBlock> = () => (
  <TeamBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof TeamBlock> = {
  default: {
    title: `Our team works with inspiring advisors, to help us tackle the biggest communication problem of all times.`,
    teamMembers: [
      [
        {
          mediaImage: {
            image: {
              src: '/team-members/sophie.png',
              altText: 'Sophie Gallois',
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
        {
          mediaImage: {
            image: {
              src: '/team-members/lisa.png',
              altText: 'Lisa Woodward',
              width: 317,
              height: 369,
            },
            layout: 'responsive',
            objectFit: 'cover',
          },
          name: `Lisa Woodward`,
          role: `Co-Founder`,
          description: `With a branding career that spans over 30 years, Lisa  brings a strategic view and pragmatic approach to The Climate Agency. \n
                For the last decade, she has been running strategic workshops with start-ups and charities, as well as supporting them with their creative implementation.`,
          socialLink: {
            href: `#`,
            children: `LinkedIn`,
            color: `transparent`,
            isExternal: true,
          },
        },
      ],
      [
        {
          mediaImage: {
            image: {
              src: '/team-members/cyrill.png',
              altText: 'Cyrill Gutsch',
              width: 317,
              height: 369,
            },
            layout: 'responsive',
            objectFit: 'cover',
          },
          name: `Cyrill Gutsch`,
          role: `Advisor`,
          description: `Cyrill is the founder of Parley for the Oceans, a nonprofit environmental organization that focuses on protection of the oceans. \n
                Gutsch spoke at the United Nations in June 2018, where he argued that "we have to let plastic go" and is an advocate for the “AIR” strategy, calling for the Avoidance, Interception and Redesigning of the sources of plastic pollution.`,
          socialLink: {
            href: `#`,
            children: `LinkedIn`,
            color: `transparent`,
            isExternal: true,
          },
        },
        {
          mediaImage: {
            image: {
              src: '/team-members/anab.png',
              altText: 'Anab Jain',
              width: 317,
              height: 369,
            },
            layout: 'responsive',
            objectFit: 'cover',
          },
          name: `Anab Jain`,
          role: `Advisor`,
          description: `Anab is a designer, futurist, filmmaker and educator. As Co-founder and Director of Superflux, she hopes to realise the vision of the Studio as a new kind of design practice, responsive to the challenges and opportunities of the twenty-first century.\n
                Anab has gained international recognition for her work and commentary on design, innovation, emerging technologies and complex futures.`,
          socialLink: {
            href: `#`,
            children: `LinkedIn`,
            color: `transparent`,
            isExternal: true,
          },
        },
        {
          mediaImage: {
            image: {
              src: '/team-members/myles.png',
              altText: 'Myles Palmer',
              width: 317,
              height: 369,
            },
            layout: 'responsive',
            objectFit: 'cover',
          },
          name: `Myles Palmer`,
          role: `Advisor`,
          description: `Myles is the founder of Companion, a digital product design studio that partners with start-ups, brands and companies to create new futures. \n
                Their mission is to enhance the world around them and create a better future for people and planet, which is why they donate 5% of their annual revenue to charitable and non-profit causes.`,
          socialLink: {
            href: `#`,
            children: `LinkedIn`,
            color: `transparent`,
            isExternal: true,
          },
        },
      ],
    ],
  },
}
