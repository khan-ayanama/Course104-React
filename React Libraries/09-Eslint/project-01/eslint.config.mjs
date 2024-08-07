import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },

  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    rules: {
      "no-console": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
  pluginJs.configs.recommended,
];
