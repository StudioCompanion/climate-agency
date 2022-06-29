import { MediaVideo } from './MediaVideo'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Media/Video',
  component: MediaVideo,
} as ComponentMeta<typeof MediaVideo>

export const Default: ComponentStory<typeof MediaVideo> = () => (
  <MediaVideo
    aspectRatio={1}
    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  />
)
