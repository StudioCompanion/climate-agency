import { styled } from 'styles/stitches.config'
import { HomepageOpeningBlock } from 'components/Blocks/HomepageOpeningBlock'

const heroImage = {
  image: {
    src: '/images/Green_Accent_Image_01.png',
    altText: 'Hero image',
    width: 500,
    height: 500,
  },
  layout: 'fill',
  objectFit: 'cover',
}
const Index = () => {
  return (
    <>
      <HomepageOpeningBlock
        mediaImage={heroImage}
        content="Truth is, we’re going to need some big ideas to keep our world habitable. These ideas need profile and they need support, with urgency. And we aim to get them just that. 

We are a marketing strategy consultancy, non profit, and dedicated to help climate projects scale up."
      />
    </>
  )
}

export default Index
