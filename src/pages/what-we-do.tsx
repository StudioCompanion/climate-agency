import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { OpeningBlock } from 'components/Blocks/OpeningBlock'
import { AcceleratorBlock } from 'components/Blocks/AcceleratorBlock'
import { ArticleBlock } from 'components/Blocks/ArticleBlock'
import { NetZeroBlock } from 'components/Blocks/NetZeroBlock'

import {
  intro,
  accelerator,
  stakeholders,
  partners,
  partnersSecondary,
  netZero
} from '../data/whatWeDoPage'
const WhatWeDo = () => {
  return (
    <WhatWeDoWrap>
      <NextSeo
        title="What We Do"
        description="We'd like you to feel as though you have a CMO at your side, working with you to stand out, persuade, and scale."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/what-we-do',
          title: 'Climate Agency',
          images: [
            {
              url: 'https://climateagency.net/site/what-we-do-meta.png',
              width: 1200,
              height: 630,
            },
          ],
        }}
      />
      <Opening {...intro} />
      <AcceleratorBlock {...accelerator} />
      <Opening {...partners} />
      <Opening {...partnersSecondary} />
      <Stakeholders {...stakeholders} />
      <NetZeroBlock {...netZero} />
    </WhatWeDoWrap>
  )
}

export default WhatWeDo

const WhatWeDoWrap = styled('article', {})

const Opening = styled(OpeningBlock, {
  mb: '$40',
})

const Stakeholders = styled(ArticleBlock, {
  background: '$stone',
  pb: '$30',
  mt: '$60',

  '@tabletUp': {
    pb: '$60',
    mt: '$120',
  },
})
