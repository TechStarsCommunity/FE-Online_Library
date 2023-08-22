/* eslint-env node */
module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "eslint-config-prettier",
    ],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "unicorn", "prettier"],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
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
        "no-unused-vars": "warn",
        "react/prop-types": "warn",
        "import/order": [
            "warn",
            {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
};
