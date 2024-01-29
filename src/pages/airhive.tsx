import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { CaseStudyHeaderBlock } from 'components/Blocks/CaseStudyHeaderBlock'
import { CaseStudyContentBlock } from 'components/Blocks/CaseStudyContentBlock'

import {
  caseStudyHeader,
  caseStudyContent
} from '../data/caseStudy_Airhive'
const CaseStudy = () => {
  return (
    <CaseStudyWrap>
      <NextSeo
        title="Airhive - Case Studies"
        description="Airhive’s key challenge was their lack of bandwidth for marketing, as the founders were working hard growing their DAC startup at speed.  They needed a proposition, a look and feel, a website - but had little availability."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/airhive',
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
