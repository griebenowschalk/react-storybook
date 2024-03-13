import type { Meta, StoryObj } from '@storybook/react';
import Counter, { CounterProps } from './Counter';

const meta = {
    title: 'Counter',
    component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
    render: (args: CounterProps) => <Counter {...args} />,
};