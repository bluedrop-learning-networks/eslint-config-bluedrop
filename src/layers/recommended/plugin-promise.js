const promise = require('eslint-plugin-promise');

const rules = promise.configs.recommended.rules;
module.exports = {plugins: {promise}, rules};
