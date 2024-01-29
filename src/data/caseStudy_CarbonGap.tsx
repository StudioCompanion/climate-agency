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
  content: `Carbon Gap`,
  logo: '/images/logos/carbongap.png',
  imageSection: {
    mediaImage: {
      image: {
        src: '/case-studies/carbon-gap-main.png',
        altText: 'Carbon Gap',
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
      <p>Brussels-based Carbon Gap is a Climate non-profit focused on unlocking the potential for carbon removal mainly through policy advocacy and thought leadership work around the EU.  They needed a full marketing strategy to support their expansion.</p>
      <h2>What we did:</h2>
      <ul>
        <li>We supported the Carbon Gap team for 5 months, as <b>an outsourced marketing team</b></li>
        <li>We wrote and relaunched their website, created presentation templates, as well as bespoke formats and tools for advocacy material for the EU</li>
        <li>We trained the team, advised on the launch of papers such as  The State of CDR report with CO²RE, and helped with the recruitment of their communication team</li>
      </ul>
      <h2>One learning:</h2>
      <p>In fast growing team, with new staff joining every month, you can work with us on a “Side by Side” basis.  We train young staff on messaging strategy and communication guidelines, and <b>provide senior expertise as the organization is building capacity</b>.</p>
      <blockquote>
        “The Climate Agency has without doubt been a core part of our scale-up story”
        <span>
          Alexander Makela Policy Director, Carbon Gap
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
          src: '/case-studies/carbon-gap/carbon-gap-1.png',
          altText: 'Carbon Gap',
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
          src: '/case-studies/carbon-gap-main.png',
          altText: 'Carbon Gap',
          width: 400,
          height: 400,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
  ]
} as CaseStudyContentBlockProps
