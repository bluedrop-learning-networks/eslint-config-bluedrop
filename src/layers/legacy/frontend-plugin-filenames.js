const filenames = require('eslint-plugin-filenames');

module.exports = {
	plugins: {filenames},
	rules: {
		'filenames/match-regex': 'off', // There are no hard rules in React projects
		'filenames/match-exported': 'error',
	},
};
