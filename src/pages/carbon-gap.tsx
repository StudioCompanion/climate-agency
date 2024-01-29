import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { CaseStudyHeaderBlock } from 'components/Blocks/CaseStudyHeaderBlock'
import { CaseStudyContentBlock } from 'components/Blocks/CaseStudyContentBlock'

import {
  caseStudyHeader,
  caseStudyContent
} from '../data/caseStudy_CarbonGap'
const CaseStudy = () => {
  return (
    <CaseStudyWrap>
      <NextSeo
        title="Carbon Gap - Case Studies"
        description="Brussels-based Carbon Gap is a Climate non-profit focused on unlocking the potential for carbon removal mainly through policy advocacy and thought leadership work around the EU.  They needed a full marketing strategy to support their expansion."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/carbon-gap',
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
      <CaseStudyHeaderBlock {...caseStudyHeader} />
      <CaseStudyContentBlock {...caseStudyContent} />
    </CaseStudyWrap>
  )
}

export default CaseStudy

const CaseStudyWrap = styled('article', {})
