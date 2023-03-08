/**
 * @module main
 * @type {object}
 * @property {Object<string, Stack>} recommended Recommended Stacks
 * @property {Object<string, Stack>} legacy Legacy compatible Stacks
 * @property {Object<string, Function>} utils Utilities
 * @property {Object<string, (Function | string[] | Object<string, RuleSet>)>} meta Rule Metadata
 */

const legacy = require('./legacy');
const meta = require('./meta');
const recommended = require('./recommended');
const utils = require('./utils');
const {version} = require('../package.json');

const main = {

	/**
	 * The recommended configuration stacks provided by this module.
	 *
	 * @name recommended
	 * @type {Object<string, Stack>} recommended
	 */
	recommended,

	/**
	 * Utils for working with eslint configs
	 * ```js
	 * const { getStack, getLayerNames } = require('eslint-config-bluedrop/src/utils')
	 * ```
	 *
	 * @name utils
	 * @type {Object<string, Function>} utils
	 */
	utils,

	/**
	 * Metadata about the eslint configuration.
	 * ```js
	 * const { ourRuleNames, deprecatedRuleNames } = require('eslint-config-bluedrop/src/meta')
	 * ```
	 *
	 * @name meta
	 * @type {Object<string, (Function | string[] | Object<string, RuleSet>)>}
	 */
	meta,

	/**
	 * Stacks which duplicate the configs in eslint-config-bluedrop v8.x
	 *
	 * @name legacy
	 * @type {object}
	 */
	legacy,

};
module.exports = {version, ...main};

/**
 * > A __Layer__ is equivalent to an [eslint configuration object]
 *
 * It holds information on the parse options, pugins, rules, settings, etc.
 * for linting source code within a specific scope.
 *
 * Layers are composable, and are combined to create an eslint configuration.
 *
 * Here, these grouped _Layers_ comprise a [Stack](#stack).
 *
 * [eslint configuration object]:https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects
 *
 * @typedef {Object<string, Object>} Layer - an eslint ConfigObject
 */

/**
 * > A __Stack__ is equivalent to the default export of an `esling.config.js` file
 *
 * It is also just an array of [Layers](#layer)
 * ```js
 * // in eslint.config.js
 *
 * module.exports = stack
 * ```
 *
 * [eslint configuration objects]:https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects
 *
 * @example <caption>Here's a Stack w/ two Layers</caption>
 * const myCLIMicroConfig = [
 *    {
 *      files: ['bin/*'],
 *      languageOptions: { globals: { process: 'readonly' } }
 *    },
 *    {
 *      files: ['test/*'],
 *      languageOptions: { globals: { describe: 'readonly', it: 'readonly' } }
 *    }
 * ]
 * @typedef {Layer[]} Stack - an eslint ConfigObject
 */

/**
 * @typedef {Object<string, any>} RuleSet - A hash of rules and associated settings
 */
