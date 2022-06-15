import { WhatWeDoBlock } from './WhatWeDoBlock'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '../../types/utils'

export default {
  title: 'Blocks/What We Do',
  component: WhatWeDoBlock,
} as ComponentMeta<typeof WhatWeDoBlock>

export const Default: ComponentStory<typeof WhatWeDoBlock> = () => (
  <WhatWeDoBlock {...fixtures.default} />
)

const fixtures: StoryFixtures<typeof WhatWeDoBlock> = {
  default: {
    mediaImage: {
      image: {
        src: '/images/Image_02.png',
        altText: 'People sitting on a mountain',
        width: 765,
        height: 636,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    content: `We'd like you to feel as though you have a CMO at your side, working with you to stand out, persuade, and scale.`,
  },
}
