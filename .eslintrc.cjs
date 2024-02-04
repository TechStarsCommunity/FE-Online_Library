module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:@tanstack/eslint-plugin-query/recommended",
        "eslint-config-prettier",
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js', 'tailwind.config.js', 'postcss.config.js'],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "prettier", "unicorn"],
    rules: {
        'react-refresh/only-export-components': 'warn',
        "unicorn/filename-case": [
            "warn",
            {
                cases: {
                    camelCase: true,
                    pascalCase: false,
                    kebabCase: false,
                    snakeCase: false,
                },
            },
        ],
        "prettier/prettier": "warn",
        "no-console": "warn",
        "no-unused-vars": [
            "warn",
            { varsIgnorePattern: 'React' },
        ],
        "react/prop-types": "off",
        "sort-imports": ["error", {
            "ignoreCase": false,
            "ignoreDeclarationSort": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["all", "multiple", "single", "none"],
            "allowSeparatedGroups": true
        }]
    },
};
