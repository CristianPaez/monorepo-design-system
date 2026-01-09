import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";
import React from "react";

const meta = {
  title: "DS/Button",
  component: Button,
  args: {
    children: "Por defecto",
    variant: "primary",
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
