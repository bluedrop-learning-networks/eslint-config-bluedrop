'use strict';

module.exports = {
	plugins: [
		'node',
		'react',
		'react-hooks',
		'jsx-a11y',
	],
	env: {
		browser: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'../rules/plugin-jsx-a11y.js',
		'../rules/plugin-react',
		'../rules/plugin-react-hooks',
	].map(require.resolve),
	rules: {
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: [
					'componentDidCatch',
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
		'filenames/match-regex': 'off', // there are no hard rules in React projects
		'filenames/match-exported': 'error',
		// React components often use this in a way that ESLint flags as invalid
		'no-invalid-this': 'off',
		'node/no-unsupported-features/es-syntax': ['error', {
			ignores: ['modules', 'dynamicImport'],
		 }],
	},
};
