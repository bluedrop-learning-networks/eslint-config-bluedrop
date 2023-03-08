/**
 * @module recommended/library
 * @type {Stack}
 */

const {getStack} = require('../utils.js');

	/**
	 * Layers recommended for a js library:
	 * - [plugin-n-module](https://github.com/eslint-community/eslint-plugin-n#-configs)
	 * - [plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/57dac8425e2761d215aa7b41e498c94fd0fdea83/lib/configs/recommended.js)
	 * - [plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc#configuration)
	 * - [plugin-filenames](https://github.com/selaux/eslint-plugin-filenames)
	 * - [plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js)
	 * - [plugin-security](https://github.com/eslint-community/eslint-plugin-security#rules)
	 * - [plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#recommended-config)
	 * - [bluedrop-library](./src/recommends/bluedrop-library.js)
	 *
	 * @type {Stack}
	 */
const library = getStack([
	'recommended/plugin-n-module',
	'recommended/plugin-eslint-comments',
	'recommended/plugin-jsdoc',
	'recommended/plugin-filenames',
	'recommended/plugin-import',
	'recommended/plugin-security',
	'recommended/plugin-unicorn',
	'recommended/bluedrop-library',
]);

module.exports = library
