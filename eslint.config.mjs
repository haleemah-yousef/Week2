import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JavaScript + React files
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      js,
      react: pluginReact,
      prettier: prettierPlugin,
    },
    extends: [
      "js/recommended",
      pluginReact.configs.flat.recommended,
      prettierConfig
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "module", // enable import/export
    },
    rules: {
      "prettier/prettier": "error", // enforce Prettier formatting
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Jest test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        describe: "readonly",
        test: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        expect: "readonly",
        jest: "readonly",
      },
      sourceType: "module",
    },
  },
]);
