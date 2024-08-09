const path = require("path");

module.exports = (context = __dirname) => {
  return {
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true,
    },
    extends: [
      "airbnb",
      "prettier",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react"],
    rules: {
      "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
      "react/function-component-definition": [
        1,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "import/extensions": [0, { extensions: ["js", "jsx", "ts", "tsx"] }],
      "react/require-default-props": 0,
      "no-restricted-imports": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/no-empty-function": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "import/no-extraneous-dependencies": "off",
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {
          alwaysTryTypes: true,
          project: [path.resolve(context, "tsconfig.json")],
        },
      },
    },
  };
};
