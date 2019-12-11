# eslint-config-bluedrop

[![Dependency Status](https://david-dm.org/bluedrop-learning-networks/eslint-config-bluedrop/dev-status.svg)](https://david-dm.org/bluedrop-learning-networks/eslint-config-bluedrop/dev-status.svg)
[![Build Status](https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/workflows/Test/badge.svg)](https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/actions)
[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://raw.githubusercontent.com/bluedrop-learning-networks/eslint-config-bluedrop/master/LICENSE)

This package provides Bluedrop's ESLint configuration as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### General Setup

1. `npm install --save-dev eslint-config-bluedrop eslint-plugin-filenames eslint-plugin-promise eslint-plugin-security eslint-plugin-jsdoc eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-unicorn eslint`

### eslint-config-bluedrop

Our default export contains all of our ESLint rules, including ECMAScript 6+.

1. Add `"extends": "bluedrop"` to your ESLint config file

### eslint-config-bluedrop/config/babel

An extension of `eslint-config-bluedrop` that adds support for eslint-babel.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-babel`
1. Add `"extends": ["bluedrop", "bluedrop/config/babel"]` to your ESLint config file

### eslint-config-bluedrop/config/chai

An extension of `eslint-config-bluedrop` that adds support for chai.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-chai-expect`
1. Add `"extends": ["bluedrop", bluedrop/config/chai"]` to your ESLint config file

### eslint-config-bluedrop/config/console

An extension of `eslint-config-bluedrop` that adds support for console applications.

1. Ensure you have installed the dependencies from General Setup
1. Add `"extends": ["bluedrop", bluedrop/config/console"]` to your ESLint config file

### eslint-config-bluedrop/config/ecmascript-2018

An extension of `eslint-config-bluedrop` that adds support for ECMAScript 9 - 2018.

1. Ensure you have installed the dependencies from General Setup
1. Add `"extends": ["bluedrop", "bluedrop/config/ecmascript-9"]` to your ESLint config file

### eslint-config-bluedrop/config/ecmascript-2019

An extension of `eslint-config-bluedrop` that adds support for ECMAScript 10 - 2019.

1. Ensure you have installed the dependencies from General Setup
1. Add `"extends": ["bluedrop", "bluedrop/config/ecmascript-10"]` to your ESLint config file

### eslint-config-bluedrop/config/mocha

An extension of `eslint-config-bluedrop` that adds support for Mocha.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-mocha`
1. Add `"extends": ["bluedrop", "bluedrop/config/mocha"]` to your ESLint config file

### eslint-config-bluedrop/config/node

An extension of `eslint-config-bluedrop` that adds support for Node.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-node`
1. Add `"extends": ["bluedrop", "bluedrop/config/node"`] to your ESLint config file

### eslint-config-bluedrop/config/react

An extension of `eslint-config-bluedrop` that adds support for React.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-node eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`
1. Add `"extends": ["bluedrop", "bluedrop/config/react"]` to your ESLint config file
1. You can also specify your react version (if it is not the latest version) in your ESLint config file like so:

```javascript
...
settings: {
  react: {
    version: '16.x', // defaults to 'detect'
  },
}
...
```

### `eslint-config-bluedrop/config/typescript`

Adds support for `typescript-eslint-parser` and the [ESLint Typescript Plugin][@typescript-eslint/eslint-plugin].

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev  babel-eslint @typescript-eslint/eslint-plugin`
1. add `"extends": ["bluedrop", "bluedrop/config/typescript"]` to your ESLint config file

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

## License

This project is released under the ISC license. See [LICENSE](LICENSE).

[@typescript-eslint/eslint-plugin]:https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
