const imp0rt = require('eslint-plugin-import');

module.exports = {
	plugins: {import: imp0rt},
	rules: {
		// Static analysis
		'import/no-unresolved': 'error',
		'import/named': 'error',
		'import/default': 'error',
		'import/namespace': 'error',
		'import/no-restricted-paths': 'off',
		'import/no-absolute-path': 'error',
		'import/no-dynamic-require': 'off', // Already enabled in other rule
		'import/no-internal-modules': 'off',
		'import/no-webpack-loader-syntax': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': 'error',
		'import/no-useless-path-segments': 'error',
		'import/no-relative-parent-imports': 'off',
		'import/no-unused-modules': 'error',

		// Helpful warnings
		'import/export': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-deprecated': 'error',
		'import/no-extraneous-dependencies': 'error',
		'import/no-mutable-exports': 'error',

		// Module systems
		'import/unambiguous': 'off',
		'import/no-commonjs': 'off', // Allow mixed
		'import/no-amd': 'off',
		'import/no-nodejs-modules': 'off',

		// Style guide
		'import/first': 'error',
		'import/exports-last': 'off',
		'import/no-duplicates': 'error',
		'import/no-namespace': 'off',
		'import/extensions': [
			'error',
			{js: 'never', json: 'always'},
		],
		'import/order': [
			'error',
			{
				groups: [
					['parent', 'sibling', 'index'],
					['builtin', 'external'],
					'internal', // We do not use this, so it's not important
				],
				'newlines-between': 'never',
				alphabetize: {
					order: 'asc',
				},
			},
		],
		'import/newline-after-import': 'error',
		'import/prefer-default-export': 'off',
		'import/max-dependencies': 'off',
		'import/no-unassigned-import': 'error',
		'import/no-named-default': 'error',
		'import/no-default-export': 'off',
		'import/no-named-export': 'off',
		'import/no-anonymous-default-export': 'off',
		'import/group-exports': 'off',
		'import/dynamic-import-chunkname': 'error',
	},
};
