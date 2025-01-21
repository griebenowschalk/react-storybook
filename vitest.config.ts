import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ['./src/setup.ts'],
    include: ["./**/__test__/**/*.spec.ts", "./**/__test__/**/*.spec.tsx"],
    exclude: [...configDefaults.exclude, "**/build/**"],
    globals: true,
    environment: "jsdom",
    coverage: {
      enabled: true,
      reporter: ["text", "json", "html"],
      extension: ["ts", "tsx"],
      provider: "istanbul",
      include: [...(configDefaults?.coverage?.include || [])],
      exclude: [
        ...(configDefaults?.coverage?.exclude || []),
        "**/*config.ts",
        "**/*config.js",
        "**/*stories.tsx",
        "**/*styled.tsx",
        "**/*styled.ts",
      ],
    },
  },
});
