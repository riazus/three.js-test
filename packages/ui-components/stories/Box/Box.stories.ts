import type { Meta, StoryObj } from "@storybook/react";

import Box from "./Box";

const meta = {
  title: "UI/Box",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: [-1.2, 0, 0],
  },
};
