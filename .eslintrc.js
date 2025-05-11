module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // Make sure this is last to override other configs
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json", // Point to your tsconfig
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      typescript: {}, // this uses tsconfig.json paths
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    // React rules
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "react/prop-types": "off", // Use TypeScript for prop validation
    "react/jsx-uses-react": "error", // Mark React as used when using JSX
    "react/jsx-uses-vars": "error", // Prevent variables used in JSX from being marked as unused

    // Import rules
    "import/no-unresolved": "error", // Error on unresolved imports
    "import/named": "error", // Error when named exports not found
    "import/default": "error", // Error when default export not found
    "import/namespace": "error", // Error when namespace imports not found
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],

    // TypeScript rules
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-undef": "error", // Error on undefined variables

    // JSX rules to detect unimported components
    "react/jsx-no-undef": ["error", { allowGlobals: false }], // Error on undefined JSX elements

    // Prettier rules
    "prettier/prettier": ["error"],
  },
};
