import { NetZeroBlock } from './NetZeroBlock'
import { Link } from 'components/Links/Link'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/NetZero Block',
  component: NetZeroBlock,
} as ComponentMeta<typeof NetZeroBlock>

export const Default: ComponentStory<typeof NetZeroBlock> = () => (
  <NetZeroBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof NetZeroBlock> = {
  default: {
    title: `One third of CEOs in the UK are unsure what Net Zero means.`,
    content: `There are urgent messages to tell, but the scientific community is speaking a different language to those with the power to make a difference in climate.\n

      The narrative is impenetrable, and the maths 
      mind–bendingly complex. \n
      
      Thousands of innovative climate solutions are in the making, exploring everything from extracting CO2 from the atmosphere, to preserving ice at the poles. Some of these can make a huge difference to our world in the years to come. But they're not being heard.\n
      
      Global corporations and brands have evolved for decades the marketing techniques to persuade, engage and build trust.  But, with limited resources, Climate projects find it hard to access these strategic skills. Yet the world is on fire, and they need results with urgency.`,
    imageSection: {
      mediaImage: {
        image: {
          src: '/images/Greenland_fjords.jpg',
          altText: 'Greenland Fjords',
          width: 1326,
          height: 784.73,
        },
        layout: 'responsive',
        objectFit: 'cover',
      },
      innerCaption: `This is Scoresby Sund. Greenland fjords receive considerable amounts of glacial meltwater discharge due to climate change. `,
      caption: (
        <Link
          href="https://unsplash.com/@anniespratt/"
          isExternal
          color="captionWhite"
        >
          Annie Spratt
        </Link>
      ),
    },
  },
}
