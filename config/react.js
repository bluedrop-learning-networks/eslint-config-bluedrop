'use strict';

module.exports = {
	plugins: [
		'react',
		'react-hooks',
	],
	env: {
		browser: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: '16.9',
		},
	},
	extends: [
		'../rules/plugin-react',
		'../rules/plugin-react-hooks',
	].map(require.resolve),
	rules: {
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: [
					'componentDidMount',
					'componentDidUpdate',
					'componentWillMount',
					'componentWillReceiveProps',
					'componentWillUnmount',
					'componentWillUpdate',
					'render',
					'shouldComponentUpdate',
				],
			},
		],
		'filenames/match-regex': [
			'error',
			/^[A-Za-z0-9.-]+$/u,
		],
		'filenames/match-exported': 'error',
		// React components often use this in a way that ESLint flags as invalid
		'no-invalid-this': 'off',
		'node/no-unsupported-features/es-syntax': ['error', {
			ignores: ['modules'],
		 }],
	},
};
