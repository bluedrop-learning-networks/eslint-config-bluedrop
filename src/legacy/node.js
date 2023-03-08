/**
 * @module legacy/node
 * @type {Stack}
 */

const {getStack} = require('../utils.js');

/**
 * From - { extends:['bluedrop/config/node'] }
 *
 * @type {Stack}
 */
const node = getStack([
	'./legacy/node-base.js',
	'./legacy/node-eslint-config-file.js',
]);

module.exports = node
