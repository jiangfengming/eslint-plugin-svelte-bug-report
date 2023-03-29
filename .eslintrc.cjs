module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',

  parserOptions: {
    extraFileExtensions: ['.svelte']
  },

  plugins: [
    '@typescript-eslint'
  ],

  extends: [
    'eslint:recommended',
    'plugin:svelte/recommended'
  ],

  env: {
    node: true,
    browser: true
  },

  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
};
