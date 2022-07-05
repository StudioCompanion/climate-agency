import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { OpeningBlock } from 'components/Blocks/OpeningBlock'
import { NetZeroBlock } from 'components/Blocks/NetZeroBlock'
import { ClimateCausesBlock } from 'components/Blocks/ClimateCausesBlock'
import { ShortArticleBlock } from 'components/Blocks/ShortArticleBlock'
import { TestimonialsBlock } from 'components/Blocks/TestimonialsBlock'
import { TeamBlock } from 'components/Blocks/TeamBlock'
import { CtaBlock } from 'components/Blocks/CtaBlock'

import {
  hero,
  netZero,
  climateCauses,
  ourBackground,
  testimonials,
  services,
  team,
  cta,
} from '../data/homepage'

const Index = () => {
  return (
    <IndexWrap>
      <NextSeo
        title="Our Mission"
        description="We are a marketing strategy consultancy, non-profit, and dedicated to help climate projects scale up."
        canonical="https://climateagency.net"
        openGraph={{
          url: 'https://climateagency.net/',
          title: 'Climate Agency',
          images: [
            {
              url: 'https://climateagency.net/site/our-mission-meta.png',
              width: 1200,
              height: 630,
            },
          ],
        }}
      />
      <Opening {...hero} />
      <NetZeroBlock {...netZero} />
      <ClimateCauses {...climateCauses} />
      <ShortArticle {...ourBackground} />
      <TestimonialsBlock {...testimonials} />
      <ServicesBlock {...services} />
      <TeamBlock {...team} />
      <Cta {...cta} />
    </IndexWrap>
  )
}

export default Index

const IndexWrap = styled('article', {})

const Opening = styled(OpeningBlock, {
  mb: '$40',
})

const ClimateCauses = styled(ClimateCausesBlock, {
  mb: '$30',

  '@tabletUp': {
    mb: '$100',
  },
})

const ShortArticle = styled(ShortArticleBlock, {
  mb: '$40',

  '@tabletUp': {
    mb: '$60',
  },
})

const ServicesBlock = styled(ShortArticle, {
  mt: '$100',

  '@tabletUp': {
    mb: '$120',
  },
})

const Cta = styled(CtaBlock, {
  mb: '$60',

  '@tabletUp': {
    mb: '$100',
  },
})
