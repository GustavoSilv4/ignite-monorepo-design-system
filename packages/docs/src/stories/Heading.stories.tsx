import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@gustavo-ignite-ui/react'

export default {
  title: 'Typograph/Heading',
  component: Heading,

  args: {
    size: 'md',
    children: 'Custom Title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: 'inline-radio',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
