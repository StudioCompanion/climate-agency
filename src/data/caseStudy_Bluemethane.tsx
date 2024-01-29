import { CaseStudyHeaderBlockProps } from 'components/Blocks/CaseStudyHeaderBlock'
import { CaseStudyContentBlockProps } from 'components/Blocks/CaseStudyContentBlock'

export const caseStudyHeader = {
  className: 'blackBackground',
  textPosition: 'right',
  link: {
    children: '< Back to case studies',
    color: 'transparent',
    isExternal: false,
  },
  content: `Bluemethane`,
  logo: '/images/logos/bluemethane.png',
  imageSection: {
    mediaImage: {
      image: {
        src: '/case-studies/bluemethane-main.png',
        altText: 'Bluemethane',
        width: 343,
        height: 348,
      },
      layout: 'responsive',
      objectFit: 'contain',
    },
  },
} as CaseStudyHeaderBlockProps

export const caseStudyContent = {
  content: (
    <>
      <h2>The brief:</h2>
      <p>Bluemethane measures and captures methane from water.  As a tech startup with a wide range of potential applications, they were looking for a fresh perspective on their strategic proposition.</p>
      <h2>What we did:</h2>
      <ul>
      <li>We ran 1 StratCom workshop and analyzed relevant sectors (hydropower, water treatment etc.)</li>
<li>We worked with the team to fine-tune and focus their business proposition and prioritise their stakeholders. We recommended a messaging strategy and identified their key trust badges
</li>
      </ul>
      <h2>One learning:</h2>
      <p>For many early stage climate organisations, there are numerous potential applications to the tech, as well as uncertainty in immature markets.  Yet the strategic proposition needs to be focused and accessible to prospects and investors. As an informed partner, The Climate Agency can bring a fresh perspective to help founders prioritise.</p>
    </>
  ),
  leftLink: {
    href: `/case-studies`,
    children: `See our case studies`,
    color: `green`,
    isExternal: true,
  }
} as CaseStudyContentBlockProps
