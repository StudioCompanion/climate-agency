import { styled } from 'styles/stitches.config'
import { HomepageOpeningBlock } from 'components/Blocks/HomepageOpeningBlock'

const heroImage = {
  src: '/assets/hero.png',
  alt: 'Hero Image',
}
const Index = () => {
  return (
    <>
      <Title>Hello world</Title>
      <HomepageOpeningBlock
        {...heroImage}
        content="Truth is, we’re going to need some big ideas to keep our world habitable. These ideas need profile and they need support, with urgency. And we aim to get them just that. 

We are a marketing strategy consultancy, non profit, and dedicated to help climate projects scale up."
      />
    </>
  )
}

export default Index

const Title = styled('h1', {
  color: 'red ',
})
