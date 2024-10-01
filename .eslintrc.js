module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:i18next/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'eslint-plugin-import-helpers', 'react-hooks'],
    rules: {
        'react/jsx-no-useless-fragment': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'object-shorthand': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'name'],
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        'no-unused-vars': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                prefix: ['I'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: 'typeAlias',
                format: ['PascalCase'],
                prefix: ['T'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
        ],
        'import-helpers/order-imports': [
            2,
            {
                groups: ['/^react(-dom)?$/', 'module', 'parent', ['sibling', 'index']],
                newlinesBetween: 'always',
                alphabetize: {
                    order: 'asc',
                    ignoreCase: true,
                },
            },
        ],
        'jsx-a11y/no-static-element-interactions': ['off'],
        'jsx-a11y/click-events-have-key-events': ['off'],
    },
    globals: {
        __IS_DEV__: 'readonly',
        __API__: 'readonly',
    },
    overrides: [
        {
            files: ['**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
