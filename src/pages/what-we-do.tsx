import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { OpeningBlock } from 'components/Blocks/OpeningBlock'
import { AcceleratorBlock } from 'components/Blocks/AcceleratorBlock'
import { ArticleBlock } from 'components/Blocks/ArticleBlock'

import {
  intro,
  accelerator,
  stakeholders,
  partners,
} from '../data/whatWeDoPage'
const WhatWeDo = () => {
  return (
    <WhatWeDoWrap>
      <NextSeo
        title="What We Do"
        description="We'd like you to feel as though you have a CMO at your side, working with you to stand out, persuade, and scale."
        canonical="https://www.climate.agency"
        openGraph={{
          url: 'https://www.climate.agency/what-we-do',
          title: 'Climate Agency',
          images: [
            {
              url: 'https://www.climate.agency/site/what-we-do-meta.png',
            },
          ],
        }}
      />
      <Opening {...intro} />
      <AcceleratorBlock {...accelerator} />
      <Stakeholders {...stakeholders} />
      <Partners {...partners} />
    </WhatWeDoWrap>
  )
}

export default WhatWeDo

const WhatWeDoWrap = styled('article', {})

const Opening = styled(OpeningBlock, {
  mb: '$40',
})

const Stakeholders = styled(ArticleBlock, {
  mb: '$50',

  '@tabletUp': {
    mb: '$100',
  },
})

const Partners = styled(ArticleBlock, {
  mb: '$60',

  '@tabletUp': {
    mb: '$120',
  },
})
