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
  subtitle: `An intense workshop spread over 2 half days.`,
  link: {
    href: `mailto:sophie@climateagency.net`,
    children: `Get in touch`,
    color: 'green',
    isExternal: true,
  },
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/Mad-Don.jpeg',
        altText: '"Mad Don", Donal Arabian, Chief of the APOLLO Test Division',
        width: 1102,
        height: 632,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    caption: `Inspired teamwork can achieve the impossible. Here “Mad Don”, Donal Arabian, Chief of the APOLLO Test Division. Credit NASA Archives.`,
  },
  children: [
    `We believe many climate projects need help in terms of business positioning, marketing, and stakeholder strategy. These are fundamentals that can truly help climate projects scale up. `,
    [
      `With elements of business positioning, marketing, behavioural science and stakeholders strategy, with a dash of creativity to inspire you. Plus our very own recommendation tailored to your needs, to help you gain profile and support, landing on your desk within days.
  
        As a non profit dedicated to help climate innovation, we have worked hard to deliver a process which is:
        `,
      <ul key="list">
        <li>
          <b>Accessible</b>: around 10% of the traditional agency/consultancy
          fees for a similar process.
        </li>
        <li>
          <b>Climate-specific</b>: climate solutions projects are our only
          focus. We can share the knowledge gained across the sector.
        </li>
        <li>
          <b>Fast and Intense</b>. The world is on fire, your work is urgent. We
          aim to equip you with the basic tools to boost your profile and
          support within days/weeks.
        </li>
      </ul>,
    ],
  ],
} as AcceleratorBlockProps

export const stakeholders = {
  pageLayout: 'right',
  children: <SpikesIcon />,
  title: `Spotlight Campaigns`,
  content: `We believe there are neglected topics which are critical to climate yet poorly understood by key stakeholders such as politicians, philanthropists, CEOs, Media & influencers etc.
  
  We need to shine a spotlight on some climate stories, to nudge decision-makers to act. For example, key actions needed around Methane, or the role of the ocean as a climate solution.
      
  Facts and figures are not enough: we can invite some of the best creative and strategic minds to help tell these stories in a way which is persuasive, powerful, and relevant for stakeholders.
      
  We are working with founders, scientists and agencies to bring to life these topical stakeholder campaigns.`,
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
  content: `After the workshop, you may feel you need help building assets (website, video), or running a campaign (fundraising, influencers). We can help.
          
  We will either find the right partners to do this for you, negotiate with them to work “at cost”, and help brief them. We are well connected within the agency / creative world and will use our network to help you scale up. Or do it ourselves if we can, charging for our time at cost.`,
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/team-rowing.jpeg',
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
