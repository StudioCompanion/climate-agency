import { OpeningBlockProps } from 'components/Blocks/OpeningBlock'
import { NetZeroBlockProps } from 'components/Blocks/NetZeroBlock'
import { ClimateCausesBlockProps } from 'components/Blocks/ClimateCausesBlock'
import { ShortArticleBlockProps } from 'components/Blocks/ShortArticleBlock'
import { TestimonialsBlockProps } from 'components/Blocks/TestimonialsBlock'
import { TeamBlockProps } from 'components/Blocks/TeamBlock'
import { CtaBlockProps } from 'components/Blocks/CtaBlock'
import { Link } from 'components/Links/Link'

export const hero = {
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/earth_nasa.jpg',
        altText: 'NASA Airborne Campaigns Focus on climate Impacts in the Arctic. Nasa images.',
        width: 1307,
        height: 1307,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    innerCaption: `NASA/Goddard Space Flight Center/Reto Stöckli`,
    caption: (
      <Link
        href="https://nasa.gov"
        isExternal
        color="captionBlack"
      >
        Nasa
      </Link>
    ),
  },
  content: (
    <>
      <p>
        We’re 100% focused on the climate sector.
      </p>

      <p>
        As a boutique marketing consultancy, we help climate tech <b>persuade and scale</b>.
      </p>

      <p>
        A non profit, accessible to early-stage organisations.
      </p>
    </>
  ),
  leftLink: {
    href: `/case-studies`,
    children: `See our case studies`,
    color: `green`,
    isExternal: false,
  },
  rightLink: {
    href: `/what-we-do`,
    children: `How we could help`,
    color: `green`,
    isExternal: false,
  },
  layout: 'default',
} as OpeningBlockProps

export const howWeWork = {
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/earth_ai_shutterstock_2.jpg',
        altText: 'How we work',
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
        Climate tech needs the support of many stakeholders.
      </p>

      <p>
      This is why we help innovators reach <b><i>outside of the expert bubble</i></b>, to investors, decision makers, influencers.
      </p>
    </>
  ),
  link: {
    href: `/what-we-do`,
    children: `How we work`,
    color: `green`,
    isExternal: false,
  },
  layout: 'default',
  textPosition: 'left'
} as OpeningBlockProps

export const netZero = {
  title: (
    <>
    Climate Communication is not working. <b><i>Let's change this</i></b>
    </>
  ),
  content: `Outside of the climate echo chamber, people are confused by the jargon and mind-bending complexity. For example, only 2% <sup>(2)</sup> of global charity giving goes to climate.

  This matters, climate start-ups need to persuade investors, customers and communities. We can help, making marketing techniques accessible and tailored to climate.`,
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/Greenland_fjords.jpg',
        altText: 'Greenland Fjords',
        width: 1989,
        height: 1170,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    innerCaption: `This is Scoresby Sund. Greenland fjords receive considerable amounts of glacial meltwater discharge due to climate change. `,
    caption: (
      <Link
        href="https://unsplash.com/@anniespratt/"
        isExternal
        color="captionWhite"
      >
        Annie Spratt
      </Link>
    ),
  },
} as NetZeroBlockProps

export const climateCauses = {
  title: `Just 2% of global charity giving goes to climate causes.<sup>(2)</sup>`,
  content: `At the Climate Agency, we harness business leadership and marketing strategy to help climate innovators. It’s about talking to the right people with the right message and - importantly - the best call to action. You’ll have a CMO at your side, working to help you stand out, fundraise and scale.`,
  link: {
    href: `mailto:sophie@climateagency.net`,
    children: `Let us help you`,
    color: 'green',
    isExternal: true,
  },
  leftImage: {
    mediaImage: {
      image: {
        src: '/images/mountain_peak.jpg',
        altText: 'Person looks at a mountain',
        width: 541,
        height: 650,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    innerCaption: `Humans relationship with Nature must change. The scale and speed at which scientists say we must effect that change are hard to grasp for most of us. Can we adapt in time to protect our world?`,
    caption: (
      <Link
        href="https://unsplash.com/@therawhunter"
        isExternal
        color="captionBlack"
      >
        Massimiliano Morosinotto
      </Link>
    ),
  },
  rightImage: {
    mediaImage: {
      image: {
        src: '/images/hand_in_water.jpg',
        altText: 'Hand in the water',
        width: 429,
        height: 513,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    caption: (
      <Link
        href="https://unsplash.com/@eliapelle"
        isExternal
        color="captionBlack"
      >
        Elia Pellegrini
      </Link>
    ),
  },
} as ClimateCausesBlockProps

export const ourBackground = {
  className: 'blackBackground',
  textPosition: 'left',
  header: `Our background`,
  content: `We are a team of experts in marketing and communications, with prestigious careers leading global consumer brands and charities.`,
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/Mad-Don.jpeg',
        altText: 'Mad Don',
        width: 343,
        height: 348,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    innerCaption: `Inspired teamwork can achieve the impossible. Here “Mad Don”, Donal Arabian, Chief of the Apollo Test Division.`,
    caption: (
      <Link
        href="https://www.nasa.gov/multimedia/videogallery/Video_Gallery_Archives.html"
        isExternal
        color="captionBlack"
      >
        NASA Archives
      </Link>
    ),
  },
} as ShortArticleBlockProps

export const testimonials = {
  title: `We have worked with great organizations.`,
  logos: [
    {
      src: '/images/logos/Carbon-Business-Council.png',
      altText: 'Carbon Business logo',
      width: 134.4,
      height: 57.6,
    },
    {
      src: '/images/logos/Climate-Repair.png',
      altText: 'Climate Repair logo',
      width: 110,
      height: 105.3,
    },
    {
      src: '/images/logos/DAC-V4-HigherType.png',
      altText: 'Direct Air Capture Coalition logo',
      width: 200,
      height: 75,
    },
    {
      src: '/images/logos/Ocean-Visions.png',
      altText: 'Ocean Visions logo',
      width: 200,
      height: 46.1,
    },
    {
      src: '/images/logos/Vlinder.svg',
      altText: 'Vlinder logo',
      width: 195,
      height: 55,
    },
    {
      src: '/images/logos/carbongap.png',
      altText: 'Carbon Gap logo',
      width: 200,
      height: 62.8,
    },
    {
      src: '/images/logos/powertrust.png',
      altText: 'Powertrust logo',
      width: 135,
      height: 52,
    },
    {
      src: '/images/logos/zulu.png',
      altText: 'Zulu Ecosystems logo',
      width: 200,
      height: 48.4,
    },
    {
      src: '/images/logos/ucaneo.png',
      altText: 'Ucaneo logo',
      width: 200,
      height: 78.1,
    },
    {
      src: '/images/logos/kita.png',
      altText: 'Kita logo',
      width: 135,
      height: 56,
    },
    {
      src: '/images/logos/airhive.png',
      altText: 'Airhive logo',
      width: 150,
      height: 56,
    },
    {
      src: '/images/logos/carbon-to-stone.png',
      altText: 'Carbon to Stone logo',
      width: 150,
      height: 72,
    },
    {
      src: '/images/logos/pv-radar.png',
      altText: 'PVRadar logo',
      width: 200,
      height: 28,
    },
    {
      src: '/images/logos/jolt.png',
      altText: 'Jolt Solutions logo',
      width: 87.7,
      height: 100,
    },
    {
      src: '/images/logos/bluemethane.png',
      altText: 'Blue Methane logo',
      width: 200,
      height: 55,
    },
  ],
  testimonials: [
    {
      content: `“The Climate Agency did a phenomenal job telling our story.  Their industry knowledge was critical to establishing our unique voice”`,
      signature: `Sravanth Gadikota, CEO`,
      organisation: `Carbon to Stone`,
    },
    {
      content: `“Sophie and Lisa took an extremely complex topic and made it digestible. They helped us craft content that will break through the noise”`,
      signature: `Paul Birkelo, Head of Operations`,
      organisation: `Powertrust`,
    },
    {
      content: `“The Climate Agency has without doubt been a core part of our scale-up story.”`,
      signature: `Alexander Makela, Policy Director`,
      organisation: `Carbon Gap`,
    },
    {
      content: `“The Climate Agency team has a great knowledge of branding and climate change to make this happen. Their sessions are impactful and actionable.”`,
      signature: `Ben Rubin, Executive Director`,
      organisation: `Carbon Business Council`,
    },
    {
      content: `“It’s amazing. After these 2 workshops I will be revising our website and marketing assets.”`,
      signature: `Lena Mechenkova, Communication Director`,
      organisation: `Vlinder Climate`,
    },
    {
      content: `“Sophie’s wealth of experience, sound judgement and creative thinking have been integral to the successful launch of the Direct Air Capture Coalition.”`,
      signature: `Jason Hochman, Co-Founder & Senior Director`,
      organisation: `Direct Air Capture Coalition`,
    },
    {
      content: `“The Climate Agency bring a huge amount of experience which is a huge time saving benefit.”`,
      signature: `Natalia Dorfman, CEO and Co-Founder`,
      organisation: `Kita`,
    },
    {
      content: `“The Climate Agency helped us distil down our perspective on building out our tech into really crisp and clear language. They’re great!”`,
      signature: `Rory Brown, Co-founder and CEO`,
      organisation: `Airhive`,
    },
  ],
} as TestimonialsBlockProps

export const services = {
  textPosition: 'right',
  header: `Our services don't cost the earth.`,
  content: `We are non profit, highly cost-effective and entrepreneurial.

  We have designed unique tools to help you leapfrog traditional processes and get results fast.`,
  link: {
    href: `/what-we-do`,
    children: `What we do`,
    color: `green`,
    isExternal: false,
  },
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/mountain_peak.jpg',
        altText: 'Raindrops',
        width: 653,
        height: 646,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    innerCaption: `Humans relationship with Nature must change. The scale and speed at which scientists say we must effect that change are hard to grasp for most of us. Can we adapt in time to protect our world?`,
    caption: (
      <Link
        href="https://unsplash.com/@therawhunter"
        isExternal
        color="captionBlack"
      >
        Massimiliano Morosinotto
      </Link>
    ),
  },
} as ShortArticleBlockProps

export const team = {
  title: `Our team works with inspiring advisors to tackle the biggest communication problem of all time.`,
  teamMembers: [
    [
      {
        mediaImage: {
          image: {
            src: '/team-members/sophie.png',
            altText: 'Sophie Gallois',
            width: 318,
            height: 369,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Sophie Gallois`,
        role: `Co-Founder`,
        description: `Founder Sophie Gallois is harnessing everything she learnt in a leadership career that spans global brands and charities, including Unicef UK, to the service of climate action. \n
        She is a trustee of the Direct Air Capture Coalition and an advisor to Climate Science.`,
        socialLink: {
          href: `https://www.linkedin.com/in/sophie-gallois/`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
      {
        mediaImage: {
          image: {
            src: '/team-members/lisa.png',
            altText: 'Lisa Woodward',
            width: 317,
            height: 369,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Lisa Woodward`,
        role: `Co-Founder`,
        description: `With a branding career that spans over 30 years, Lisa  brings a strategic view and pragmatic approach to The Climate Agency. \n
        For the last decade, she has been running strategic workshops with start-ups and charities, as well as supporting them with their creative implementation.`,
        socialLink: {
          href: `https://www.linkedin.com/in/lisa-woodward-marketing/`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
      {
        mediaImage: {
          image: {
            src: '/team-members/katie.jpg',
            altText: 'Katie Parker',
            width: 317,
            height: 369,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Katie Parker`,
        role: `Associate Director`,
        description: `Associate director of the Climate Agency.  Katie has 25 years of marketing and sustainability experience, including L’Oreal, Diageo and McDonald’s. \n
        She was a management consultant with McKinsey and spent two years at the Cambridge Centre for Climate Repair, with a focus on CDR.`,
        socialLink: {
          href: `https://uk.linkedin.com/in/katieparker`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
    ],
    [
      {
        mediaImage: {
          image: {
            src: '/team-members/guy.jpeg',
            altText: 'Guy Lomax',
            width: 1427,
            height: 1661,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Guy Lomax`,
        role: `Advisor`,
        description: `Guy has spent the last decade studying promising climate change solutions. He has held research roles with Virgin, The Nature Conservancy and the University of Oxford, and is currently completing a PhD in Environmental Data Science at the University of Exeter.`,
        socialLink: {
          href: `https://www.linkedin.com/in/guy-lomax-climate/`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
      {
        mediaImage: {
          image: {
            src: '/team-members/ivo.jpeg',
            altText: 'Ivo Vlaev',
            width: 1427,
            height: 1661,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Ivo Vlaev`,
        role: `Advisor`,
        description: `Ivo Vlaev is a Professor of Behavioural Science, Warwick Business School, University of Warwick. He received a DPhil (PhD) in Experimental Psychology from the University of Oxford.

        Ivo is a co-author of the famous UK Cabinet Office MINDSPACE report, which provides a framework for designing effective policy utilising behavioural sciences (also known as nudge theory) and helps public and private organisations develop and apply lessons from behavioural science.`,
        socialLink: {
          href: `https://www.wbs.ac.uk/about/person/ivo-vlaev`,
          children: `WBS`,
          color: `transparent`,
          isExternal: true,
        },
      },
      {
        mediaImage: {
          image: {
            src: '/team-members/david.jpeg',
            altText: 'David Addison',
            width: 1427,
            height: 1661,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `David Addison`,
        role: `Advisor`,
        description: `David Addison works at Virgin on a range of climate, environment, purpose, and sustainability efforts. For more than 12 years he has been working with and learning from others across academia, business, civil society, governments, and non profits on scalable, sustainable carbon removal.

        He also serves as an advisor to <a href="https://climatescience.org/" rel="noopener noreferrer" target="_blank">ClimateScience.org</a>, <a href="https://nori.com/" rel="noopener noreferrer" target="_blank"> Nori Inc.</a>, and a number of other initiatives. Previously David was also an advisor to initiatives including <a href="https://carbon180.org/" rel="noopener noreferrer" target="_blank">Carbon180</a> and the <a href="https://drawdown.org/the-book" rel="noopener noreferrer" target="_blank">New York Times best-selling book: Drawdown</a>.`,
        socialLink: {
          href: `https://www.linkedin.com/in/davidaddison350/`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
      {
        mediaImage: {
          image: {
            src: '/team-members/dipa.jpg',
            altText: 'Dipa Shah',
            width: 1427,
            height: 1661,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Dipa Shah`,
        role: `Advisor`,
        description: `A Senior Finance Executive, Dipa has extensive and successful experience of raising funds for businesses as well as refinancing. She is currently head of Finance, Strategy & Transformation for a UK NGO and director of a consumer good startup.`,
        socialLink: {
          href: `https://uk.linkedin.com/in/dipa-shah-née-jaintilal-21b6b99`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
      {
        mediaImage: {
          image: {
            src: '/team-members/amanda.jpeg',
            altText: 'Amanda Hamilton-Stanley',
            width: 1427,
            height: 1661,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Amanda Stanley`,
        role: `Advisor`,
        description: `As a General Counsel of a major international business, trustee of Charities and pensions boards as well as coach, Amanda Stanley brings a wealth of experience with a keen focus on compliance and ESG.`,
        socialLink: {
          href: `https://www.linkedin.com/in/amanda-hamilton-stanley/`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
      {
        mediaImage: {
          image: {
            src: '/team-members/myles.jpg',
            altText: 'Myles Palmer',
            width: 1428,
            height: 1661,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Myles Palmer`,
        role: `Advisor`,
        description: `Myles is a Creative Director and Associate lecturer with over ten years experience working with startups and businesses.  He is passionate about how design & communication can shape the world around us for the better.  He recently launched Pair Up, a platform for creatives to offer time in the spirit of learning.`,
        socialLink: {
          href: `https://www.linkedin.com/in/myles-palmer-b1b70519/`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
    ],
  ],
} as TeamBlockProps

export const cta = {
  content: `Find out how we can help: from defining your core message, developing your influencing strategy, crafting your website, designing materials or building your thought-leadership campaign.`,
  leftLink: {
    href: `/case-studies`,
    children: `See our case studies`,
    color: `green`,
    isExternal: false,
  },
  mediaImages: [
    {
      mediaImage: {
        image: {
          src: '/images/cta-band/powertrust.gif',
          altText: 'Powertrust',
          width: 300,
          height: 200,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
    {
      mediaImage: {
        image: {
          src: '/images/cta-band/small-is-scalable.png',
          altText: 'Small is Scalable',
          width: 300,
          height: 200,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
    {
      mediaImage: {
        image: {
          src: '/images/cta-band/carbon-gap.png',
          altText: 'Carbon Gap',
          width: 300,
          height: 200,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
    {
      mediaImage: {
        image: {
          src: '/images/cta-band/powertrust-square.png',
          altText: 'Powertrust',
          width: '300',
          height: 200,
        },
        layout: 'intrinsic',
        objectFit: 'contain',
      }
    },
    {
      mediaImage: {
        image: {
          src: '/images/cta-band/carbon-to-stone.png',
          altText: 'Carbon to Stone',
          width: 300,
          height: 200,
        },
        layout: 'responsive',
        objectFit: 'contain',
      }
    },
  ]
} as CtaBlockProps
