import { Footer } from './Footer'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = () => <Footer />
