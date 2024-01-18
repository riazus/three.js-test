import type { Meta, StoryObj } from "@storybook/react";

import Scene from "./Scene";

const meta = {
  title: "UI/Scene",
  component: Scene,
} satisfies Meta<typeof Scene>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}