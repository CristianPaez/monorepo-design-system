import type { Preview } from "@storybook/react-vite";
import "@repo/design-system/theme.css";
import React from "react";

export const globalTypes = {
  theme: {
    description: "Tema",
    defaultValue: "blue",
    toolbar: { title: "Theme", items: ["blue", "green", "red"] },
  },
};

export const decorators = [
  (Story: any, context: any) => {
    const theme = context.globals.theme;
    return (
      <div data-suite-theme={theme} style={{ padding: 16 }}>
        <Story />
      </div>
    );
  },
];

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
