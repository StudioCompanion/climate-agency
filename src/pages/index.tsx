import { HomepageOpeningBlock } from 'components/Blocks/HomepageOpeningBlock'
import { NetZeroBlock } from 'components/Blocks/NetZeroBlock'

const hero = {
  mediaImage: {
    image: {
      src: '/images/Green_Accent_Image_01.png',
      altText: 'Hero image',
      width: 653,
      height: 636,
    },
    layout: 'responsive',
    objectFit: 'cover',
  },
  content: `Truth is, we’re going to need some big ideas to keep our world habitable. These ideas need profile and they need support, with urgency. And we aim to get them just that.\n
  We are a marketing strategy consultancy, non profit, and dedicated to help climate projects scale up.`,
}

const netZero = {
  icon: {
    image: {
      src: '/icons/clock-s.svg',
      altText: 'Clock',
      width: 27,
      height: 27,
    },
    layout: 'intrinsic',
    objectFit: 'cover',
  },
  title: `One third of CEOs in the UK are unsure what Net Zero means.`,
  content: `There are urgent messages to tell, but the scientific community is speaking a different language to those with the power to make a difference in climate.\n

    The narrative is impenetrable, and the maths 
    mind–bendingly complex. \n
    
    Thousands of innovative climate solutions are in the making, exploring everything from extracting CO2 from the atmosphere, to preserving ice at the poles. Some of these can make a huge difference to our world in the years to come. But they're not being heard.\n
    
    Global corporations and brands have evolved for decades the marketing techniques to persuade, engage and build trust.  But, with limited resources, Climate projects find it hard to access these strategic skills. Yet the world is on fire, and they need results with urgency.`,
  mediaImage: {
    image: {
      src: '/images/Green_Accent_Image_03.png',
      altText: 'Greenland Fjords',
      width: 1326,
      height: 784.73,
    },
    layout: 'responsive',
    objectFit: 'cover',
  },
  caption: `Greenland fjords receive considerable amounts of glacial meltwater discharge from the Greenland Ice Sheet due to present climate warming. This is Scoresby Sund, the world’s largest fjord system.`,
}

const Index = () => {
  return (
    <>
      <HomepageOpeningBlock {...hero} />
      <NetZeroBlock {...netZero} />
    </>
  )
}

export default Index
