const filenames = require('eslint-plugin-filenames');

module.exports = {
	plugins: {filenames},
	rules: {
		'filenames/match-regex': ['error', '^[a-z0-9.-]+$', true],
		'filenames/match-exported': 'error',
		'filenames/no-index': 'off',
	},
};
