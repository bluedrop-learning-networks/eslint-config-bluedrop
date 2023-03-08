const eslintComments = require('eslint-plugin-eslint-comments');

const rules = eslintComments.configs.recommended.rules;
module.exports = {
	plugins: {'eslint-comments': eslintComments},
	rules,
};
