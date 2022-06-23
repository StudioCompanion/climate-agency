import { styled } from 'styles/stitches.config'

import { NextSeo } from 'next-seo'

import { OpeningBlock } from 'components/Blocks/OpeningBlock'
import { NetZeroBlock } from 'components/Blocks/NetZeroBlock'
import { ClimateCausesBlock } from 'components/Blocks/ClimateCausesBlock'
import { ShortArticleBlock } from 'components/Blocks/ShortArticleBlock'
import { TestimonialsBlock } from 'components/Blocks/TestimonialsBlock'
import { MissionBlock } from 'components/Blocks/MissionBlock'
import { TeamBlock } from 'components/Blocks/TeamBlock'
import { CtaBlock } from 'components/Blocks/CtaBlock'

import {
  hero,
  netZero,
  climateCauses,
  ourBackground,
  testimonials,
  mission,
  services,
  team,
  cta,
} from '../data/ourMission'

const Index = () => {
  return (
    <IndexWrap>
      <NextSeo
        title="Our Mission"
        description="This is the landing page"
        canonical="https://www.climate.agency"
        openGraph={{
          url: 'https://www.climate.agency/',
          title: 'Climate Agency',
          images: [
            {
              url: 'https://twitter.com/ClimateAgency1/photo',
            },
          ],
        }}
      />
      <Opening {...hero} />
      <NetZeroBlock {...netZero} />
      <ClimateCauses {...climateCauses} />
      <ShortArticle {...ourBackground} />
      <TestimonialsBlock {...testimonials} />
      <Mission {...mission} />
      <ShortArticle {...services} />
      <Team {...team} />
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

const Mission = styled(MissionBlock, {
  my: '$80',

  '@tabletUp': {
    mb: '$200',
  },
})

const Team = styled(TeamBlock, {
  mb: '$40',

  '@tabletUp': {
    mb: '$60',
  },
})

const Cta = styled(CtaBlock, {
  mb: '$60',

  '@tabletUp': {
    mb: '$100',
  },
})
