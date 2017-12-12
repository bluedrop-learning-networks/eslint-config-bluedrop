# eslint-config-bluedrop

[![Dependency Status](https://david-dm.org/CoursePark/eslint-config-bluedrop.svg)](https://david-dm.org/CoursePark/eslint-config-bluedrop)
[![Build Status](https://travis-ci.org/CoursePark/eslint-config-bluedrop.svg?branch=master)](https://travis-ci.org/CoursePark/eslint-config-bluedrop)
[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://raw.githubusercontent.com/CoursePark/eslint-config-bluedrop/master/LICENSE)

This package provides Bluedrop's `.eslintrc` as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### General Setup

1. `npm install --save-dev eslint-config-bluedrop eslint-plugin-filenames eslint-plugin-promise eslint-plugin-security eslint`

### eslint-config-bluedrop

Our default export contains all of our ESLint rules, including ECMAScript 6+.

1. Add `"extends": "bluedrop"` to your ESLint config file

### eslint-config-bluedrop/jest

An extension of `eslint-config-bluedrop` that adds support for Jest.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-jest`
1. Add `"extends": "bluedrop/jest"` to your ESLint config file

### eslint-config-bluedrop/mocha

An extension of `eslint-config-bluedrop` that adds support for Mocha.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-mocha`
1. Add `"extends": "bluedrop/mocha"` to your ESLint config file

### eslint-config-bluedrop/node

An extension of `eslint-config-bluedrop` that adds support for Node.

1. Ensure you have installed the dependencies from General Setup
1. Add `"extends": "bluedrop/node"` to your ESLint config file

### eslint-config-bluedrop/react

An extension of `eslint-config-bluedrop` that adds support for mocha.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-react`
1. Add `"extends": "bluedrop/react"` to your ESLint config file

### eslint-config-bluedrop/babel

An extension of `eslint-config-bluedrop` that adds support for eslint-babel.

1. Ensure you have installed the dependencies from General Setup
1. `npm install --save-dev eslint-plugin-babel`
1. Add `"extends": "bluedrop/babel"` to your ESLint config file

### eslint-config-bluedrop/ecmascript-7

An extension of `eslint-config-bluedrop` that adds support for ECMAScript 7.

1. Ensure you have installed the dependencies from General Setup
1. Add `"extends": "bluedrop/ecmascript-7"` to your ESLint config file

### eslint-config-bluedrop/ecmascript-8

An extension of `eslint-config-bluedrop` that adds support for ECMAScript 8.

1. Ensure you have installed the dependencies from General Setup
1. Add `"extends": "bluedrop/ecmascript-8"` to your ESLint config file

## Contributing

Add new rule definitions under the files located in `rules` ensuring to keep the rule correctly categorized and in the
same order as defined on the [ESLint rules](http://eslint.org/docs/rules/) page.

This project self-lints and ensure that all file paths are correct. You can run these checks with the `npm run test`
command.

## License

This project is released under the ISC license. See [LICENSE](LICENSE).
