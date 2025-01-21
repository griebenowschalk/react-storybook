import { StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["text", "password", "email"],
      control: { type: "select" },
    },
    backgroundColor: { control: "color" },
  },
  args: {
    name: "fname",
    type: "text",
    label: "First Name",
    placeholder: "Enter name here",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// export const Password: Story = {
//   args: {
//     type: "password",
//     label: "Password",
//     placeholder: "Enter password here",
//   },
// };
