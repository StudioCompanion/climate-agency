import { OpeningBlockProps } from 'components/Blocks/OpeningBlock'
import { AcceleratorBlockProps } from 'components/Blocks/AcceleratorBlock'
import { ArticleBlockProps } from 'components/Blocks/ArticleBlock'

import SpikesIcon from '../assets/Spikes.svg'
import SunIcon from '../assets/Sun.svg'

export const intro = {
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/people_on_mountain.png',
        altText: 'People sitting on a mountain',
        width: 765,
        height: 636,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
  },
  content: `We'd like you to feel as though you have a CMO at your side, working with you to stand out, persuade, and scale.`,
  layout: `large`,
} as OpeningBlockProps

export const accelerator = {
  title: `The Climate Action Accelerator`,
  subtitle: `Our accelerator module pulls forward what is traditionally a 3 to 6 months process into 3 to 6 weeks.`,
  link: {
    href: `mailto:sophie@climateagency.net`,
    children: `Get in touch`,
    color: 'stone',
    isExternal: true,
  },
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/satelite.jpg',
        altText: 'Satellite capture from United States Geological Survey',
        width: 1102,
        height: 632,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    caption: `Satellite capture from United States Geological Survey, who provide reliable scientific information to describe and understand the Earth.'`,
  },
  children: [
    'It consists of 2 half-day workshops, followed by a full recommendation.',
    <strong key="strong1">Key deliverables</strong>,
    <ul key="list1">
      <li>
        A strategic planning recommendation (unique mission, messaging, look and
        feel)
      </li>
      <li>
        A stakeholder strategy (who to influence, how, with what call to action)
      </li>
      <li>
        A top line, action-focused communication plan (with focus on fundraising
        , advocacy, engagement, depending on your needs)
      </li>
    </ul>,
    'As a non-profit dedicated to help climate innovation, we have worked hard to deliver a process which is:',
    <dl key="list2">
      <dt>
        <b>Accessible</b>
      </dt>
      <dd>
        around 10% of the traditional agency/consultancy fees for a similar
        process.
      </dd>
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
  pageLayout: 'right',
  children: <SpikesIcon />,
  title: `Stakeholder Campaigns on neglected climate topics`,
  content: `We need to shine a spotlight on some climate stories, to nudge decision-makers. For example, the urgency around Methane, or the role of the ocean as a climate solution.

  Facts and figures are not enough: we want to invite some of the best creative minds to help tell these stories.  Time and resources are short to communicate with the wider public, we plan to focus on persuading key stakeholders.`,
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/ripples.jpg',
        altText: 'Ripples in water',
        width: 541,
        height: 686,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
  },
} as ArticleBlockProps

export const partners = {
  pageLayout: 'left',
  children: <SunIcon />,
  title: `Helping you plan, connect and deliver with great partners`,
  content: `After the Accelerator, if you need help creating assets (website, video) or running a campaign, we can help. Thanks to our little black book, we will connect you to the right partners.`,
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/team-rowing.jpg',
        altText: 'People gathering',
        width: 989,
        height: 686,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    caption: `Never has teamwork been more critical than when addressing the climate emergency.`,
  },
} as ArticleBlockProps
