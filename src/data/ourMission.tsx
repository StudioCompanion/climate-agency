import { OpeningBlockProps } from 'components/Blocks/OpeningBlock'
import { NetZeroBlockProps } from 'components/Blocks/NetZeroBlock'
import { ClimateCausesBlockProps } from 'components/Blocks/ClimateCausesBlock'
import { ShortArticleBlockProps } from 'components/Blocks/ShortArticleBlock'
import { TestimonialsBlockProps } from 'components/Blocks/TestimonialsBlock'
import { MissionBlockProps } from 'components/Blocks/MissionBlock'
import { TeamBlockProps } from 'components/Blocks/TeamBlock'
import { CtaBlockProps } from 'components/Blocks/CtaBlock'

export const hero = {
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/earth_nasa.png',
        altText: 'Hero image',
        width: 653,
        height: 636,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    caption: `NASA/Goddard Space Flight Center/Reto Stöckli`,
  },
  content: `Truth is, we’re going to need some big ideas to keep our world habitable.\n 
  These ideas need profile and they need support. Urgently.\n
  We are a marketing strategy consultancy, non profit, and dedicated to help climate projects scale up.`,
  layout: 'default',
} as OpeningBlockProps

export const netZero = {
  title: `One third of CEOs in the UK are unsure what Net Zero means.`,
  content: `Climate communication is not working. The language is impenetrable and the maths mind-bendingly complex.
  
  Thousands of innovative climate solutions are in the making, exploring everything from extracting CO2 from the atmosphere, to preserving ice at the poles. Some of these could make a huge difference in the years to come, if they get the resources to test and scale.
  
  Global corporations and brands have evolved for decades the marketing techniques to persuade, engage and build trust.  But, with limited resources, Climate projects find it hard to access these strategic skills. Yet the world is on fire, and they need results with urgency.`,
  imageSection: {
    mediaImage: {
      image: {
        src: '/images/Greenland_fjords.png',
        altText: 'Greenland Fjords',
        width: 1989,
        height: 1170,
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
      src: '/images/logos/DirectAirCaptureCoalition.png',
      altText: 'Direct Air Capture Coalition logo',
      width: 150,
      height: 56.25,
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
  content: `We are non-profit, highly cost-effective and entrepreneurial.
  
  Through our accelerator workshops and stakeholder campaigns, we help you leapfrog traditional processes to get results fast.`,
  link: {
    href: `/what-we-do/#accelerator`,
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
    ],
    [
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
        description: `David Addison, leading climate, innovation and Net Zero at the Virgin Group.  For more than twelve years David has been working to help explore, evaluate, and evolve carbon removal solutions.  Advisor to Nori, Carbon 180, Project Drawdown.`,
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
            src: '/team-members/fern.jpg',
            altText: 'Fern Miller',
            width: 1427,
            height: 1661,
          },
          layout: 'responsive',
          objectFit: 'cover',
        },
        name: `Fern Miller`,
        role: `Advisor`,
        description: `Fern Miller is Executive Strategy Director at R/GA – A leading digital, marketing and innovation agency. Her senior expertise spans strategic planning and creative communication, across global markets; in both agencies and start-ups.`,
        socialLink: {
          href: `https://www.linkedin.com/in/fernmiller/`,
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
        name: `Amanda Hamilton-Stanley`,
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
        description: `Myles is the founder and creative director of Companion, a digital product design studio that works with start-ups and established businesses to create a better future for people and planet.

        He is passionate about how design & communication can shape the world around us and the power of using design to solve complex problems.`,
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
  content: `Together, we can crack communication around climate solutions. \n
  If you believe that climate projects need funding and support by the people who can make a difference, please get in touch.`,
  leftLink: {
    href: `mailto:sophie@climateagency.net`,
    children: `I’m working in climate and need help!`,
    color: `green`,
    isExternal: true,
  },
  rightLink: {
    href: `mailto:lisa@climateagency.net`,
    children: `I’m working in the creative industry and want to help!`,
    color: `stone`,
    isExternal: true,
  },
} as CtaBlockProps
