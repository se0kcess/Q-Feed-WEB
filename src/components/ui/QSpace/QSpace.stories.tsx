import { Meta, StoryObj } from '@storybook/react';
import { QSpace } from './QSpace';

const meta: Meta<typeof QSpace> = {
  title: 'Components/QSpace',
  component: QSpace,
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    memberCount: { control: 'number' },
    lastUpdated: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof QSpace>;

export const Default: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/100',
    title: 'QSpace Title',
    description: 'This is a brief description of the QSpace.',
    memberCount: 120,
    lastUpdated: '6시간 전',
  },
};

export const LongDescription: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/100',
    title: 'Another QSpace',
    description: 'This QSpace has a much longer description, detailing the purpose, activities, and members of this group.',
    memberCount: 300,
    lastUpdated: '6시간 전',
  },
};
