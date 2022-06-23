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
      <ArticleBlock {...stakeholders} />
      <ArticleBlock {...partners} />
    </WhatWeDoWrap>
  )
}

export default WhatWeDo

const WhatWeDoWrap = styled('article', {})
