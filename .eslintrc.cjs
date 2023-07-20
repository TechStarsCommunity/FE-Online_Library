/* eslint-env node */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'unicorn'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "unicorn/filename-case": [
      "warn",
      {
        "cases": {
          "camelCase": true,
          "pascalCase": false,
          "kebabCase": false,
          "snakeCase": false
        }
      }
    ],

  },
}
