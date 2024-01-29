import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { CaseStudyHeaderBlock } from 'components/Blocks/CaseStudyHeaderBlock'
import { CaseStudyContentBlock } from 'components/Blocks/CaseStudyContentBlock'

import {
  caseStudyHeader,
  caseStudyContent
} from '../data/caseStudy_Powertrust'
const CaseStudy = () => {
  return (
    <CaseStudyWrap>
      <NextSeo
        title="Powertrust - Case Studies"
        description="Powertrust is a North American company which sells renewable energy certificates.  Their challenge was persuading global corporate clients to take a “leap” with their innovative approach."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/powertrust',
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
