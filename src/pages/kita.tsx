import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { CaseStudyHeaderBlock } from 'components/Blocks/CaseStudyHeaderBlock'
import { CaseStudyContentBlock } from 'components/Blocks/CaseStudyContentBlock'

import {
  caseStudyHeader,
  caseStudyContent
} from '../data/caseStudy_Kita'
const CaseStudy = () => {
  return (
    <CaseStudyWrap>
      <NextSeo
        title="Kita - Case Studies"
        description="Kita is the carbon insurance specialist and wanted to develop a strategy to highlight the value of insurance to key stakeholders.  This included building trust for their pioneering proposition."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/kita',
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
