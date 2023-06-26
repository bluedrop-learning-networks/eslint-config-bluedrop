/**
 * @module legacy/common
 * @type {Stack}
 */

const {getStack} = require('../utils.js');

/**
 * From - { extends:['bluedrop/config/common'] }
 * @type {Stack}
 */
const common = getStack([
	'./legacy/common-base.js',
	'./legacy/common-ruleset-best-practices.js',
	'./legacy/common-ruleset-ecmascript-2015.js',
	'./legacy/common-ruleset-ecmascript-2017.js',
	'./legacy/common-ruleset-ecmascript-2018.js',
	'./legacy/common-ruleset-ecmascript-2022.js',
	'./legacy/common-plugin-eslint-comments.js',
	'./legacy/common-plugin-filenames.js',
	'./legacy/common-plugin-import.js',
	'./legacy/common-plugin-jsdoc.js',
	'./legacy/common-plugin-promise.js',
	'./legacy/common-plugin-security.js',
	'./legacy/common-plugin-unicorn.js',
	'./legacy/common-ruleset-possible-errors.js',
	'./legacy/common-ruleset-strict.js',
	'./legacy/common-ruleset-stylistic-issues.js',
	'./legacy/common-ruleset-variables.js',
]);

module.exports = common
