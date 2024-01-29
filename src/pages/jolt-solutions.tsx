import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { CaseStudyHeaderBlock } from 'components/Blocks/CaseStudyHeaderBlock'
import { CaseStudyContentBlock } from 'components/Blocks/CaseStudyContentBlock'

import {
  caseStudyHeader,
  caseStudyContent
} from '../data/caseStudy_JoltSolutions'
const CaseStudy = () => {
  return (
    <CaseStudyWrap>
      <NextSeo
        title="Jolt Solutions - Case Studies"
        description="Jolt Solutions, from Barcelona, has developed a new generation electrode coating with potential to unlock green hydrogen.  The team is looking to build a cut-through profile on the global stage."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/jolt-solutions',
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
