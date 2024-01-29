import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { CaseStudyHeaderBlock } from 'components/Blocks/CaseStudyHeaderBlock'
import { CaseStudyContentBlock } from 'components/Blocks/CaseStudyContentBlock'

import {
  caseStudyHeader,
  caseStudyContent
} from '../data/caseStudy_Bluemethane'
const CaseStudy = () => {
  return (
    <CaseStudyWrap>
      <NextSeo
        title="Bluemethane - Case Studies"
        description="Bluemethane measures and captures methane from water.  As a tech startup with a wide range of potential applications, they were looking for a fresh perspective on their strategic proposition."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/bluemethane',
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
