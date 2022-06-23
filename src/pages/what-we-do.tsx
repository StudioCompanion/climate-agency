import { styled } from 'styles/stitches.config'

import { OpeningBlock } from 'components/Blocks/OpeningBlock'
import { AcceleratorBlock } from 'components/Blocks/AcceleratorBlock'
import { ArticleBlock } from 'components/Blocks/ArticleBlock'

import { intro, accelerator, stakeholders, partners } from '../data/whatWeDo'
const WhatWeDo = () => {
  return (
    <WhatWeDoWrap>
      <OpeningBlock {...intro} />
      <AcceleratorBlock {...accelerator} />
      <Stakeholders {...stakeholders} />
      <Partners {...partners} />
    </WhatWeDoWrap>
  )
}

export default WhatWeDo

const WhatWeDoWrap = styled('article', {})

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
