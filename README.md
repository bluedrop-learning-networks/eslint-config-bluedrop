# eslint-config-bluedrop

[![Dependency Status](https://img.shields.io/librariesio/release/npm/eslint-config-bluedrop?color=yellow&label=upstream&style=for-the-badge)]()
[![Build Status](https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/workflows/Test/badge.svg)](https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/actions)
[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://raw.githubusercontent.com/bluedrop-learning-networks/eslint-config-bluedrop/master/LICENSE)

This package provides Bluedrop's ESLint configuration as an extensible shared set of configurations.

## Usage

### General Setup

1. `npm install --save-dev eslint-config-bluedrop@next`

### Basic Usage (New Projects)

```javascript
// file eslint.config.js
const {library} = require('eslint-config-bluedrop/src/recommended')
module.exports = [
	...library,
];
```

See the [api docs](./docs/api.md) for *much more* about this.

There is also a section on [migrating from an earlier version](./docs/api.md#migrating-from-an-earlier-version).

## Semantic Versioning Policy

`eslint-config-bluedrop` follows [semantic versioning](https://semver.org). However, due to the nature of code quality
tools, it's not always clear when a minor or major version bump occurs. To help clarify this for everyone, we've
defined the following semantic versioning policy for the project:

* Patch release (intended to not break your lint build)
    * A bug fix in a rule that results in ESLint reporting fewer errors.
    * Improvements to documentation.
    * Non-user-facing changes such as refactoring code, adding, deleting, or modifying tests, and increasing test
      coverage.
    * Re-releasing after a failed release (i.e., publishing a release that doesn't work for anyone).

* Minor release (might break your lint build)
    * A bug fix in a rule that results in ESLint reporting more errors.
    * A new rule is created.
    * A new configuration is added.
    * A new option to an existing rule that does not result in ESLint reporting more errors.
    * An existing rule is deprecated.

* Major release (likely to break your lint build)
    * Support for old Node version is dropped.
    * Support for old ESLint version is dropped.
    * An existing rule is changed that would report more errors.
    * An existing rule is removed.
    * An existing option of a rule is removed.
    * An existing configuration is updated.

According to our policy, any minor update may report more errors than the previous release (ex: from a bug fix). As
such, we recommend using `package-lock.json` to guarantee the results of your builds.

## Contributing

Add new rule definitions under the files located in `rules` ensuring to keep the rule correctly categorized and in the
same order as defined on the [ESLint rules](http://eslint.org/docs/rules/) page. Add new configurations to `config`.

This project self-lints and ensure that all file paths are correct. You can run these checks with the `npm run test`
command.

## Migrations

### Version 9.0.0 to 10.0.0

See the Migrations section of the [api documentation](./docs/node-api.md#legacy)

### Version 8.0.0 to 9.0.0

- Remove `'bluedrop/config/ecmascript-2018'` and `'bluedrop/config/ecmascript-2019'` from ESLint config files as they are now part of the standard configuration.
- Typescript linting has been removed and any projects using it will need to manage the configuration manually.
- JSDoc plugin and configuration has been removed and any references to it will need to be removed.

## License

This project is released under the ISC license. See [LICENSE](LICENSE).
