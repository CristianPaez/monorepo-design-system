import type { UserConfig } from "vitest/config";

export const vitestBase = {
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
    include: ["src/**/*.{test,spec}.{ts,tsx}"]
  }
} satisfies UserConfig;
