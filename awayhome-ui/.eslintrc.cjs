module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': ['error'],
    'no-unused-vars': 'off', // Change to 'warn' to avoid build failure for unused vars
    'react/no-children-prop': 'off', // Disable this rule to avoid errors about children props
    '@next/next/no-img-element': 'off', // Disable Next.js specific img warnings if not using <Image />
  },
};
