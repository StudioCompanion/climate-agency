import { AcceleratorBlock } from './AcceleratorBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Accelerator Block',
  component: AcceleratorBlock,
} as ComponentMeta<typeof AcceleratorBlock>

export const Default: ComponentStory<typeof AcceleratorBlock> = () => (
  <AcceleratorBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof AcceleratorBlock> = {
  default: {
    title: `The Climate Action Accelerator`,
    subtitle: `An intense workshop spread over 2 half days.`,
    link: {
      href: `#`,
      children: `Let us help you`,
      color: 'green',
      isExternal: false,
    },
    mediaImage: {
      image: {
        src: '/images/Image_07.png',
        altText: 'People cleaning a beach',
        width: 1102,
        height: 632,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    children: [
      `We believe many climate projects need help in terms of business positioning, marketing, and stakeholder strategy. These are fundamentals that can truly help climate projects scale up. `,
      [
        `With elements of business positioning, marketing, behavioural science and stakeholders strategy, with a dash of creativity to inspire you. Plus our very own recommendation tailored to your needs, to help you gain profile and support, landing on your desk within days.

      As a non profit dedicated to help climate innovation, we have worked hard to deliver a process which is:

      `,
        <ul>
          <li key="1">
            {
              'Accessible: around 10% of the traditional agency/consultancy fees for a similar process.'
            }
          </li>
          <li key="2">
            {
              'Climate-specific: Climate solutions projects are our only focus. We can share the knowledge gained across the sector.'
            }
          </li>
          <li key="3">
            {
              'Fast and Intense. The world is on fire, your work is urgent. We aim to equip you with the basic tools to boost your profile and support within days/weeks.'
            }
          </li>
        </ul>,
      ],
    ],
  },
}
