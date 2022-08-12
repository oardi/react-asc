module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		'@typescript-eslint/no-unused-vars': ['error'],
		'semi': 'error',
		'curly': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/typedef': [
			"warn",
			{
				arrayDestructuring: false,
				arrowParameter: false,
				memberVariableDeclaration: true,
				objectDestructuring: false,
				parameter: true,
				propertyDeclaration: true,
				variableDeclaration: true,
				variableDeclarationIgnoreFunction: true
			}
		],
		'@typescript-eslint/no-inferrable-types': 0,
		'@typescript-eslint/no-empty-function': 'error'
	},
	ignorePatterns: ['node_modules'],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			excludedFiles: "*.test.js",
			rules: {
				quotes: [
					'error',
					'single',
					{ 'allowTemplateLiterals': true }
				]
			}
		}
	]
};
