'use strict';

module.exports = {
	rules: {
		'filenames/match-regex': [
			'error',
			/^[a-z0-9.-]+$/,
			true,
		],
		'filenames/match-exported': 'off',
		'filenames/no-index': 'off',
	},
};
