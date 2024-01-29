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
  content: `Powertrust`,
  logo: '/images/logos/powertrust.png',
  imageSection: {
    mediaImage: {
      image: {
        src: '/case-studies/powertrust-main.png',
        altText: 'Powertrust',
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
      <p>Powertrust is a North American company which sells renewable energy certificates.  Their challenge was persuading global corporate clients to take a “leap” with their innovative approach.</p>
      <h2>What we did:</h2>
      <ul>
        <li><b>Interviewed climate directors</b> of leading West Coast companies, such as Salesforce</li>
        <li>Crafted a messaging strategy and a strapline: “Small is Powerful”</li>
        <li>Negotiated a partnership with top London design house NB Studio, to launch a fresh and contemporary look and feel</li>
        <li>Wrote and designed a new website as well as <b>press releases, blogs, LinkedIn etc.</b></li>
      </ul>
      <h2>One learning:</h2>
      <p>It’s not about what you do (in this case, blockchain tech to aggregate power generated), it’s about <b><i><u>why</u></i></b> you do it (environmental and social impact in the Global South).</p>
      <blockquote>
        “Sophie and Lisa took an extremely complex topic and made it compelling and digestible. They helped us craft content that will break through the noise”
        <span>
          Paul B, VP Partnerships
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
          src: '/case-studies/powertrust/powertrust_0.gif',
          altText: 'Powertrust',
          width: 350,
          height: 350,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
    {
      mediaImage: {
        image: {
          src: '/case-studies/powertrust-main.png',
          altText: 'Powertrust',
          width: 350,
          height: 350,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
    {
      mediaImage: {
        image: {
          src: '/case-studies/powertrust/powertrust_2.png',
          altText: 'Powertrust',
          width: 350,
          height: 350,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
  ]
} as CaseStudyContentBlockProps
