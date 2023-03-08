const n = require('eslint-plugin-n');

const globals = {
	...n.configs['recommended-module'].globals,
	module: 'readonly',
	require: 'readonly',
	__dirname: 'readonly',
};
const rules = n.configs['recommended-module'].rules;
module.exports = {
	languageOptions: {globals},
	plugins: {n},
	rules,
};
