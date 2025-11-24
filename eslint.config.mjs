// eslint.config.mjs
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

const ignores = ["**/node_modules", "**/.next", "**/dist"];

const tsConfigs = tseslint.configs.recommendedTypeChecked.map((c) => ({
  ...c,
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    ...c.languageOptions,
    parserOptions: {
      ...c.languageOptions?.parserOptions,
      project: "./tsconfig.json",
      tsconfigRootDir: import.meta.dirname,
    },
  },
}));

export default [{ ignores }, js.configs.recommended, ...tsConfigs, next.configs["core-web-vitals"]];
