import AnswerCard from '@/pages/Main/components/AnswerCard/AnswerCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnswerCard> = {
  title: 'Pages/Main/Components/AnswerCard',
  component: AnswerCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AnswerCard>;

export const Default: Story = {
  args: {
    answer: '맛집이라 하면 일단 맛이 좋아야하는 법!',
  },
};

export const LongQuestion: Story = {
  args: {
    answer:
      '매우 긴 답변입니다. 이 질문은 두 줄 이상으로 표시될 수 있습니다. 답변이 길어질 경우 레이아웃이 어떻게 변하는지 확인해보세요.',
  },
};
