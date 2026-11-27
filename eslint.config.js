// @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  // Ignore generated files and folders globally
  {
    ignores: [
      '**/node_modules/**',
      '**/.output/**',
      '**/dist/**',
      '**/.tanstack/**',
      'eslint.config.js',
      'prettier.config.js',
    ],
  },

  // TanStack ESLint configuration
  ...tanstackConfig,

  // Project-specific rule overrides
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
]
