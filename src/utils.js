/**
 * @module utils
 * @type {object}
 * @property {Function} getStack      - Get a stack.
 * @property {Function} getLayer      - Get a layer.
 * @property {Function} getLayerNames - Get the list of layer names.
 */

const {readdirSync} = require('node:fs');
const {resolve} = require('node:path');

/**
 * Get all of the available layer names
 * @function getLayerNames
 * @returns {string[]} A Stack containing the requested layers
 */
const getLayerNames = () => [
	'legacy',
	'recommended',
].flatMap(
	directory => readdirSync(resolve(__dirname, 'layers', directory))
		.map(name => `${directory}/${name.replace('.js', '')}`)
);

/**
 * A function to get a stack from a list of layer names
 * @function getStack
 * @param {string[]} list - A list of layers to stack
 * @returns {Stack} A Stack containing the requested layers
 */
const getStack = list => {
	const stackData = list
		.map(name => {
			let path;
			let layername;
			try {
				path = resolve(__dirname, 'layers', name);
				layername = name.replace('.js', '');

				// eslint-disable-next-line security/detect-non-literal-require

				const layer = require(path);
				layer.settings = {
					...layer.settings,
					layers: {
						[layername]: true,
					},
				};
				return layer;
			}
			catch (error_) {
				const {error} = console;
				error('Missing Layer:', error_.message, name, path);
				return {};
			}
		});
	return stackData
};

/**
 * Get one layer
 * @function getLayer
 * @param {string} name - The name of the layer to get
 * @returns {Layer} The requested layer
 */
const getLayer = name => {
	const data = getStack([name])[0];
	return data
}

module.exports = {getLayerNames, getStack, getLayer};
