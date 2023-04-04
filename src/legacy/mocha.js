/**
 * @module legacy/mocha
 * @type {Stack}
 */

const {getStack} = require('../utils.js');

/**
 * From - { extends:['bluedrop/config/mocha'] }
 *
 * scope: ['test/**\/*.js'],
 *
 * @type {Stack}
 */
const mocha = getStack([
	'./legacy/testing-plugin-mocha.js',
]);

module.exports = mocha
