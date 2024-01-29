import { OpeningBlockProps } from 'components/Blocks/OpeningBlock'
import { AcceleratorBlockProps } from 'components/Blocks/AcceleratorBlock'
import { ArticleBlockProps } from 'components/Blocks/ArticleBlock'
import { Link } from 'components/Links/Link'
import { NetZeroBlockProps } from 'components/Blocks/NetZeroBlock'

import SpikesIcon from '../assets/Spikes.svg'

export const intro = {
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/what_we_do_nasa.jpg',
        altText: 'Apollo 11 Lunar Module ascent, 1969, NASA Images',
        width: 765,
        height: 636,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    innerCaption: `Apollo 11 Lunar Module ascent, 1969, NASA Images`,
  },
  content: (
    <>
      <p>
        Time and time again, <b><i>human ingenuity</i></b> has solved the most complex problems.  But climate change is our biggest challenge yet.
      </p>
      <p>
      We help climate startups get lift-off.
      We're fast, accessible & protective of your time.
      </p>
    </>
  ),
  link: {
    href: `/case-studies`,
    children: `See our case studies`,
    color: 'green',
    isExternal: false,
  },
  layout: `default`,
} as OpeningBlockProps

export const accelerator = {
  className: 'twoImages',
  title: `The Climate Agency Stratcom Programme`,
  subtitle: `Our proprietary Stratcom programme pulls forward what is traditionally a 3 to 6 months process into 3 to 6 weeks.`,
  link: {
    href: `mailto:sophie@climateagency.net`,
    children: `Get in touch`,
    color: 'stone',
    isExternal: true,
  },
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/accelerator_1.png',
        altText: 'The Climate Agency Stratcom Programme',
        width: 1102,
        height: 632,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
  },
  secondImageSection: {
    mediaImage: {
      image: {
        src: '/images/accelerator_2.png',
        altText: 'The Climate Agency Stratcom Programme',
        width: 1102,
        height: 632,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
  },
  children: [
    '2 half-day workshops, followed by a full recommendation:',
    <strong key="strong1">Key deliverables</strong>,
    <ul key="list1">
      <li>
        A strategic planning recommendation (unique mission, messaging, look and
        feel)
      </li>
      <li>
        A stakeholder strategy: Who to influence, with what tools and what call to action?  How to build <b><u>trust</u></b>?
      </li>
      <li>
        A communication strategy: including your communication guidelines, your do’s and don’ts, your action-led priorities, your recommended toolbox
      </li>
    </ul>,
    'As a non-profit dedicated to help climate innovation, we have worked hard to deliver a process which is:',
    <dl key="list2">
      <dt>
        <b>Accessible</b>
      </dt>
      <dd>At a fraction of the cost of a traditional agency.</dd>
      <dt>
        <b>Climate-specific</b>
      </dt>
      <dd>
        climate solutions projects are our only focus. We can share the
        knowledge gained across the sector.
      </dd>
      <dt>
        <b>Fast and Intense</b>
      </dt>
      <dd>
        The world is on fire, your work is urgent. We aim to equip you with the
        basic tools to boost your profile and support within days/weeks.
      </dd>
    </dl>,
  ],
} as AcceleratorBlockProps

export const stakeholders = {
  className: 'noMarginTop',
  pageLayout: 'right',
  children: <SpikesIcon />,
  title: `Stakeholder Campaigns on neglected climate topics`,
  content: (
    <>
    <p>We need to shine a spotlight on some climate stories, <b>such as</b> the urgency around methane, or the role of the ocean as a climate solution.</p>

  <p>We bring global experts from many backgrounds together, to spark a narrative, a movement.  For example, we initiated a global workshop on <b>methane from cattle</b> codenamed Project M-Force, gathering 24 experts with different perspectives at the end of 2023.</p>
  </>
  ),
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/what_we_do_cow.png',
        altText: 'Methane from cattle',
        width: 432,
        height: 432,
      },
      layout: 'responsive',
      objectFit: 'contain',
    },
    innerCaption: 'Shutterstock AI'
  },
} as ArticleBlockProps

export const partners = {
  className: 'extraTopPadding smallImg',
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/partners_1.jpg',
        altText: 'The Climate Agency',
        width: 968,
        height: 1026,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    innerCaption: 'Shutterstock AI',
  },
  content: (
    <>
      <p>
        <b>We bring your mission to life</b>, through strategic advice, best in class marketing, copywriting, design.
      </p>
      <p>Because you need to engage different audiences as you deploy, we can be an extra resource to help you accelerate.</p>
    </>
  ),
  layout: 'default',
} as OpeningBlockProps

export const partnersSecondary = {
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/partners_2.jpg',
        altText: 'The Climate Agency',
        width: 1307,
        height: 1307,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
  },
  className: 'blackBackground',
  content: (
    <>
      <p>
      Helping you persuade through website, pitch decks, videos, white papers, social media campaigns…
      </p>

      <p>
      We’ve built a little black book of top class creative partners who’ve agreed our terms, for climate.
      </p>
    </>
  ),
  link: {
    href: `/case-studies`,
    children: `Case studies`,
    color: `green`,
    isExternal: false,
  },
  layout: 'default',
  textPosition: 'left'
} as OpeningBlockProps

export const netZero = {
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/raindrops.png',
        altText: 'Raindrops',
        width: 1989,
        height: 1170,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    innerCaption: 'Pockets of methane trapped within Canada’s frozen Lake Abraham.  Methane has around 80 times the warming power of CO2 when it reaches the atmosphere. The release of vast quantities of methane held by melting ice sheets and permafrost would be a tipping point for our climate.',
    caption: (
      <Link
        href="Pockets of methane trapped within Canada’s frozen Lake Abraham.  Methane has around 80 times the warming power of CO2 when it reaches the atmosphere. The release of vast quantities of methane held by melting ice sheets and permafrost would be a tipping point for our climate."
        isExternal
        color="captionWhite"
      >
        John Bakator
      </Link>
    ),
  },
} as NetZeroBlockProps
