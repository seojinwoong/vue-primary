/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential', // 우선순위 A: 필수
		'eslint:recommended', // eslint 자동으로 검사
		'@vue/eslint-config-prettier/skip-formatting', //
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // "warn", "off"
		'prettier/prettier': [
			'off',
			{
				singleQuote: true,
				useTabs: true,
				semi: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
	},
};
