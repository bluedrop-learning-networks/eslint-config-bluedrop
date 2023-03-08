const promise = require('eslint-plugin-promise');

module.exports = {
	plugins: {promise},
	rules: {
		// RULESET: COMMON  Plugin Promise
		'promise/always-return': 'error',
		'promise/avoid-new': 'off',
		'promise/catch-or-return': 'error',
		'promise/no-callback-in-promise': 'off',
		'promise/no-native': 'off',
		'promise/no-nesting': 'off',
		'promise/no-new-statics': 'error',
		'promise/no-promise-in-callback': 'off',
		'promise/no-return-in-finally': 'error',
		'promise/no-return-wrap': 'error',
		'promise/param-names': 'error',
		'promise/valid-params': 'error',
	},
};
