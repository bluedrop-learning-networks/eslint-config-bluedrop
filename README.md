# eslint-config-bluedrop

[![Dependency Status](https://david-dm.org/CoursePark/eslint-config-bluedrop.svg)](https://david-dm.org/CoursePark/eslint-config-bluedrop)
[![Build Status](https://travis-ci.org/CoursePark/eslint-config-bluedrop.svg?branch=master)](https://travis-ci.org/CoursePark/eslint-config-bluedrop)
[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://raw.githubusercontent.com/CoursePark/eslint-config-bluedrop/master/LICENSE)

This package provides Bluedrop's `.eslintrc` as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-bluedrop

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-strict-newline`.

1. `npm install --save-dev eslint-config-bluedrop eslint-plugin-strict-newline eslint`
2. add `"extends": "bluedrop"` to your `.eslintrc`

### eslint-config-bluedrop/mocha

An extension of `eslint-config-bluedrop` that adds support for mocha.

1. `npm install --save-dev eslint-config-bluedrop eslint-plugin-strict-newline eslint`
2. add `"extends": "bluedrop/mocha"` to your `.eslintrc`

## Contributing

Add new rule definitions under the files located in `rules` ensuring to keep the rule correctly categorized and in the
same order as defined on the [ESLint rules](http://eslint.org/docs/rules/) page.

This project self-lints and ensure that all file paths are correct. You can run these checks with the `npm run test`
command.

## License

This project is released under the ISC license. See [LICENSE](LICENSE).
