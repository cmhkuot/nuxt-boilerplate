// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettierPlugin from "eslint-plugin-prettier";

const isProd = process.env.NODE_ENV === "production";

export default withNuxt(
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.vue", "**/*.js"],
    rules: {
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",

      "vue/html-self-closing": "off",
      "vue/multi-word-component-names": "off",
      "vue/no-multiple-template-root": "off",
      "vue/no-v-html": "off",
      "vue/require-default-prop": "off",

      "no-async-promise-executor": "off",
      "no-console": isProd ? "warn" : "off",
      "no-constant-condition": "warn",
      "no-debugger": isProd ? "warn" : "off",
    },
  },
);
