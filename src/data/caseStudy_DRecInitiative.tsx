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
  content: `D-Rec Initiative`,
  logo: '/images/logos/drec.png',
  imageSection: {
    mediaImage: {
      image: {
        src: '/case-studies/drec-initiative-main.jpg',
        altText: 'D-Rec Initiative',
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
      <p>The D-REC initiative is an industry-led non-profit whose mission is to develop a new global mechanism for the certification of distributed renewable energy (DRE) .  They wanted to launch a <b>thought-leadership campaign pre-COP</b>.</p>
      <h2>What we did:</h2>
      <ul>
        <li>We researched and wrote a White Paper, “A New Frontier for Impact”</li>
<li>We designed a strong executive summary and social media posts for launch</li>
<li>We wrote and created a video to illustrate the White Paper</li>
      </ul>
      <h2>One learning:</h2>
      <p>Delegate the research and writing to us.  Sometimes it’s hard for a startup to find the time to craft in-depth content. The D-REC Initiative shared data and research, and The Climate Agency ensured the White Paper was written from the perspective of corporate climate pioneers, and immediately understandable by non-experts.</p>
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
          src: '/case-studies/drec-initiative-main.jpg',
          altText: 'D-Rec Initiative',
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
          src: '/case-studies/d-rec-initiative/d-rec-initiative-1.png',
          altText: 'D-Rec Initiative',
          width: 400,
          height: 400,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
  ]
} as CaseStudyContentBlockProps
