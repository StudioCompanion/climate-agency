import { ClimateCausesBlock } from './ClimateCausesBlock'
import { Link } from 'components/Links/Link'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Climate Causes Block',
  component: ClimateCausesBlock,
} as ComponentMeta<typeof ClimateCausesBlock>

export const Default: ComponentStory<typeof ClimateCausesBlock> = () => (
  <ClimateCausesBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof ClimateCausesBlock> = {
  default: {
    title: `Just 2% of global charity giving goes to climate causes.`,
    content: `The Climate Agency harness their business leadership and marketing expertise to help climate innovators, startups, scientists and small NGOs to influence the right people, with the relevant message. \n

    We'd like you to feel as though you have a CMO 
    at your side, working with you to stand out, persuade, and scale.`,
    link: {
      href: `#`,
      children: `Let us help you`,
      color: 'green',
      isExternal: false,
    },
    leftImage: {
      mediaImage: {
        image: {
          src: '/images/mountain_peak.jpg',
          altText: 'Person looks at a mountain',
          width: 541,
          height: 650,
        },
        layout: 'responsive',
        objectFit: 'cover',
      },
      innerCaption: `Humans relationship with Nature must change. The scale and speed at which scientists say we must effect that change are hard to grasp for most of us. Can we adapt in time to protect our world?`,
      caption: (
        <Link
          href="https://unsplash.com/@therawhunter"
          isExternal
          color="captionBlack"
        >
          Massimiliano Morosinotto
        </Link>
      ),
    },
    rightImage: {
      mediaImage: {
        image: {
          src: '/images/hand_in_water.jpg',
          altText: 'Hand in the water',
          width: 429,
          height: 513,
        },
        layout: 'responsive',
        objectFit: 'cover',
      },
      caption: (
        <Link
          href="https://unsplash.com/@eliapelle"
          isExternal
          color="captionBlack"
        >
          Elia Pellegrini
        </Link>
      ),
    },
  },
}
