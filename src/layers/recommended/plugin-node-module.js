const node = require('eslint-plugin-node');

const globals = {
	...node.configs['recommended-module'].globals,
	require: 'readonly',
	__dirname: 'readonly',
	module: 'readonly',
};
const rules = node.configs['recommended-module'].rules;
module.exports = {
	languageOptions: {globals},
	plugins: {node},
	rules,
};
