/**
 * @module meta
 * @type {object}
 * @property {RuleName[]} ourRuleNames                   - The names of rules used by these configs
 * @property {RuleName[]} deprecatedRuleNames            - The names of rules we use, but that are no longer supported
 * @property {RuleName[]} unusedRuleNames                - The names of rules we could, but do not use
 * @property {RuleName[]} allRuleNames                   - The names of all rules know to this module
 * @property {Object<LayerName, RuleSet>} rulesByLayer  - All of the rules organized by layer
 * @property {Function} overlappingLayerRules            - A function which returns info on rule overlap between layers
 * @property {Function} identicalLayerRules - A function which returns rules w/ identical settings in multiple layers
 */

const {getStack, getLayer, getLayerNames} = require('./utils.js');
// eslint-disable-next-line n/no-missing-require
const {builtinRules} = require('eslint/use-at-your-own-risk');

const {fromEntries: objectFrom, keys, values, entries} = Object;
const layerNames = getLayerNames();
const allLayers = getStack(layerNames);

module.exports = {
	/**
	 * The names for all of the rules, used and unused
	 * @example
	 * console.log(allRulenames())
	 * @type {string[]}
	 * @name allRuleNames
	 */
	get allRuleNames() {
		return [
			...builtinRules.keys(),
			...keys(
				allLayers.filter(
					layer => layer.plugins,
				).reduce(
					(accumulator, plugin) => ({...accumulator, ...plugin.rules}),
				),
			).sort(),
		];
	},

	/**
	 * The names for all rules set/unset by this module
	 * @example
	 * console.log(ourRulenames())
	 * @type {string[]}
	 * @name ourRuleNames
	 */
	get ourRuleNames() {
		return keys(
			allLayers.map(
				layer => layer.rules,
			).reduce(
				(accumulator, rules) => ({...accumulator, ...rules}),
				{},
			),
		).sort();
	},

	/**
	 * The rulesets for all layers, indexed by layer name
	 * @example
	 * console.dir(rulesByLayer())
	 * @type {Object<string, RuleSet>}
	 * @name rulesByLayer
	 */
	get rulesByLayer() {
		return objectFrom(
			layerNames
				.map(
					name => ({
						name,
						rules: getLayer(name).rules,
					}),
				).filter(
					ruleset => ruleset.rules,
				).map(
					({name, rules}) => [name, rules],
				),
		);
	},

	/**
	 * The names of deprecated rules
	 * @example
	 * console.log(deprecatedRuleNames())
	 * @type {string[]}
	 * @name deprecatedRuleNames
	 */
	get deprecatedRuleNames() {
		return this.ourRuleNames.filter(rule => !this.allRuleNames.includes(rule));
	},

	/**
	 * The names of unused rules
	 * @example
	 * console.log(unusedRuleNames())
	 * @type {string[]}
	 * @name unusedRuleNames
	 */
	get unusedRuleNames() {
		return this.allRuleNames.filter(rule => !this.ourRuleNames.includes(rule));
	},

	/**
	 * A function for detecting rule overlap between layers
	 * @example
	 * const { utils: { getLayerNames }, meta:{ overlappingLayerRules }} = require('eslint-config-bluedrop')
	 * // using a util to get all of the layer names
	 * console.dir(overlappingLayerRules(getLayerNames))
	 * >    {
	 * >      'arrow-parens': {
	 * >        'common-ruleset-ecmascript-2015': 'error',
	 * >        'common-ruleset-ecmascript-2022': 'off'
	 * >      },
	 * >      'no-console': { 'common-ruleset-possible-errors': 'error', 'console-base': 'off' },
	 * >      'security/detect-child-process': {
	 * >        'common-plugin-security': 'error',
	 * >        'console-plugin-security': 'off'
	 * >      },
	 * >      ...
	 * @type {Object<RuleName, Object<LayerName, RuleSetting>>}
	 * @name overlappingLayerRules
	 */
	get overlappingLayerRules() {
		return layerNameList => layerNameList.reduce(
			({sofar, overlap}, layerName, index, array) => {
				const done = array.length === index + 1;
				if (done) {
					return objectFrom(
						entries(overlap)
							.map(
								([ruleName, layers]) => [
									ruleName,
									Object.fromEntries(layers.map(
										overlapLayerName => [
											overlapLayerName,
											getLayer(overlapLayerName).rules[ruleName],
										],
									)),
								],
							),
					);
				}

				try {
					const ruleNames = keys(this.rulesByLayer[layerName]);
					const sofarNext = {
						...sofar,
						...objectFrom(
							ruleNames.map(
								key => [
									key, [
										...sofar[key] || [],
										layerName,
									],
								],
							),
						),
					};

					const overlapNext = {
						...overlap,
						...objectFrom(entries(sofarNext)
							.filter(
								([_, layers]) => layers.length > 1),
						),
					};

					return {
						sofar: sofarNext,
						overlap: overlapNext,
					};
				}
				catch {
					return {sofar, overlap};
				}
			},
			{sofar: {}, overlap: {}},
		);
	},
	/**
	 * A function for detecting identical rules among layers
	 * @example
	 * const report = identicalLayerRules([
	 *   './legacy/common-base',
	 *   './legacy/console-base',
	 *   './legacy/node-base',
	 * ])
	 * console.dir(report)
	 * @type {Object<string, Object<string, RuleSetting>>}
	 * @name identicalLayerRules
	 */
	get identicalLayerRules() {
		return layers => objectFrom(
			entries(this.overlappingLayerRules(layers))
				.filter(
					([, layerSettings]) => values(values(layerSettings)).every(
						(setting, index, settings) => index === 0
							|| JSON.stringify(settings[index - 1]) === JSON.stringify(setting),
					),
				),
		);
	},
};
