import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: ['**/node_modules'],
	},
	...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended'),
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: {
				project: 'tsconfig.json',
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		rules: {
			camelcase: 'error',
			'consistent-return': 'error',
			curly: 'error',
			'default-case': 'error',
			'eol-last': 'error',
			eqeqeq: 'error',

			'max-len': [
				'error',
				{
					code: 180,
					comments: 180,
				},
			],

			'no-console': 'error',
			'no-constructor-return': 'error',
			'no-multi-spaces': 'error',
			'no-promise-executor-return': 'error',
			'no-template-curly-in-string': 'error',
			'no-unreachable': 'error',
			'object-shorthand': ['error', 'never'],
			'require-await': 'off',
			semi: 'error',
			'no-unused-expressions': 'off',
			'@typescript-eslint/array-type': 'error',
			'@typescript-eslint/await-thenable': 'error',
			// "@typescript-eslint/ban-types": "error",
			'@typescript-eslint/consistent-generic-constructors': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',

			'@typescript-eslint/explicit-member-accessibility': [
				'error',
				{
					accessibility: 'no-public',
				},
			],

			'@typescript-eslint/member-ordering': 'off',
			'@typescript-eslint/no-empty-interface': 'error',
			'@typescript-eslint/no-empty-function': 'error',
			'@typescript-eslint/no-explicit-any': 'error',

			'@typescript-eslint/no-floating-promises': [
				'error',
				{
					ignoreIIFE: true,
				},
			],

			'@typescript-eslint/no-inferrable-types': 0,
			'@typescript-eslint/no-non-null-assertion': 'error',

			'@typescript-eslint/no-unused-expressions': [
				'error',
				{
					allowTernary: true,
					allowShortCircuit: true,
				},
			],

			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					varsIgnorePattern: '^T',
					argsIgnorePattern: '^T',
				},
			],

			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/require-await': 'error',

			'@typescript-eslint/typedef': [
				'error',
				{
					arrayDestructuring: false,
					arrowParameter: false,
					memberVariableDeclaration: true,
					objectDestructuring: false,
					parameter: true,
					propertyDeclaration: true,
					variableDeclaration: true,
					variableDeclarationIgnoreFunction: true,
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		ignores: ['**/*.test.js', 'src/app/vite.config.ts'],
		rules: {
			quotes: [
				'error',
				'single',
				{
					allowTemplateLiterals: true,
				},
			],
		},
	},
];
