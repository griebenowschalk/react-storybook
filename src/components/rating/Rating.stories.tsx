import type { Meta, StoryObj } from '@storybook/react';
import Rating, { RatingProps } from "./Rating";

const meta = {
    title: "Rating",
    component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
    args: {
        numberOfStars: 5,
    },
    render: (args: RatingProps) => <Rating {...args} />,
};