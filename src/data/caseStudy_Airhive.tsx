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
  content: `Airhive`,
  logo: '/images/logos/airhive.png',
  imageSection: {
    mediaImage: {
      image: {
        src: '/case-studies/airhive-main.png',
        altText: 'Airhive',
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
      <p>Airhive’s key challenge was their lack of bandwidth for marketing, as the founders were working hard growing their DAC startup at speed.  They needed a proposition, a look and feel, a website - but had little availability.</p>
      <h2>What we did:</h2>
      <ul>
      <li>We built a “All-in-one workshop”, an intense 3 hours session with founders to build their proposition and tailor a look and feel that was right for them</li>
      <li>We designed and wrote their website, built their design identity - working autonomously and being protective of Airhive’s time</li>
      <li>We worked side by side with the team, providing a sounding board for press releases and creating assets including their video script</li>
      </ul>
      <h2>One learning:</h2>
      <p>Speed can work, “It actually helped to have to do it so quickly, as we had to be quite instinctual” says Rory Brown, Co-founder.  <b>Find out more about our All in One workshop in this <a href="https://www.linkedin.com/pulse/speediest-workshop-ever-sophie-gallois%3FtrackingId=GiTFZX8Z6YCxanXJXEz0hw%253D%253D/?trackingId=GiTFZX8Z6YCxanXJXEz0hw%3D%3D" target="_blank" title="article">article</a>.</b></p>
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
          src: '/case-studies/airhive/airhive-1.png',
          altText: 'D-Rec Initiative',
          width: 800,
          height: 400,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
  ]
} as CaseStudyContentBlockProps
