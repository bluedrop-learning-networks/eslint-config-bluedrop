# eslint-config-bluedrop

[![Dependency Status](https://david-dm.org/bluedrop-learning-networks/eslint-config-bluedrop/dev-status.svg)](https://david-dm.org/bluedrop-learning-networks/eslint-config-bluedrop/dev-status.svg)
[![Build Status](https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/workflows/Test/badge.svg)](https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/actions)
[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://raw.githubusercontent.com/bluedrop-learning-networks/eslint-config-bluedrop/master/LICENSE)

This package provides Bluedrop's ESLint configuration as an extensible shared set of configurations.

## Usage

### Interactive Dependency Install Script

This project includes an interactive script that will install the required dependencies depending on the configurations selected. To run the script, from the project root:

```shell
npm install --save-dev eslint-config-bluedrop
./node_modules/.bin/bln-eslint-install-dependencies
```

### General Setup

1. `npm install --save-dev eslint-config-bluedrop@latest eslint@7`

### eslint-config-bluedrop

Our default export contains all of our ESLint rules, including support for ECMAScript 2020.

1. Add `"extends": "bluedrop"` to your ESLint config file
1. `npm install --save-dev eslint-plugin-filenames@1 eslint-plugin-promise@4 eslint-plugin-security@1 eslint-plugin-eslint-comments@3 eslint-plugin-import@2 eslint-plugin-unicorn@20`

### eslint-config-bluedrop/config/babel

An extension of `eslint-config-bluedrop` that adds support for eslint-babel.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-babel@5`
1. Add `"extends": ["bluedrop", "bluedrop/config/babel"]` to your ESLint config file

### eslint-config-bluedrop/config/chai

An extension of `eslint-config-bluedrop` that adds support for chai.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-chai-expect@2`
1. Add `"extends": ["bluedrop", bluedrop/config/chai"]` to your ESLint config file

### eslint-config-bluedrop/config/console

An extension of `eslint-config-bluedrop` that adds support for console applications.

1. Ensure you have installed the dependencies from General Setup
1. Add `"extends": ["bluedrop", bluedrop/config/console"]` to your ESLint config file

### eslint-config-bluedrop/config/mocha

An extension of `eslint-config-bluedrop` that adds support for Mocha.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-mocha@7`
1. Add `"extends": ["bluedrop", "bluedrop/config/mocha"]` to your ESLint config file

### eslint-config-bluedrop/config/node

An extension of `eslint-config-bluedrop` that adds support for Node.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-node@11`
1. Add `"extends": ["bluedrop", "bluedrop/config/node"`] to your ESLint config file

### eslint-config-bluedrop/config/react

An extension of `eslint-config-bluedrop` that adds support for React.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-node eslint-plugin-jsx-a11y@6 eslint-plugin-react@7 eslint-plugin-react-hooks@4`
1. Add `"extends": ["bluedrop", "bluedrop/config/react"]` to your ESLint config file
1. You can also specify your React version number (if it is not the latest version) in your ESLint config file like so:

```javascript
module.exports = {
  // ...
  settings: {
    react: {
      version: '16.x', // defaults to 'detect'
    },
  },
  // ...
};
```

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

### Version 8.0.0 to 9.0.0

- Remove `'bluedrop/config/ecmascript-2018'` and `'bluedrop/config/ecmascript-2019'` from ESLint config files as they are now part of the standard configuration.
- Typescript linting has been removed and any projects using it will need to manage the configuration manually.
- JSDoc plugin and configuration has been removed and any references to it will need to be removed.

## License

This project is released under the ISC license. See [LICENSE](LICENSE).
