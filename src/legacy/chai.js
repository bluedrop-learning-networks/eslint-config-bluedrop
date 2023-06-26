/**
 * @module legacy/chai
 * @type {Stack}
 */

const {getStack} = require('../utils.js');

/**
 * From - { extends:['bluedrop/config/chai'] }
 *
 * scope: ['test/**\/*.js'],
 * @type {Stack}
 */
const chai = getStack([
	'./legacy/testing-plugin-chai-expect.js',
]);

module.exports = chai
