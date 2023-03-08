const eslintComments = require('eslint-plugin-eslint-comments');
// https://mysticatea.github.io/eslint-plugin-eslint-comments/

module.exports = {
	plugins: {'eslint-comments': eslintComments},
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

		// Disallow global/globals, eslint directive in comment, etc.
		'eslint-comments/no-use': ['error', {allow: [
			'eslint-disable',
			'eslint-disable-line',
			'eslint-disable-next-line',
			'eslint-enable',
		]}],
		'eslint-comments/require-description': 'off',
	},
};
