import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@gustavo-ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/gustavosilv4.png',
    alt: 'Gustavo Silva',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
