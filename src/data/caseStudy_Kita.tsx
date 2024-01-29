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
  content: `Kita`,
  logo: '/images/logos/kita.png',
  imageSection: {
    mediaImage: {
      image: {
        src: '/case-studies/kita-main.png',
        altText: 'Kita',
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
      <p>Kita is the carbon insurance specialist and wanted to develop a strategy to highlight the value of insurance to key stakeholders.  This included building trust for their pioneering proposition.</p>
      <h2>What we did:</h2>
      <ul>
        <li>We conducted in-depth interviews with carbon brokers and other stakeholders</li>
<li>We ran 2 StratCom workshops</li>
<li>We developed strategic messaging as well as communication guidelines, including a strategy to build trust with key stakeholders, do’s and don’ts etc.</li>

      </ul>
      <h2>One learning:</h2>
      <p>We find that, for many climate stakeholders, <b>building trust</b> is fundamental.  This is why The Climate Agency has built a <a href="https://www.linkedin.com/pulse/climate-sector-trust-paramount-see-our-simple-matrix-building?trackingId=U%2B%2B91J3jTE2IRk4IjZ9ybA%3D%3D/?trackingId=U++91J3jTE2IRk4IjZ9ybA==" target="_blank" title="Climate-specific matrix"><b>Climate-specific matrix</b></a> for building confidence.</p>
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
          src: '/case-studies/kita/kita-1.png',
          altText: 'Kita',
          width: 400,
          height: 250,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
  ]
} as CaseStudyContentBlockProps
