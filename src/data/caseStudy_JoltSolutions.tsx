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
  content: `Jolt Solutions`,
  logo: '/images/logos/jolt.png',
  imageSection: {
    mediaImage: {
      image: {
        src: '/case-studies/jolt-main.png',
        altText: 'Jolt Solutions',
        width: 343,
        height: 348,
      },
      layout: 'responsive',
      objectFit: 'contain',
    },
  },
} as CaseStudyHeaderBlockProps

export const caseStudyContent = {
  className: 'singleImage joltFix',
  content: (
    <>
      <h2>The brief:</h2>
      <p>Jolt Solutions, from Barcelona, has developed a new generation electrode coating with potential to unlock Green Hydrogen.  The team is looking to build a cut-through profile on the global stage.</p>
      <h2>What we did:</h2>
      <ul>
        <li>We ran 2 StratCom workshops as well as analyzed relevant sectors (Electrolyzers, Green Hydrogen)</li>
<li>We helped the team express their complex tech in a relevant and accessible way and we built communication guidelines to build profile for the organisation</li>
<li>We wrote and designed a new website</li>
      </ul>
      <h2>One learning:</h2>
      <p>Not all stakeholders have the same level of expertise.  It’s important to simplify complex tech vocabulary and tell your story in a compelling way, over and above describing the technology.  Crisp, intelligent design can bring to life the tech communication - from visuals to infographics.</p>
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
          src: '/case-studies/jolt/jolt-1.png',
          altText: 'Jolt Solutions',
          width: 400,
          height: 300
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
  ]
} as CaseStudyContentBlockProps
