'use strict';

// https://mysticatea.github.io/eslint-plugin-eslint-comments/

module.exports = {
	rules: {
		// Best Practices
		'eslint-comments/disable-enable-pair': 'error',
		'eslint-comments/no-aggregating-enable': 'error',
		'eslint-comments/no-duplicate-disable': 'error',
		'eslint-comments/no-unused-disable': 'error',
		'eslint-comments/no-unused-enable': 'error',
		'eslint-comments/no-unlimited-disable': 'error',
		// Stylistic Issues
		'eslint-comments/no-restricted-disable': 'off',
		'eslint-comments/no-use': 'off',
	},
};
