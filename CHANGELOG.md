# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [10.0.3] - 2023-06-30

### Added

- **node 20 support** by updating `eslint-plugin-jsdoc` to `43.2.0`.

## [10.0.0] - 2023-03-00
### Added
- Support for ECMAScript [2021 - 2023]
- JSDoc plugin and configuration

### Changed
- Update ESLint and all plugins to latest and configure all new rules (breaking)

### Removed
- Interactive dependency install script

## [9.0.0] - 2020-06-19
### Added
- Support for ECMAScript 2020 (11)
- Interactive dependency install script

### Changed
- Update ESLint and all plugins to latest and configure all new rules (breaking)
- ECMAScript 2018 (9) and 2019 (10) are now part of the common configuration (breaking)
- Add `dynamicImport` ignore to `node/no-unsupported-features/es-syntax` - #63
- Disable `require-atomic-updates` rule - #62
- Disable `security/detect-child-process` for console config

### Removed
- Configurations for ECMAScript 2018 (9) and 2019 (10)
- JSDoc plugin and configuration
- Typescript plugin and configuration

## [8.0.0] - 2019-12-09
### Added
- Add config for ECMAScript 2019 (10)
- Import/require order (`import/order`)

### Changed
- Update ESLint and all plugins to latest and configure all new rules
- Rename ECMAScript 2018 (9) from `ecmascript-9` to `ecmascript-2018`
- ECMAScript 2015 (6), 2016 (7) and 2017 (8) are now part of the common configuration
- Relax extensions (`import/extensions`)

### Removed
- Configurations for ECMAScript 2015 (6), 2016 (7) and 2017 (8)
- Jest plugin and configuration

## [7.2.0] - 2019-09-25
### Changed
- Disable `unicorn/prefer-node-append`, since `document.append` is not supported in ie11

## [7.1.0] - 2019-08-30
### Changed
- Add `ignoreRestSiblings` and `argsIgnorePattern` for `no-unused-vars` rule

## [7.0.0] - 2019-08-27
### Added
- New rules since last major release
- unicorn plugin added to common rule set
- import plugin added to common rule set
- eslint-comments plugin added to common rule set
- react-hooks plugin added to existing react rule set
- jsx-a11y plugin added to existing react rule set
### Changed
- Ignore `no-process-env` for console configuration
- Ignore `forbid-component-props` within react configuration
- Ignore `jsx-pascal-case` if the component is named `_T`
### Removed
- Drop support for node v6, following eslint
- Remove configurations already exposed via common

## [6.0.0] - 2019-02-11
### Added
- JSDoc support
- New rules since last major release
### Changed
- Moved from `eslint-plugin-typescript` to `@typescript-eslint`

## [5.0.0] - 2018-09-05
### Added
- ECMAScript-9 configuration
- Specifies React 16 as the default React version
- New rules since last major release
- Typescript support
- Console application configuration

## [4.0.0] - 2018-04-12
### Added
- ChaiJS support
- Node plugin support
- New rules since last major release
### Changed
- Disabled `promise/no-native`
- `no-unused-expressions` now errors on ternary and short circuit cases
- Disabled `filenames/match-regex` and `security/detect-non-literal-fs-filename` in mocha config
### Removed
- Deprecated rules

## [3.3.0] - 2017-12-13
### Changed
- Disabled `require-await`

## [3.2.0] - 2017-12-12
### Added
- Support for ECMAScript 7 & 8

## [3.1.0] - 2017-09-14
### Changed
- Don't enforce valid JSDoc comments (disabled `valid-jsdoc`)
- Apply the same filename rules to Jest as we do React

## [3.0.0] - 2017-05-18
### Added
- React/JSX support
- Jest support
- Promise support
- Filename support
- Security support
- Babel support
### Changed
- Added better mocha support
### Removed
- Custom plugins

## [2.0.0] - 2016-08-09
### Added
- Added `max-len` rule
- Added `max: 1`, `maxEOF: 0` and `maxBOF: 0` to `no-multiple-empty-lines`
### Changed
- Allow `allowShortCircuit` and `allowTernary` for `no-unused-expressions`

## 1.1.0 - 2016-06-17
### Changed
- Turned arrow-body-style to off
- Bumped newline-per-chained-call chain depth to 4

## 1.0.0 - 2016-06-16
### Added
- Initial rule set

[Unreleased]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v9.0.0...HEAD
[9.0.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v8.0.0...v9.0.0
[8.0.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v7.2.0...v8.0.0
[7.2.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v7.1.0...v7.2.0
[7.1.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v7.0.0...v7.1.0
[7.0.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v6.0.0...v7.0.0
[6.0.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v5.0.0...v6.0.0
[5.0.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v3.3.0...v4.0.0
[3.3.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v3.2.0...v3.3.0
[3.2.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/bluedrop-learning-networks/eslint-config-bluedrop/compare/v1.0.0...v2.0.0
