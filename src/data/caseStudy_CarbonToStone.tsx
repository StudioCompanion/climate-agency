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
  content: `Carbon to Stone`,
  logo: '/images/logos/carbon-to-stone.png',
  imageSection: {
    mediaImage: {
      image: {
        src: '/case-studies/carbon-to-stone-main.png',
        altText: 'Carbon to Stone',
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
      <p>Carbon to Stone is a spinoff from Cornell university, commercialising a unique process to <b>decarbonise heavy industries</b>. They had to be ready to demonstrate their project at New York Climate Week, with only 6 weeks to go.</p>
      <h2>What we did:</h2>
      <ul>
        <li key="what-we-did-1">Ran 2 StratCom workshops and crafted their positioning, narrative, strapline and communication templates</li>
        <li key="what-we-did-2">Designed and wrote the entire website - see <a href='https://carbontostone.com/' target='_blank' title='Carbon to Stone'>Carbon to Stone</a></li>
        <li key="what-we-did-3">Created presentation for investors</li>
      </ul>
      <h2>One learning:</h2>
      <p>It is key to talk in your stakeholder’s language, both visually and in copy.  Here, the key clients were steel and aluminium industries. We showed the CTS team in a factory rather than in their lab, and ensured we used the language of heavy industry, for example talking about operational excellence and sustainability goals.</p>
      <blockquote>
        “The Climate Agency did a phenomenal job telling our story.”
        <span>
          Sravanth Gadikota, CEO Carbon to Stone
        </span>
      </blockquote>
    </>
  ),
  leftLink: {
    href: `/case-studies`,
    children: `See our case studies`,
    color: `green`,
    isExternal: true,
  },
  mediaImages: [
    {
      mediaImage: {
        image: {
          src: '/case-studies/carbon-to-stone-main.png',
          altText: 'Carbon to Stone',
          width: 400,
          height: 400,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
    {
      mediaImage: {
        image: {
          src: '/case-studies/carbon-to-stone/carbon-to-stone-1.png',
          altText: 'Carbon to Stone',
          width: 400,
          height: 400,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
  ]
} as CaseStudyContentBlockProps
