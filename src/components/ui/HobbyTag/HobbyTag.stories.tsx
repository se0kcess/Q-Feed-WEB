import { Meta, StoryObj } from '@storybook/react';
import { HobbyTag } from './HobbyTag';

const meta: Meta<typeof HobbyTag> = {
  title: 'Components/HobbyTag',
  component: HobbyTag,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    textColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof HobbyTag>;

export const Default: Story = {
  args: {
    text: 'Photography',
  },
};

export const CustomColors: Story = {
  args: {
    text: 'Cooking',
    color: '#76c7e0',
    textColor: '#ffffff',
  },
};

export const LongText: Story = {
  args: {
    text: 'Learning to play the piano',
    color: '#f9c74f',
    textColor: '#000000',
  },
};
