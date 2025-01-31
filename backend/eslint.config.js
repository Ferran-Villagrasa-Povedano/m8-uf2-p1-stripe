import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import nodePlugin from 'eslint-plugin-node';

export default [
    js.configs.recommended,
    prettier,
    {
        files: ['src/**/*.js'],
        plugins: {
            node: nodePlugin,
        },
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 'latest',
            globals: {
                ...nodePlugin.configs['recommended-module'].globals,
            },
        },
        rules: {
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'no-console': 'off',
        },
        ignores: ['node_modules/**', 'dist/**'],
    },
];