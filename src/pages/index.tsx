import { styled } from 'styles/stitches.config'

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
      <OpeningBlock {...hero} />
      <NetZeroBlock {...netZero} />
      <ClimateCauses {...climateCauses} />
      <ShortArticleBlock {...ourBackground} />
      <TestimonialsBlock {...testimonials} />
      <Mission {...mission} />
      <ShortArticleBlock {...services} />
      <TeamBlock {...team} />
      <CtaBlock {...cta} />
    </IndexWrap>
  )
}

export default Index

const IndexWrap = styled('article', {})

const ClimateCauses = styled(ClimateCausesBlock, {
  mb: '$30',

  '@tabletUp': {
    mb: '$100',
  },
})

const Mission = styled(MissionBlock, {
  my: '$80',

  '@tabletUp': {
    mt: '$16',
    mb: '$200',
  },
})
