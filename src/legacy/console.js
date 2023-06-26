
/**
 * @module legacy/chai
 * @type {Stack}
 */

const {getStack} = require('../utils.js');

/**
 * From - { extends:['bluedrop/config/console'] }
 * @type {Stack}
 */
const console = getStack([
	'./legacy/console-base.js',
	'./legacy/console-plugin-node.js',
	'./legacy/console-plugin-security.js',
]);

module.exports = console
