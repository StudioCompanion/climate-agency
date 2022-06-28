import { OpeningBlockProps } from 'components/Blocks/OpeningBlock'
import { NetZeroBlockProps } from 'components/Blocks/NetZeroBlock'
import { ClimateCausesBlockProps } from 'components/Blocks/ClimateCausesBlock'
import { ShortArticleBlockProps } from 'components/Blocks/ShortArticleBlock'
import { TestimonialsBlockProps } from 'components/Blocks/TestimonialsBlock'
import { MissionBlockProps } from 'components/Blocks/MissionBlock'
import { TeamBlockProps } from 'components/Blocks/TeamBlock'
import { CtaBlockProps } from 'components/Blocks/CtaBlock'

export const hero = {
  mediaImage: {
    image: {
      src: '/images/forest_on_fire.png',
      altText: 'Hero image',
      width: 653,
      height: 636,
    },
    layout: 'responsive',
    objectFit: 'cover',
  },
  content: `Truth is, we’re going to need some big ideas to keep our world habitable.\n 
  These ideas need profile and they need support. Urgently.\n
    We are a marketing strategy consultancy, non profit, and dedicated to help climate projects scale up.`,
  layout: 'default',
} as OpeningBlockProps

export const netZero = {
  title: `One third of CEOs in the UK are unsure what Net Zero means.`,
  content: `There are urgent messages to tell, but the scientific community is speaking a different language to those with the power to make a difference in climate.
  
  The narrative is impenetrable and the maths mind–bendingly complex.
  
  Thousands of innovative climate solutions are in the making, exploring everything from extracting CO2 from the atmosphere, to preserving ice at the poles. Some of these could make a huge difference in the years to come, if they get the resources to test and scale.
  
  Global corporations and brands have evolved for decades the marketing techniques to persuade, engage and build trust.  But, with limited resources, Climate projects find it hard to access these strategic skills. Yet the world is on fire, and they need results with urgency.`,
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/Greenland_fjords.png',
        altText: 'Greenland Fjords',
        width: 1326,
        height: 784.73,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    caption: `Greenland fjords receive considerable amounts of glacial meltwater discharge from the Greenland Ice Sheet due to climate change. This is Scoresby Sund, the world’s largest fjord system.`,
  },
} as NetZeroBlockProps

export const climateCauses = {
  title: `Just 2% of global charity giving goes to climate causes.`,
  content: `The Climate Agency harness their business leadership and marketing expertise to help climate innovators, startups, scientists and small NGOs to influence the right people, with the relevant message.
  
  We'd like you to feel as though you have a CMO at your side, working with you to stand out, persuade, and scale.`,
  link: {
    href: `mailto:`,
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
    caption: `Humans relationship with Nature must change. The scale and speed at which scientists say we must effect that change are hard to grasp for most of us. Can we adapt in time to protect our world?`,
  },
  rightImage: {
    image: {
      src: '/images/hand_in_water.png',
      altText: 'Hand in the water',
      width: 429,
      height: 513,
    },
    layout: 'responsive',
    objectFit: 'cover',
  },
} as ClimateCausesBlockProps

export const ourBackground = {
  textPosition: 'left',
  header: `Our background`,
  content: `We are a team of experts in business strategy, marketing and communication, with a strong track record in leading global brands and charities.`,
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/satellite_capture.jpg',
        altText: 'Satellite capture',
        width: 343,
        height: 348,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    caption: `Satellite capture from United States Geological Survey, who provide reliable scientific information to describe and understand the Earth.`,
  },
} as ShortArticleBlockProps

export const testimonials = {
  title: `We have been very fortunate to work with many great organisations.`,
  logos: [
    {
      src: '/images/logos/ov.png',
      altText: 'Ocean Visions logo',
      width: 213,
      height: 49,
    },
    {
      src: '/images/logos/un.png',
      altText: 'United Nations logo',
      width: 72,
      height: 61,
    },
    {
      src: '/images/logos/notpla.png',
      altText: 'Notpla logo',
      width: 200,
      height: 47,
    },
    {
      src: '/images/logos/terra.png',
      altText: 'Terra Carta logo',
      width: 129,
      height: 59,
    },
    {
      src: '/images/logos/dacc.png',
      altText: 'Direct Air Capture Coallition logo',
      width: 207,
      height: 55,
    },
    {
      src: '/images/logos/space10.png',
      altText: 'Space 10 logo',
      width: 195,
      height: 37,
    },
  ],
  testimonials: [
    {
      content: `“Climate organizations will be more effective by developing a brand that captures their voice and mission. The Climate Agency team has a great knowledge of branding and climate change to make this happen. Their sessions are impactful and actionable”`,
      signature: `Ben Rubin, Executive Director`,
      organisation: `Carbon Business Council`,
    },
    {
      content: `“It’s amazing. Totally useful to have somebody with a fresh perspective guiding us. After these 2 workshops I will be revising our website and marketing assets”`,
      signature: `Lena Mechenkova, Communication Director`,
      organisation: `Vlinder Climate`,
    },
    {
      content: `“Sophie’s wealth of experience, sound judgement and creative thinking have been integral to the successful launch of the Direct Air Capture Coalition.“`,
      signature: `Jason Hochman, Co-Founder & Senior Director`,
      organisation: `Direct Air Capture Coalition`,
    },
  ],
} as TestimonialsBlockProps

export const mission = {
  header: `Our mission`,
  content: `We believe in human ingenuity and the power of ideas and we are exclusively focused on climate.`,
} as MissionBlockProps

export const services = {
  textPosition: 'right',
  header: `Our services don't cost the earth.`,
  content: `We are non-profit, highly cost effective and entrepreneurial. \n
  
      Through our accelerator workshops and stakeholder campaigns, we work with you to help you get results and scale up.`,
  link: {
    href: `#`,
    children: `Learn about our accelerator`,
    color: `green`,
    isExternal: false,
  },
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/raindrops.png',
        altText: 'Raindrops',
        width: 653,
        height: 646,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    caption: `Pockets of methane trapped within Canada’s frozen Lake Abraham.  Methane has around 80 times the warming power of CO2 when it reaches the atmosphere. The release of vast quantities of methane held by melting ice sheets and permafrost would be a tipping point for our climate.`,
  },
} as ShortArticleBlockProps

export const team = {
  title: `Our team works with inspiring advisors, to help us tackle the biggest communication problem of all times.`,
  teamMembers: [
    [
      {
        mediaImage: {
          image: {
            src: '/team-members/sophie.png',
            altText: 'Sophie Gallois',
            width: 317,
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
          href: `#`,
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
          href: `#`,
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
            src: '/team-members/cyrill.png',
            altText: 'Cyrill Gutsch',
            width: 317,
            height: 369,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Cyrill Gutsch`,
        role: `Advisor`,
        description: `Cyrill is the founder of Parley for the Oceans, a nonprofit environmental organization that focuses on protection of the oceans. \n
                Gutsch spoke at the United Nations in June 2018, where he argued that "we have to let plastic go" and is an advocate for the “AIR” strategy, calling for the Avoidance, Interception and Redesigning of the sources of plastic pollution.`,
        socialLink: {
          href: `#`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
      {
        mediaImage: {
          image: {
            src: '/team-members/anab.png',
            altText: 'Anab Jain',
            width: 317,
            height: 369,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Anab Jain`,
        role: `Advisor`,
        description: `Anab is a designer, futurist, filmmaker and educator. As Co-founder and Director of Superflux, she hopes to realise the vision of the Studio as a new kind of design practice, responsive to the challenges and opportunities of the twenty-first century.\n
        Anab has gained international recognition for her work and commentary on design, innovation, emerging technologies and complex futures.`,
        socialLink: {
          href: `#`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
      {
        mediaImage: {
          image: {
            src: '/team-members/myles.png',
            altText: 'Myles Palmer',
            width: 317,
            height: 369,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Myles Palmer`,
        role: `Advisor`,
        description: `Myles is the founder of Companion, a digital product design studio that partners with start-ups, brands and companies to create new futures. \n
        Their mission is to enhance the world around them and create a better future for people and planet, which is why they donate 5% of their annual revenue to charitable and non-profit causes.`,
        socialLink: {
          href: `#`,
          children: `LinkedIn`,
          color: `transparent`,
          isExternal: true,
        },
      },
    ],
  ],
} as TeamBlockProps

export const cta = {
  content: `Together, we can crack communication around climate solutions. \n
  If you believe that climate projects need funding and support by the people who can make a difference, please get in touch.`,
  leftLink: {
    href: `mailto:`,
    children: `I’m working in climate and need help!`,
    color: `green`,
    isExternal: false,
  },
  rightLink: {
    href: `mailto:`,
    children: `I’m working in the creative industry and want to help!`,
    color: `stone`,
    isExternal: false,
  },
} as CtaBlockProps
