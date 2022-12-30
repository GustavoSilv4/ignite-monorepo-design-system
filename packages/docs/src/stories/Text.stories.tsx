import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,

  args: {
    children:
      'Omnis et nemo dolore amet delectus. Eveniet dicta amet iusto consectetur harum illo deleniti sapiente. Aut repellat qui reprehenderit officiis quod consequatur iure. Distinctio voluptate eos.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
