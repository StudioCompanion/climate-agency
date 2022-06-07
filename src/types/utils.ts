import { ComponentProps, JSXElementConstructor } from 'react'

export type StoryFixtures<
  TComponent extends
    | keyof JSX.IntrinsicElements
    | JSXElementConstructor<ComponentProps<TComponent>>
> = Record<string, ComponentProps<TComponent>>
