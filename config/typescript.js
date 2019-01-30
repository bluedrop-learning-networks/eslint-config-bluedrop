'use strict';

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	parserOptions: {
		sourceType: 'module',
	},
	extends: [
		'../rules/plugin-typescript',
	].map(require.resolve),
	rules: {
		// handled equally or better by tslint
		'no-invalid-this': 'off',
		'no-param-reassign': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'off',
		// does not make sense in a typescript project
		strict: 'off',
		// does not work as expected
		'lines-between-class-members': 'off',
		'no-extra-parens': 'off',
	},
};
