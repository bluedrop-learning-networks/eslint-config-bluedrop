'use strict';

module.exports = {
	plugins: [
		'react',
	],
	env: {
		browser: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
	},
	extends: [
		'./index',
		'./rules/plugin-react',
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
		"filenames/match-regex": [
			'error',
			/^[A-Za-z0-9.-]+$/,
		],
		'filenames/match-exported': 'error',
		// React components often use this in a way that ESLint flags as invalid
		'no-invalid-this': 'off'
	},
};
