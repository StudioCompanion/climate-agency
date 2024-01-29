import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { CaseStudyHeaderBlock } from 'components/Blocks/CaseStudyHeaderBlock'
import { CaseStudyContentBlock } from 'components/Blocks/CaseStudyContentBlock'

import {
  caseStudyHeader,
  caseStudyContent
} from '../data/caseStudy_DRecInitiative'
const CaseStudy = () => {
  return (
    <CaseStudyWrap>
      <NextSeo
        title="D-Rec Initiative - Case Studies"
        description="The D-REC initiative is an industry-led non-profit whose mission is to develop a new global mechanism for the certification of distributed renewable energy (DRE) .  They wanted to launch a thought-leadership campaign pre-COP."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/d-rec-initiative',
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
