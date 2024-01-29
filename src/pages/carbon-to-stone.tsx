import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { CaseStudyHeaderBlock } from 'components/Blocks/CaseStudyHeaderBlock'
import { CaseStudyContentBlock } from 'components/Blocks/CaseStudyContentBlock'

import {
  caseStudyHeader,
  caseStudyContent
} from '../data/caseStudy_CarbonToStone'
const CaseStudy = () => {
  return (
    <CaseStudyWrap>
      <NextSeo
        title="Carbon to Stone - Case Studies"
        description="Carbon to Stone is a spinoff from Cornell university, commercialising a unique process to decarbonise heavy industries. They had to be ready to demonstrate their project at New York Climate Week, with only 6 weeks to go."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/carbon-to-stone',
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
