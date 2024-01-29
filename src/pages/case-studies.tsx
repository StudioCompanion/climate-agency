import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { CaseStudiesBlock } from 'components/Blocks/CaseStudiesBlock'


import {
  caseStudiesMenu
} from '../data/caseStudiesPage'
const CaseStudies = () => {
  return (
    <CaseStudiesWrap>
      <NextSeo
        title="Case Studies"
        description="We help climate startups get lift off. We're fast, accessible & protective of your time."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/case-studies',
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
      <CaseStudiesBlock {...caseStudiesMenu} />
    </CaseStudiesWrap>
  )
}

export default CaseStudies

const CaseStudiesWrap = styled('article', {})
