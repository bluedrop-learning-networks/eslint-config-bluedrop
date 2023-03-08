const unicorn = require('eslint-plugin-unicorn');

const rules = unicorn.configs.recommended.rules;
module.exports = {
	languageOptions: {ecmaVersion: 'latest', sourceType: 'module'},
	plugins: {unicorn},
	rules,
};
