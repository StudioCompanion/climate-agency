import { ShortArticleBlock } from './ShortArticleBlock'
import { Link } from 'components/Links/Link'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/Short Article Block',
  component: ShortArticleBlock,
} as ComponentMeta<typeof ShortArticleBlock>

export const Left: ComponentStory<typeof ShortArticleBlock> = () => (
  <ShortArticleBlock {...fixtures.left} />
)

export const Right: ComponentStory<typeof ShortArticleBlock> = () => (
  <ShortArticleBlock {...fixtures.right} />
)
const fixtures: StoryFixtures<typeof ShortArticleBlock> = {
  left: {
    textPosition: 'left',
    header: `Our background`,
    content: `We are a team of experts in marketing and communications, with prestigious careers leading global consumer brands and charities.`,
    imageSection: {
      mediaImage: {
        image: {
          src: '/images/Mad-Don.jpeg',
          altText: 'Satellite capture',
          width: 343,
          height: 348,
        },
        layout: 'responsive',
        objectFit: 'cover',
      },
      innerCaption: `Inspired teamwork can achieve the impossible. Here “Mad Don”, Donal Arabian, Chief of the Apollo Test Division.`,
      caption: (
        <Link
          href="https://www.nasa.gov/multimedia/videogallery/Video_Gallery_Archives.html"
          isExternal
          color="captionBlack"
        >
          NASA Archives
        </Link>
      ),
    },
  },
  right: {
    textPosition: 'right',
    header: `Our services don't cost the earth.`,
    content: `We are non-profit, highly cost effective and entrepreneurial.

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
      innerCaption: `Pockets of methane trapped within Canada’s frozen Lake Abraham.  Methane has around 80 times the warming power of CO2 when it reaches the atmosphere. The release of vast quantities of methane held by melting ice sheets and permafrost would be a tipping point for our climate.`,
      caption: (
        <Link
          href="https://unsplash.com/@jxb511"
          isExternal
          color="captionBlack"
        >
          John Bakator
        </Link>
      ),
    },
  },
}
