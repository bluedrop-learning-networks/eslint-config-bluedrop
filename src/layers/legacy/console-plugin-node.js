const node = require('eslint-plugin-node');
const {env} = require('node:process');

module.exports = {
	plugins: {node},
	rules: {
		'node/no-process-env': 'off',
	},
	settings: {
		env,
	},
};
