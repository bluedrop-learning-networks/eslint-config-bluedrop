/**
 * @module legacy/jsdoc
 * @type {Stack}
 */

const {getStack} = require('../utils.js');

/**
 * From - { extends:['bluedrop/config/jsdoc'] }
 *
 * @type {Stack}
 */
const jsdoc = getStack([
	'legacy/common-plugin-jsdoc.js',
]);

module.exports = jsdoc
