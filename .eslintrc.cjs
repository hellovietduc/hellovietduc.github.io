// https://eslint.org/docs/latest/use/configure/
module.exports = {
  // Default config for `.js` and `.ts` files.
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  plugins: ['@typescript-eslint'],
  rules: {},
  overrides: [
    // Config for `.astro` file.
    {
      files: ['*.astro'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:astro/recommended',
        'prettier',
      ],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint'],
      rules: {},
    },
    // Config for `.vue` file.
    {
      files: ['*.vue'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
