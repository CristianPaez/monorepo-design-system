import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../../../packages/desing-system/src/**/*.stories.@(ts|tsx|mdx)"],
  addons: ["@storybook/addon-docs"],
};

export default config;
