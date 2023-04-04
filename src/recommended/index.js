const library = require('./library');
const {getStack} = require('../utils.js');

/**
 * The following recommended Stacks are a WIP
 *   - api
 *   - client
 *   - worker
 *
 * @type {Object<string, Stack>}
 */

const plannedStacks = {
	api:getStack([]),
	client: getStack([]),
	worker: getStack([]),
}
module.exports = {
	library,
	plannedStacks,

};
