import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // `assets-source` holds client photo originals and no JavaScript at all.
  // It has to be ignored, not just skipped by the `files` glob: ESLint still
  // walks an unignored directory, and this project lives under ~/Documents,
  // where iCloud dematerialises large files. Walking them triggers an
  // on-demand download per file, which turned `npm run lint` from a
  // two-second job into one that ran for minutes.
  globalIgnores(['dist', 'assets-source', 'archive']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
