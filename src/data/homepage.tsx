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
        altText: 'Hero image',
        width: 1307,
        height: 1272,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    innerCaption: `NASA/Goddard Space Flight Center/Reto Stöckli`,
    caption: (
      <Link href="https://www.nasa.gov/" isExternal color="captionBlack">
        Nasa
      </Link>
    ),
  },
  content: (
    <>
      <p>
        Truth is, we’re going to need some big ideas to keep our world
        habitable.
      </p>

      <p>
        These ideas need profile and they need support, with urgency. And we aim
        to get them just that.
      </p>

      <p>
        We are a non-profit marketing strategy consultancy, dedicated to help
        climate innovators scale up.
      </p>
    </>
  ),
  layout: 'default',
} as OpeningBlockProps

export const netZero = {
  title: `Climate Communication is not working.`,
  content: `Public and key stakeholders are confused by the jargon and mind-bending complexity. For eg: One third of UK CEOs in the UK are unfamiliar with the term Net Zero <sup>(1)</sup>

  This matters. Climate start-ups need to persuade investors, partners, customers, communities.
  We can help.  Corporate brands have evolved over decades the marketing techniques to engage, persuade and build trust.  We make these skills accessible and tailored to climate.`,
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
  ],
  testimonials: [
    {
      content: `“Climate organizations will be more effective by developing a brand that captures their voice and mission. The Climate Agency team has a great knowledge of branding and climate change to make this happen. Their sessions are impactful and actionable.”`,
      signature: `Ben Rubin, Executive Director`,
      organisation: `Carbon Business Council`,
    },
    {
      content: `“It’s amazing. Totally useful to have somebody with a fresh perspective guiding us. After these 2 workshops I will be revising our website and marketing assets.”`,
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

export const services = {
  textPosition: 'right',
  header: `Our services don't cost the earth.`,
  content: `We are non-profit, highly cost-effective and entrepreneurial.
  
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
        src: '/images/raindrops.png',
        altText: 'Raindrops',
        width: 653,
        height: 646,
      },
      layout: 'responsive',
      objectFit: 'cover',
    },
    innerCaption: `Pockets of methane trapped within Canada’s frozen Lake Abraham.  Methane has around 80 times the warming power of CO2 when it reaches the atmosphere. The release of vast quantities of methane held by melting ice sheets and permafrost would be a tipping point for our climate.`,
    caption: (
      <Link href="https://unsplash.com/@jxb511" isExternal color="captionBlack">
        John Bakator
      </Link>
    ),
  },
} as ShortArticleBlockProps

export const team = {
  title: `Our team works with inspiring advisors, to help us tackle the biggest communication problem of all time.`,
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
        description: `David Addison works at Virgin on a range of climate, environment, purpose, and sustainability efforts. For more than 12 years he has been working with and learning from others across academia, business, civil society, governments, and non-profits on scalable, sustainable carbon removal. 
        
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
  content: `Do you believe greenwashing should have a monopoly on good marketing and clever comms? Do you believe that climate projects need more funding and support?\n\nThen please get in touch. Together let’s persuade the people you need to scale up.`,
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
